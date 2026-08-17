import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

/**
 * BookingForm
 * -----------
 * Đây là "controlled component" — kiến thức trọng tâm của Exercise 8
 * (Form Controls) và Exercise 12 (useState):
 *   - Mỗi input có value={state} và onChange cập nhật state tương ứng.
 *   - React state luôn là "nguồn sự thật" (source of truth) của form,
 *     không phải giá trị DOM tự quản lý như HTML thuần.
 *
 * Tại sao gom 4 field vào 1 object `formData` thay vì 4 state riêng?
 * -> Trade-off:
 *    + Gom vào object: ít dòng code khi có nhiều field, dễ submit nguyên cục.
 *      Nhược điểm: mỗi lần onChange phải spread { ...formData } (tốn 1 dòng).
 *    + Tách state riêng (const [name, setName] = useState("")):
 *      code onChange ngắn hơn, nhưng nếu form có 10+ field sẽ rất dài dòng.
 *  Ở quy mô form này (4 field) cả 2 cách đều hợp lý, ở đây chọn gom object
 *  để bạn làm quen pattern thường gặp khi form lớn dần.
 */
function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    service: "",
    message: "",
  });

  // Một handler dùng chung cho mọi input nhờ thuộc tính "name" của thẻ input
  // trùng với key trong formData -> tránh viết 4 hàm onChange riêng lẻ.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // chặn reload trang mặc định của <form>
    console.log("Booking submitted:", formData);
    alert(`Cảm ơn ${formData.name}! Bàn của bạn đã được ghi nhận.`);
  };

  const inputStyle = {
    backgroundColor: "black",
    color: "white",
    borderColor: "#555",
    boxShadow: "none",
    "::placeholder": {
      color: "rgba(255, 255, 255, 0.6)",
    },
  };

  return (
    <div className="bg-dark py-5">
      <Container style={{ maxWidth: "700px" }}>
        <h2 className="text-center text-white fw-bold mb-4">
          Book Your Table
        </h2>

        {/* onSubmit trên <Form>, KHÔNG dùng onClick trên button, để form
            còn hoạt động đúng khi người dùng nhấn Enter trong input. */}
        <Form onSubmit={handleSubmit}>
          <Row className="g-3 mb-3">
            <Col md={4}>
              <Form.Label className="text-white">Your Name *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </Col>

            <Col md={4}>
              <Form.Label className="text-white">Date *</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </Col>

            <Col md={4}>
              <Form.Label className="text-white">Select a Service *</Form.Label>
              <Form.Select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                style={inputStyle}
              >
                <option value="">Choose service...</option>
                <option value="dine-in">Dine In</option>
                <option value="takeaway">Takeaway</option>
                <option value="delivery">Delivery</option>
              </Form.Select>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label className="text-white">
              Please share your message
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              style={inputStyle}
            />
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="warning" className="fw-bold px-4">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default BookingForm;
