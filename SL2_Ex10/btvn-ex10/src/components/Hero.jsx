import React from "react";
import { Container } from "react-bootstrap";

/**
 * Hero
 * ----
 * React-Bootstrap KHÔNG có sẵn component "banner ảnh nền + chữ chồng lên".
 * Đây là điểm quan trọng cần hiểu: react-bootstrap chỉ bao (wrap) các thành
 * phần Bootstrap chuẩn (Navbar, Card, Form, Modal...) thành component React.
 * Với layout tùy biến như hero banner, bạn vẫn phải tự viết CSS
 * (ở đây dùng inline style + className), chỉ dùng <Container> của
 * react-bootstrap để canh giữa nội dung theo lưới Bootstrap có sẵn.
 */
function Hero() {
  const heroStyle = {
    backgroundImage:
      "url('./Pizza.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "420px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const overlayStyle = {
    // Overlay bán trong suốt giúp chữ trắng nổi bật trên ảnh sáng,
    // tương tự kỹ thuật bạn dùng Bootstrap card/opacity ở Exercise 7.
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    padding: "48px 64px",
    textAlign: "center",
    borderRadius: "4px",
  };

  return (
    <div style={heroStyle}>
      <Container>
        <div style={overlayStyle} className="mx-auto" data-bs-theme="dark">
          <h1 className="text-white fw-bold display-4">Neapolitan Pizza</h1>
          <p className="text-white fs-5 mb-0">
            Authentic Italian taste in every bite
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
