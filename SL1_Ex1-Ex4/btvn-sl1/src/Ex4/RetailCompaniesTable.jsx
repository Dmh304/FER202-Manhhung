// RetailCompaniesTable.js
//
// Yêu cầu Ex4 (phần 3): Lọc công ty category "Retail", tăng start lên 1,
// và hiển thị thông tin (name, category, start, end) ra giao diện.
//
// LƯU Ý QUAN TRỌNG VỀ CÁCH LÀM:
// Đề bài gốc mô tả theo kiểu vanilla JS: "append vào DOM một div chứa
// name/category/start/end trong các thẻ <p>". Đó là cách làm khi KHÔNG dùng
// framework — tự tay gọi document.createElement() + appendChild().
//
// Trong React, ta KHÔNG thao tác DOM trực tiếp như vậy. Thay vào đó:
//   1. Tính toán dữ liệu cần hiển thị (mảng object đã filter + map).
//   2. Lưu dữ liệu đó vào state hoặc biến thường.
//   3. Dùng JSX để "mô tả" giao diện dựa trên dữ liệu đó.
//   4. React tự động tạo DOM tương ứng và cập nhật khi dữ liệu thay đổi.
//
// Đây là khác biệt cốt lõi giữa lập trình DOM thủ công và lập trình
// "khai báo" (declarative) của React — bạn mô tả "giao diện trông như thế nào
// ứng với dữ liệu nào", không tự tay ra lệnh "tạo phần tử, rồi chèn nó vào đâu".

import React from 'react';
import { companies } from './data';

function RetailCompaniesTable() {
    // Bước 1 + 2: Lọc Retail, tăng start lên 1 — dùng spread để tạo bản sao,
    // không mutate mảng "companies" gốc (nguyên tắc immutability trong React).
    const retailCompanies = companies
        .filter((company) => company.category === 'Retail')
        .map((company) => ({ ...company, start: company.start + 1 }));

    // Bước 3: JSX mô tả bảng dựa trên mảng đã xử lý ở trên.
    // Dùng .map() để sinh ra 1 dòng <tr> cho mỗi công ty — đây chính là cách
    // "render list" chuẩn trong React (tương đương forEach + appendChild
    // trong vanilla JS, nhưng khai báo thay vì mệnh lệnh).
    return (
        <table style={styles.table}>
            <tbody>
                {retailCompanies.map((company) => (
                    // "key" là prop bắt buộc khi render list trong React — giúp React
                    // nhận diện từng dòng khi mảng thay đổi (thêm/xóa/sắp xếp lại),
                    // tránh phải render lại toàn bộ danh sách mỗi lần cập nhật.
                    // Nên dùng id thật nếu có; ở đây dùng "name" vì dữ liệu không có id.
                    <tr key={company.name}>
                        <td style={styles.cellName}>{company.name}</td>
                        <td style={styles.cellYear}>{company.start}</td>
                        <td style={styles.cellYear}>{company.end}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

// Style inline đơn giản để giống layout trong ảnh mẫu (bảng có viền,
// chữ đậm). Trong dự án thực tế, phần này nên tách ra file CSS riêng
// hoặc dùng Bootstrap/CSS Module — ở đây để inline cho gọn vì là bài tập nhỏ.
const styles = {
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'Arial, sans-serif',
    },
    cellName: {
        border: '1px solid #ccc',
        padding: '10px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cellYear: {
        border: '1px solid #ccc',
        padding: '10px',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '150px',
    },
};

export default RetailCompaniesTable;