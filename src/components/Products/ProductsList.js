import React from "react";
import Product from "./Product";
import classes from "./ProductsList.module.css";

const ProductsList = (props) => {

  const removeHandler = (title) => {
    props.removeHandler(title)
  }

  const productsArray = props.productsArray.map((item) => (
    <Product 
    removeHandler={removeHandler}
    key={Math.ceil(Math.random() * 100000000)} 
    title={item.title}
    author={item.author}
    category={item.category}
    age={item.ageRestriction}
    rating={item.rating}
    price={item.price}
    description={item.description}
    img={item.picture}
    />
  ));

  return (
    <div className={classes.container}>
      <ul>
        {productsArray}
      </ul>
    </div>
  );
}

export default ProductsList;
