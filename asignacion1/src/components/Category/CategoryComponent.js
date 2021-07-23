import React from "react";
import { useDispatch } from "react-redux";
import { setSelectCategoria } from "../../action/selectCategoria";
import { useHistory} from 'react-router-dom'

export const CategoryComponent = ({ category }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleClick = () => {
    dispatch(setSelectCategoria(category.categoria));
    history.push('/screens/productPage')
  }
  return (
    <>
      <div className="category-item">
        <img src={category.image} alt="" onClick={handleClick} />
        <h1 className="centrado" onClick={handleClick}>{category.categoria}</h1>
      </div>
    </>
  );
};
