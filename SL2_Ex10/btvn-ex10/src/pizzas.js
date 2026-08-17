// Tách dữ liệu ra khỏi component theo nguyên tắc "separation of concerns"
// đã học ở các bài trước: logic/data tách biệt khỏi UI.
// Sau này nếu đổi sang fetch từ json-server (Exercise 26) hay Redux (Exercise 24/25),
// bạn chỉ cần thay nguồn dữ liệu này mà không phải sửa component MenuSection.

const pizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    image: "./Margherita.jpg",
    oldPrice: 20.0,
    newPrice: 14.0,
  },
  {
    id: 2,
    name: "Mushroom Pizza",
    image: "./Mushroom.jpg",
    oldPrice: 22.0,
    newPrice: 17.0,
  },
  {
    id: 3,
    name: "Hawaiian Pizza",
    image: "./Hawaii.jpg",
    oldPrice: 19.0,
    newPrice: 16.0,
  },
  {
    id: 4,
    name: "Pesto Pizza",
    image: "./Pesto.jpg",
    oldPrice: 23.0,
    newPrice: 17.0,
  },
];

export default pizzas;
