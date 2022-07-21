import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { v4 as uuidv4 } from "uuid";

const DUMMY_PRODUCTS = [
  {
    id: uuidv4(),
    price: 6,
    title: "My First Book",
    description: "This is a first product - amazing!",
  },
  {
    id: uuidv4(),
    price: 5,
    title: "My second Book",
    description: "This is a second product - noice!",
  },
  {
    id: uuidv4(),
    price: 4,
    title: "My Third Book",
    description: "This is a third product - great!",
  },
];

const productItems = DUMMY_PRODUCTS.map((element) => {
  return (
    <ProductItem
      key={element.id}
      id={element.id}
      title={element.title}
      price={element.price}
      desccription={element.description}
    />
  );
});

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productItems}</ul>
    </section>
  );
};

export default Products;
