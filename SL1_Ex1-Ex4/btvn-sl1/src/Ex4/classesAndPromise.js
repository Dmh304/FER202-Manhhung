// classesAndPromise.js
// Bài tập: Class (ES6) và Promise

// ============================================================
// PHẦN 1: Class
// ============================================================
// Class trong ES6 là "cú pháp đường" (syntactic sugar) cho prototype-based
// inheritance vốn có của JavaScript — giúp code trông giống các ngôn ngữ
// OOP truyền thống (Java, C#) mà bạn đã quen, dù bản chất bên dưới vẫn
// là prototype chain.

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

// "extends" thiết lập kế thừa; "super(...)" gọi constructor của lớp cha
// để khởi tạo các thuộc tính chung (name, sound) trước khi thêm thuộc tính riêng.
class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Woof');
    this.breed = breed;
  }

  // Override (ghi đè) phương thức của lớp cha
  makeSound() {
    super.makeSound(); // vẫn gọi lại logic gốc của cha nếu cần
    console.log(`(${this.breed} breed)`);
  }
}

const genericAnimal = new Animal('Some Animal', 'Some Sound');
const myDog = new Dog('Rex', 'Golden Retriever');

genericAnimal.makeSound(); // "Some Animal says Some Sound"
myDog.makeSound();
// "Rex says Woof"
// "(Golden Retriever breed)"

// ============================================================
// PHẦN 2: Promise
// ============================================================
// Promise đại diện cho một giá trị SẼ CÓ trong tương lai (kết quả của tác vụ
// bất đồng bộ). Nó có 3 trạng thái: pending -> fulfilled (resolve) hoặc
// rejected (reject).
//
// Yêu cầu bài: sinh số ngẫu nhiên.
//  - Nếu số > 5 -> resolve (trả về số đó)
//  - Nếu số <= 5 -> reject với thông báo "Error"

function getRandomNumberGreaterThanFive() {
  return new Promise((resolve, reject) => {
    // Math.random() trả về số thực trong [0, 1), nhân 10 và làm tròn
    // để có số nguyên ngẫu nhiên trong khoảng 0-9 (có thể chỉnh biên độ tùy ý).
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber > 5) {
      resolve(randomNumber);
    } else {
      reject('Error');
    }
  });
}

// Cách dùng: .then() xử lý khi resolve, .catch() xử lý khi reject
getRandomNumberGreaterThanFive()
  .then((number) => {
    console.log('Số hợp lệ (>5):', number);
  })
  .catch((error) => {
    console.log('Bị reject:', error);
  });

// --- Cách dùng thay thế với async/await (cú pháp hiện đại hơn, dễ đọc hơn) ---
// async/await là "syntactic sugar" bên trên Promise, giúp code bất đồng bộ
// trông giống code đồng bộ tuần tự, tránh lồng .then() nhiều tầng ("callback hell").
async function runDemo() {
  try {
    const number = await getRandomNumberGreaterThanFive();
    console.log('[async/await] Số hợp lệ:', number);
  } catch (error) {
    console.log('[async/await] Bị reject:', error);
  }
}
runDemo();

export { Animal, Dog, getRandomNumberGreaterThanFive, runDemo };