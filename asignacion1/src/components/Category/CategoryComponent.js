import React from "react";

export const CategoryComponent = ({ category }) => {
  return (
    <>
      <div className="category-item">
        <img src={category.image} alt="" />
        <h1 className="centrado">{category.categoria}</h1>
      </div>
    </>
  );
};
