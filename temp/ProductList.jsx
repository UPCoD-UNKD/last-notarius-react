import React from "react";
import { Link } from "react-router-dom";

export const ProductList = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} product={product}>
          {/* <NavLink to={`/notarius/${id}`}></NavLink> */}
          <Link to={`${product.id}`} >
            <div>

           

            <img src="https://via.placeholder.com/200x100" alt="" />
            <div>{product.fio}</div>
            <div>{product.name}</div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};