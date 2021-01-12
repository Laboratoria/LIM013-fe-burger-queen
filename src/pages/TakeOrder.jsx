import React, { useState } from "react";
import Header from "../components/Header";
// import OrderAndAllMenu from '../components/OrderAndAllMenu';
import Order from "../components/Order";
// import HeaderOrder from "../components/HeaderOrder";
// import DetailOrder from "../components/DetailOrder";
import ProductOrder from "../components/ProductOrder";
import ContainerTotal from "../components/ContainerTotal";
import ButtonSend from "../components/ButtonSend";
import ButtonCancel from "../components/ButtonCancel";
import AllMenu from "../components/AllMenu";

import "../assets/styles/App.scss";
const TakeOrder = () => {
  const [selectItem, setSelectItem] = useState({});
  
    
console.log(selectItem, 'AppView');

  //Nombre y numero de mesa
  const [table, setTable] = useState("");
  const [costumer, setCostumer] = useState("");

  function handleChange(e) {
    setTable({ [e.target.name]: e.target.value });
  }

  function handleImput(e) {
    setCostumer({ [e.target.name]: e.target.value });
  }
  console.log(table);
  console.log(costumer);
  return (
    <section className="App">
      <section className="orderAndAllMenu">
        <Order>
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
              <ProductOrder />
              <ProductOrder />
            </section>
          </section>
          {/* <DetailOrder>
            <ProductOrder />
            <ProductOrder />
          </DetailOrder> */}
          <ContainerTotal />
          <ButtonSend />
          <ButtonCancel />
        </Order>
        <AllMenu sendGetItem ={setSelectItem} />
      </section>
    </section>
  );
};

export default TakeOrder;
