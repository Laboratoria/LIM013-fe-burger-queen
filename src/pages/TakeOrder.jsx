import React, { useState } from "react";
// import Header from "../components/Header";
// import OrderAndAllMenu from '../components/OrderAndAllMenu';
// import Order from "../components/Order";
// import HeaderOrder from "../components/HeaderOrder";
// import DetailOrder from "../components/DetailOrder";
// import ProductOrder from "../components/ProductOrder";
// import ContainerTotal from "../components/ContainerTotal";
// import ButtonSend from "../components/ButtonSend";
// import ButtonCancel from "../components/ButtonCancel";
import AllMenu from "../components/AllMenu";

import "../assets/styles/App.scss";
const TakeOrder = () => {
  // Traer el producto seleccionado
  const [selectItem, setSelectItem] = useState([]);
    console.log(selectItem);
  
  //Nombre y numero de mesa
  const [table, setTable] = useState("");
  const [costumer, setCostumer] = useState("");

  // Delete state
  const [bucket, setBucket] = useState('');

  function handleChange(e) {
    setTable({ [e.target.name]: e.target.value });
  }

  function handleImput(e) {
    setCostumer({ [e.target.name]: e.target.value });
  }
  console.log(table);
  console.log(costumer);

  // Funcion para aumentar y disminuir cantidad
  let [result, setResult] = useState(0);
  function handlePlus(){
    setResult(result+=1);
  }
  function handleMinus(){
    const verifyMInNumber = result > 0 ? result-=1: 0;
    setResult(verifyMInNumber)
  } 

  // Funcion para borrar
  function handleDelete(item){
    setBucket(item.id)
  }

  console.log(bucket)
  return (
    <section className="App">
      <section className="orderAndAllMenu">
      <section className="order">      
        {/* <Order>  */}
          {/* <HeaderOrder /> */}
          <section className="header-order">
            <section className="title-order">
              <p>Orden</p>
            </section>
            <form className="info-header-order">
              <label>
                <strong>Mesa </strong>
                <select
                  onChange={handleChange}
                  name="numberTable"
                  className="order-table"
                  defaultValue={'DEFAULT'} 
                >
                  <option value="DEFAULT" disabled></option>
                  <option name="numberTable" value="1">
                    1
                  </option>
                  <option name="numberTable" value="2">
                    2
                  </option>
                  <option name="numberTable" value="3">
                    3
                  </option>
                  <option name="numberTable" value="4">
                    4
                  </option>
                  <option name="numberTable" value="5">
                    5
                  </option>
                </select>
              </label>
              <label>
                <strong className="order-name">Cliente </strong>
                <input onChange={handleImput} type="text" name="costumer" />
              </label>
            </form>
          </section>
          <section className="detail-order">
            <section className="title-order">
              <p>Detalle</p>
            </section>
            <section className="body-detail-order">
            {/* {selectItem.map((item) => 
                <ProductOrder item = {item} key={item.id} />
              )} */}
              {selectItem.map((item) => 
                <section className="product-order" key={item.id}>
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
                <button className="button-trash" onClick={(e) => {e.preventDefault(); handleDelete(item)}}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </section>
              )}
            </section>
          </section>
          {/* <DetailOrder>
            <ProductOrder />
            <ProductOrder />
          </DetailOrder> */}
          {/* <ContainerTotal /> */}
          <section className="container-total">
              <p className="order-total">Total <strong className="price-total">S/20</strong></p>
          </section>
          {/* <ButtonSend />
          <ButtonCancel /> */}
           <button className="button-send">Enviar pedido</button>
           <button className="button-cancel">Cancelar</button> 
        {/* </Order> */}
        </section>
        <AllMenu sendGetItem ={setSelectItem} sendItem = {selectItem} />
      </section>
    </section>
  );
};

export default TakeOrder;
