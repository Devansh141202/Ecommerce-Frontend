import React from "react";
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom';


const Product = ({ product }) => {
  const options = {
    edit: false,
    color: "black",
    activeColor: "tomato",
    value: product.ratings,
    size: window.innerWidth < 600 ? 20 : 25,
    isHalf: true,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />
        <span>({product.numOfReviews} reviwes)</span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default Product;
