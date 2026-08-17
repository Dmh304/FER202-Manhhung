import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import PizzaCard from "./PizzaCard";

/**
 * MenuSection
 * -----------
 * Component "wrapper" (giống SimpleCard ở Exercise 9): nhận mảng pizzas
 * qua props và dùng .map() để render danh sách PizzaCard — kỹ thuật
 * bạn đã luyện ở Exercise 4 (forEach/map trên mảng companies).
 *
 * Row/Col của react-bootstrap tương đương class "row" và "col-*" trong
 * Bootstrap Grid thuần (Exercise 6), nhưng khai báo bằng props số
 * (xs, md, lg) thay vì phải nhớ tên class.
 */
function MenuSection({ pizzas }) {
  return (
    <div className="bg-dark py-5">
      <Container>
        <h2 className="text-center text-white fw-bold mb-5">Our Menu</h2>

        <Row className="g-4">
          {pizzas.map((pizza) => (
            // xs=12: mobile mỗi hàng 1 card, md=6: tablet 2 card/hàng,
            // lg=3: desktop 4 card/hàng — tương đương grid responsive
            // bạn đã làm ở Exercise 6.
            <Col key={pizza.id} xs={12} sm={6} lg={3}>
              <PizzaCard pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

MenuSection.propTypes = {
  pizzas: PropTypes.array.isRequired,
};

export default MenuSection;
