import { React, props } from "react";
import "./homepage.style.css";
import bag from "./assets/bag.svg";

const Product = (props) => {
  return (
    <div className="product-card  p-2 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div className="product bg-white p-3">
        <div className="image-wrapper">
          <img src={props.imgUrl} className="product-image" alt="" />
        </div>
        <div className="product-info d-flex align-items-center justify-content-between">
          <div className="info-left">
            <h6 className="product-title title-dark">{props.title}</h6>
            <h2 className="subtitle-dark product-price">$ {props.price}</h2>
          </div>
          <div className="shopping-cart">
            <img src={bag} className="bag" alt="" />
            {/* <p className="subtitle">Add to Cart</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
