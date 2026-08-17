import React from "react";
import { Navbar, Nav, Container, Form, InputGroup, Button } from "react-bootstrap";

/**
 * NavigationBar
 * -------------
 * Khác với Exercise 4 (bạn tự viết JSX + CSS cho navbar), ở đây react-bootstrap
 * cung cấp sẵn <Navbar>, <Nav>, <Form.Control> đã có class Bootstrap đúng chuẩn
 * (nav-link, form-control, btn...) nên chỉ cần lắp props, không cần tự viết CSS.
 *
 * Lưu ý về "controlled component": ô tìm kiếm này KHÔNG dùng state vì đây chỉ là
 * demo giao diện. Nếu bạn muốn xử lý logic tìm kiếm thật, hãy tham khảo lại
 * Exercise 12 (useState) để biến nó thành controlled input.
 */
function NavigationBar() {
  return (
    // bg="dark" + variant="dark" là 2 props của react-bootstrap giúp Navbar
    // tự đổi màu chữ/nền theo theme tối, tương đương việc bạn tự thêm class
    // "navbar-dark bg-dark" trong Bootstrap thuần (Exercise 5).
    <Navbar bg="dark" variant="dark" expand="md" className="px-3 py-3">
      <Container fluid>
        <Navbar.Brand href="#home" className="fw-bold">
          Pizza House
        </Navbar.Brand>

        {/* expand="md" ở Navbar cha sẽ tự ẩn phần dưới vào hamburger menu
            khi màn hình nhỏ hơn md — đây là hành vi responsive có sẵn,
            không cần media query thủ công như Bootstrap Grid ở Exercise 6. */}
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="me-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <Form>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="danger">
                <i className="bi bi-search" />
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
