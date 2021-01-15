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
  // Traer array de producto seleccionados y los actualizar
  const [selectItem, setSelectItem] = useState([]);
  console.log(selectItem);
      
  //Numero de mesa
  const [table, setTable] = useState("");
  
  // Nombre
  const [costumer, setCostumer] = useState("");

  // Incrementar y disminuir cantidad de productos
  let [result, setResult] = useState(1);
  
  let [total, setTotal]= useState(0);


  // Funcion capturar valor mesa
  function handleChange(e) {
    setTable({ [e.target.name]: e.target.value });
    console.log(table);
    
  }
// Funcion capturar valor nombre
  function handleImput(e) {
    setCostumer({ [e.target.name]: e.target.value });
    console.log(costumer);
  }
  
  // Funcion para aumentar  cantidad y subtotal
  function handlePlus(item) {
    setResult(result+=1); //Preguntar
    const newArray = selectItem.filter(product => (product.id === item.id));
    newArray[0].quantity += 1;
    newArray[0].subTotal = newArray[0].quantity * newArray[0].price;     
    
    const getTotal = selectItem.reduce((preventDefault,currentValue)=> preventDefault + currentValue.subTotal,total)
  
    setTotal(getTotal) 
    console.log(total);
  };
  
  // const reducer = (acum, product) =>{
  //   return acum + product.subTotal;
  // }   
   

 // Funcion para disminuir  cantidad y subtotal
  function handleMinus(item){
    setResult(result-=1);
    const verifyMInNumber = result > 1 ? result-=1: 1;
    setResult(verifyMInNumber);

    const newArray1 = selectItem.filter(product => (product.id === item.id));
    let verifyMinQuantity = newArray1[0].quantity > 1? newArray1[0].quantity -=1: 1
    newArray1[0].subTotal = verifyMinQuantity * newArray1[0].price;

    console.log(selectItem);
  } 

  
// Funcion para borrar
  function handleDelete(item){
    const listUpdated = selectItem.filter(({ id }) => id !== item.id);
  
    setSelectItem(listUpdated);
    console.log(selectItem);
  }
  
  
  
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
                  <button type="button" className="button-add" onClick= {(e) => {e.preventDefault(); handlePlus(item)}}>
                    <i className="fas fa-plus-circle"></i>
                  </button>
                  <p>{item.quantity}</p>
                  <button className="button-less">
                    <i className="fas fa-minus-circle" onClick= {(e) => {e.preventDefault(); handleMinus(item)}}></i>
                  </button>
                </div>
                <p className="name-detail">{item.name}</p>
                <p className="price-detail">{item.subTotal}</p>
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
              <p className="order-total">Total <strong className="price-total"> S/{total}</strong></p>
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
