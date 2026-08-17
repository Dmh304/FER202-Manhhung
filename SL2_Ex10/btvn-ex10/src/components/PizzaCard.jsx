import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * PizzaCard
 * ---------
 * Đây là component "leaf" (lá) — giống nguyên tắc ở Exercise 9 (SimpleCard):
 * "Create a component for every rectangle... start at the leaf nodes".
 * PizzaCard chỉ nhận 1 object pizza qua props và không biết gì về danh sách
 * cha (MenuSection) → dễ test, dễ tái sử dụng ở nơi khác.
 *
 * Áp dụng PropTypes như Exercise 19 để validate props ngay tại runtime.
 */
function PizzaCard({ pizza }) {
  return (
    <Card className="h-100 border-0 shadow-sm position-relative">
      {/* Badge SALE đặt tuyệt đối ở góc trên trái ảnh */}
      <Badge
        bg="warning"
        text="dark"
        className="position-absolute m-2"
        style={{ zIndex: 1 }}
      >
        SALE
      </Badge>

      <Card.Img variant="top" src={pizza.image} alt={pizza.name} />

      <Card.Body className="text-center">
        <Card.Title as="h5">{pizza.name}</Card.Title>

        {/* Giá cũ gạch ngang + giá mới nổi bật màu vàng, đúng ảnh mẫu */}
        <Card.Text>
          <span className="text-decoration-line-through text-muted me-2">
            ${pizza.oldPrice.toFixed(2)}
          </span>
          <span className="fw-bold text-warning">
            ${pizza.newPrice.toFixed(2)}
          </span>
        </Card.Text>

        <Button variant="dark" className="w-100">
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
}

// PropTypes.shape mô tả đúng cấu trúc object pizza trong data/pizzas.js
PizzaCard.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    oldPrice: PropTypes.number.isRequired,
    newPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default PizzaCard;
