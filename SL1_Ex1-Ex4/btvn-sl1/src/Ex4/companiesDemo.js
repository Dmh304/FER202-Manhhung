// companiesDemo.js
// Bài tập tổng hợp: forEach, filter, sort, destructuring, rest/spread, closure, URL parsing

import { companies, ages, person } from './data';

// ============================================================
// 1. forEach: in tên từng công ty
// ============================================================
// forEach KHÔNG trả về giá trị mới (khác map/filter) — chỉ dùng để "làm gì đó"
// với từng phần tử (side effect), ở đây là console.log.
console.log('--- 1. Tên các công ty ---');
companies.forEach((company) => console.log(company.name));

// ============================================================
// 2. filter: công ty thành lập sau năm 1987
// ============================================================
console.log('--- 2. Công ty thành lập sau 1987 ---');
const companiesAfter1987 = companies.filter((company) => company.start > 1987);
console.log(companiesAfter1987.map((c) => c.name));

// ============================================================
// 3. Lọc category "Retail", tăng start lên 1, append vào DOM
// ============================================================
// Lưu ý: đoạn này thao tác trực tiếp với DOM (document), nên chỉ chạy được
// trong môi trường trình duyệt (ví dụ gọi hàm này trong useEffect của component).
function renderRetailCompanies() {
  const retailCompanies = companies
    .filter((company) => company.category === 'Retail')
    .map((company) => ({ ...company, start: company.start + 1 }));
  // Dùng spread (...company) để tạo BẢN SAO object, tránh mutate (thay đổi trực
  // tiếp) dữ liệu gốc trong mảng companies — đây là nguyên tắc "immutability"
  // rất quan trọng trong React vì React so sánh reference để quyết định re-render.

  retailCompanies.forEach((company) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p>${company.name}</p>
      <p>${company.category}</p>
      <p>${company.start}</p>
      <p>${company.end}</p>
    `;
    document.body.appendChild(div);
  });

  return retailCompanies;
}

// ============================================================
// 4. sort: công ty theo end date tăng dần
// ============================================================
// sort() MẶC ĐỊNH mutate mảng gốc, nên ta spread ra mảng mới [...companies]
// trước khi sort để không làm thay đổi dữ liệu companies ban đầu.
console.log('--- 4. Công ty sắp xếp theo end date tăng dần ---');
const companiesByEndAsc = [...companies].sort((a, b) => a.end - b.end);
console.log(companiesByEndAsc.map((c) => `${c.name}: ${c.end}`));

// ============================================================
// 5. sort: ages giảm dần
// ============================================================
console.log('--- 5. Ages sắp xếp giảm dần ---');
const agesDesc = [...ages].sort((a, b) => b - a);
console.log(agesDesc);

// ============================================================
// 6. reduce: tổng ages
// ============================================================
const totalAge = ages.reduce((sum, age) => sum + age, 0);
console.log('--- 6. Tổng ages ---', totalAge);

// ============================================================
// 7. Object destructuring: tạo object mới từ companies[0]
// ============================================================
// Destructuring cho phép "bóc tách" các thuộc tính cần thiết từ object gốc,
// thay vì phải viết company.name, company.category dài dòng.
const { name, category } = companies[0];
const companySummary = {
  name,
  category,
  print() {
    console.log(`${this.name} - ${this.category}`);
  },
};
companySummary.print(); // "Company One - Finance"

// ============================================================
// 8. Rest parameters: hàm nhận số lượng tham số bất kỳ (đều là number)
// ============================================================
// Dấu "..." trong khai báo tham số gọi là REST parameter — gom tất cả
// argument truyền vào thành 1 mảng thực sự (khác với đối tượng "arguments" cũ).
function sumAll(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}
console.log('--- 8. sumAll(1,2,3,4,5) ---', sumAll(1, 2, 3, 4, 5)); // 15

// ============================================================
// 9. Hàm nhận tham số bất kỳ loại nào, gom vào mảng (spread nếu là mảng)
// ============================================================
function collectArgs(...args) {
  return args.reduce((result, item) => {
    // Nếu item là mảng, dùng spread để "trải phẳng" các giá trị của nó
    // vào mảng kết quả, thay vì đẩy nguyên cả mảng con vào (tránh lồng mảng).
    if (Array.isArray(item)) {
      return [...result, ...item];
    }
    return [...result, item];
  }, []);
}
console.log('--- 9. collectArgs ---', collectArgs(1, 'a', [2, 3], true));
// Kết quả: [1, 'a', 2, 3, true]

// ============================================================
// 10. Destructuring lồng nhau: lấy "street" từ person.address
// ============================================================
const {
  address: { street },
} = person;
console.log('--- 10. street ---', street); // "Lalaland 12"

// ============================================================
// 11. Closure: hàm đếm tăng dần mỗi lần gọi, bắt đầu từ 0
// ============================================================
// Closure là khi 1 hàm "ghi nhớ" biến trong scope bên ngoài nó, ngay cả sau khi
// hàm bên ngoài đã return. Ở đây createCounter() trả về 1 hàm con — hàm con này
// vẫn giữ tham chiếu tới biến "count" dù createCounter() đã chạy xong.
function createCounter() {
  let count = 0;
  return function () {
    return count++; // trả về giá trị hiện tại, SAU ĐÓ mới tăng (post-increment)
  };
}
const counter = createCounter();
console.log('--- 11. Closure counter ---');
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// ============================================================
// 12. Parse query string của URL thành object key-value
// ============================================================
function parseQueryParams(url) {
  const queryString = url.split('?')[1]; // lấy phần sau dấu "?"
  if (!queryString) return {};

  return queryString.split('&').reduce((params, pair) => {
    const [key, value] = pair.split('=');
    params[decodeURIComponent(key)] = decodeURIComponent(value ?? '');
    return params;
  }, {});
}
console.log(
  '--- 12. parseQueryParams ---',
  parseQueryParams('https://example.com/search?keyword=react&page=2')
);
// Kết quả: { keyword: 'react', page: '2' }

export {
  companiesAfter1987,
  renderRetailCompanies,
  companiesByEndAsc,
  agesDesc,
  totalAge,
  companySummary,
  sumAll,
  collectArgs,
  street,
  createCounter,
  parseQueryParams,
};