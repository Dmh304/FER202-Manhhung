// reduceDemo.js
// Bài tập: dùng reduce() để tính tổng/tích, sau đó viết gọn bằng arrow function

import { numbers } from './data'; // [1, 2, 3, 4]

/**
 * reduce(callback, initialValue) áp dụng callback lần lượt lên từng phần tử
 * (từ trái sang phải), "gom" kết quả vào 1 biến tích lũy (accumulator).
 *
 * Cú pháp callback: (accumulator, currentValue) => ...
 * - accumulator: giá trị được giữ lại qua các lần lặp
 * - currentValue: phần tử hiện tại của mảng
 * initialValue: giá trị khởi tạo ban đầu cho accumulator (bắt buộc nên truyền rõ
 * để tránh lỗi khi mảng rỗng).
 */

// --- Cách viết đầy đủ (function thông thường) ---
function sumFull(acc, current) {
  return acc + current;
}
const totalFull = numbers.reduce(sumFull, 0);
console.log('Tổng (function thường):', totalFull); // 10

function productFull(acc, current) {
  return acc * current;
}
const productResultFull = numbers.reduce(productFull, 1); // initial = 1 vì phép nhân
console.log('Tích (function thường):', productResultFull); // 24

// --- Cách viết rút gọn bằng Arrow Function ---
// Arrow function giúp giảm boilerplate: bỏ từ khóa "function", bỏ "return" nếu
// thân hàm chỉ có 1 biểu thức (implicit return).
const sumArrow = (acc, current) => acc + current;
const totalArrow = numbers.reduce(sumArrow, 0);
console.log('Tổng (arrow function):', totalArrow); // 10

// Có thể viết inline luôn không cần đặt tên biến trung gian:
const productArrow = numbers.reduce((acc, current) => acc * current, 1);
console.log('Tích (arrow function, inline):', productArrow); // 24

export { totalArrow, productArrow };