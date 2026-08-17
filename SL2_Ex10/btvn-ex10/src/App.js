import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import BookingForm from "./components/BookingForm";
import pizzas from "./pizzas";

/**
 * App
 * ---
 * Component gốc chỉ làm nhiệm vụ "lắp ráp" (composition), không chứa
 * logic hiển thị chi tiết. Đây là điểm khác biệt so với Exercise 2
 * (App.js chỉ render 1 thẻ <h1>) — giờ App đã đóng vai trò điều phối
 * nhiều component con, đúng tinh thần kiến trúc React thực tế.
 *
 * pizzas được import từ data/pizzas.js rồi truyền xuống MenuSection
 * qua props -> đây chính là "lifting state up": dữ liệu nằm ở cấp cao
 * nhất cần nó, rồi truyền xuống con thay vì để mỗi component tự khai báo.
 */
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <MenuSection pizzas={pizzas} />
      <BookingForm />
    </div>
  );
}

export default App;
