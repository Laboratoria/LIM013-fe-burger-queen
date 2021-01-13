import React, { useState } from "react";
import "../assets/styles/components/ProductOrder.scss";
const ProductOrder = (props) => {
  // Construir objeto :)
  const {item}=props;

  // Funcion para aumentar y disminuir cantidad
  let [result, setResult] = useState(0);
  function handlePlus(){
    setResult(result+=1);
  }
  function handleMinus(){
    const verifyMInNumber = result > 0 ? result-=1: 0;
    setResult(verifyMInNumber)
  }
  return (
    <section className="product-order">
      <div>
        <button type="button" className="button-add" onClick= {handlePlus}>
          <i className="fas fa-plus-circle"></i>
        </button>
        <p>{result}</p>
        <button className="button-less">
          <i className="fas fa-minus-circle" onClick= {handleMinus}></i>
        </button>
      </div>
      <p className="name-detail">{item.nombre}</p>
      <p className="price-detail">{item.precio}</p>
      <button className="button-trash">
        <i className="fas fa-trash-alt"></i>
      </button>
    </section>
  );
};

export default ProductOrder;
