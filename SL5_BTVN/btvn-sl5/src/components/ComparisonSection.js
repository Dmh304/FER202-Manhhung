import React from 'react';

export const ComparisonSection = () => {
  return (
    <div className="card comparison-card">
      <div className="comparison-header">
        <h2>Bảng So Sánh & Phân Tích Kỹ Thuật (Nộp Cô)</h2>
        <p className="comparison-subtitle">
          So sánh việc quản lý Search & Filter bằng Hooks đơn thuần (useState - Lab 2-3) với React Router Hooks (useParams & useSearchParams)
        </p>
      </div>

      <div className="table-responsive">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Tiêu chí so sánh</th>
              <th>Hooks đơn thuần (useState) <br/><small>(Lab 2-3)</small></th>
              <th>React Router Hooks (useParams & useSearchParams) <br/><small>(SL5 / Bài tập này)</small></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold">1. Nơi lưu trữ trạng thái (State Location)</td>
              <td>Lưu trong React Component State (bộ nhớ RAM tạm thời của ứng dụng).</td>
              <td>Lưu trực tiếp trên thanh địa chỉ trình duyệt (URL Query String & Path Parameters).</td>
            </tr>
            <tr>
              <td className="font-bold">2. Khả năng chia sẻ & Bookmark (Shareability)</td>
              <td><span className="badge-no">❌ Không thể</span><br/>Dán URL sang tab khác sẽ mất toàn bộ bộ lọc và quay về dữ liệu ban đầu.</td>
              <td><span className="badge-yes">✅ Rất tốt</span><br/>Có thể copy URL (vd: <code>/classes?keyword=SE&status=OPEN</code>) để gửi người khác mở đúng kết quả.</td>
            </tr>
            <tr>
              <td className="font-bold">3. Giữ trạng thái khi F5 / Reload trang</td>
              <td><span className="badge-no">❌ Mất dữ liệu lọc</span><br/>Toàn bộ <code>useState</code> bị reset về giá trị ban đầu.</td>
              <td><span className="badge-yes">✅ Giữ nguyên</span><br/>Khi làm mới trang, `useSearchParams` đọc lại các param trên URL để khôi phục trạng thái lọc.</td>
            </tr>
            <tr>
              <td className="font-bold">4. Nút Back / Forward của Trình duyệt</td>
              <td><span className="badge-no">❌ Không hỗ trợ</span><br/>Nút Back sẽ thoát khỏi trang thay vì quay lại thao tác filter trước.</td>
              <td><span className="badge-yes">✅ Tích hợp hoàn hảo</span><br/>Thao tác filter được ghi vào History API của browser, bấm Back/Forward để khôi phục lịch sử lọc.</td>
            </tr>
            <tr>
              <td className="font-bold">5. Điều hướng trang chi tiết (Detail Page)</td>
              <td>Thường dùng <code>selectedId</code> state trong cùng 1 component hoặc bật Popup Modal.</td>
              <td>Sử dụng <code>useParams</code> để đọc `id` động từ đường dẫn <code>/detail/:id</code>, chuẩn kiến trúc SPA Router.</td>
            </tr>
            <tr>
              <td className="font-bold">6. Tối ưu hiệu năng với useMemo</td>
              <td>Dùng <code>useMemo</code> phụ thuộc vào các biến state: <code>[classes, keyword, subject, status]</code>.</td>
              <td>Dùng <code>useMemo</code> phụ thuộc vào giá trị đọc từ URL params: <code>[classes, searchParams]</code>. Cả 2 đều tính toán lại khi cần.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="comparison-summary">
        <h3>💡 Kết Luận & Đánh Giá</h3>
        <ul className="summary-list">
          <li>
            <strong>Khi nào dùng useState đơn thuần?</strong> Phù hợp cho các bộ lọc đơn giản, ứng dụng nhỏ không cần chia sẻ URL, hoặc các form popup tạm thời trong trang.
          </li>
          <li>
            <strong>Khi nào nên dùng useSearchParams & useParams?</strong> Là chuẩn mực cho các ứng dụng Web thương mại điện tử, quản lý danh sách lớn (Dashboard, Admin portal). Giúp tăng trải nghiệm người dùng (UX), hỗ trợ SEO và cho phép chia sẻ liên kết trực tiếp.
          </li>
        </ul>
      </div>
    </div>
  );
};
