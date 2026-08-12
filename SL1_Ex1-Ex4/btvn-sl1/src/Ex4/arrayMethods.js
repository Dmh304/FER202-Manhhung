// arrayMethods.js
// Bài tập: sử dụng các Array method của ES6 (find, filter, every, some)
// Yêu cầu: xác định người trong độ tuổi teen (10 <= age <= 20)

import { people } from './data';

// Hàm điều kiện dùng chung: kiểm tra một người có phải "teen" hay không.
// Tách ra thành hàm riêng để tránh lặp lại logic ở 4 method bên dưới (nguyên tắc DRY).
const isTeen = (person) => person.age >= 10 && person.age <= 20;

/**
 * 1. find(): trả về PHẦN TỬ ĐẦU TIÊN thỏa điều kiện, hoặc undefined nếu không có.
 * Khác với filter, find() dừng ngay khi tìm thấy kết quả đầu tiên -> hiệu quả hơn
 * khi bạn chỉ cần 1 kết quả duy nhất.
 */
const firstTeen = people.find(isTeen);
console.log('1. Người teen đầu tiên:', firstTeen);
// Kết quả mong đợi: { name: 'Ann', age: 19 }

/**
 * 2. filter(): trả về MỘT MẢNG MỚI chứa tất cả phần tử thỏa điều kiện.
 * Nếu không có phần tử nào thỏa, trả về mảng rỗng [] (không phải undefined).
 */
const allTeens = people.filter(isTeen);
console.log('2. Tất cả người teen:', allTeens);
// Kết quả mong đợi: [{ name: 'Ann', age: 19 }, { name: 'Elisabeth', age: 16 }]

/**
 * 3. every(): trả về true CHỈ KHI tất cả phần tử đều thỏa điều kiện.
 * Thường dùng để kiểm tra tính hợp lệ toàn bộ (validation).
 */
const areAllTeens = people.every(isTeen);
console.log('3. Có phải tất cả đều là teen?', areAllTeens);
// Kết quả mong đợi: false (vì Jack 50 tuổi, Michael 9 tuổi không phải teen)

/**
 * 4. some(): trả về true nếu CHỈ CẦN ÍT NHẤT 1 phần tử thỏa điều kiện.
 * Thường dùng để kiểm tra "có tồn tại hay không" mà không cần biết là ai/bao nhiêu.
 */
const hasAnyTeen = people.some(isTeen);
console.log('4. Có ai là teen không?', hasAnyTeen);
// Kết quả mong đợi: true

export { firstTeen, allTeens, areAllTeens, hasAnyTeen };