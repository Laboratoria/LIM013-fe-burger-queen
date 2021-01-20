import React, { useState, useEffect } from "react";
import "../assets/styles/components/EveryOrder.scss";
import {getPendingOrders} from "../firebase/controllerOrder.js";
import {db} from '../firebase'; 
const PendingOrdersKitchen = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getPendingOrders(setOrders);
  }, []);
  console.log(orders);
  function handlePrepared(order) {
    console.log('Clic en finalizar pedido');
    console.log(order.unique);
    db.collection("orders").doc(order.unique).update({prepared:true}).then(function(){console.log('Document successfully updated!')}).catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  })
  }
  
  return (
    <section className='showOrder'>
      {orders.map((order) => (
        <section className='eachOrder'key={order.unique}>
          <section className="header-order">
            <section className="title-order">
              <p>Orden N°{order.id}</p>
            </section>
            <section className="info-header-order">
              <p>Mesa: {order.numberTable}</p>
              <p>Cliente: {order.name}</p>
              <p>
                Inicio:{" "}
                <span className="dateInit">{"17/12/2020  11:04:23"}</span>{" "}
                {/* <span className="dateInit">{order.date}</span>{" "} */}
              </p>
            </section>
          </section>
          <section className="detail-order">
            <section className="title-order">
              <p>Detalle</p>
            </section>
            <section className="body-detail-order">
              <ul>
                {order.detail.map((itemOrder) => (
                  <li key={itemOrder.id}>
                    {itemOrder.quantity} {itemOrder.name}
                  </li>
                ))}
              </ul>
            </section>

            <section className="amount-order">
              <p>Total S/.{order.totalOrder}.00</p>
            </section>
          </section>
          <button className="button-finish" onClick={(e) => {e.preventDefault(); handlePrepared(order) }}>Finalizar pedido</button>
        </section>
      ))}
    </section>
  );
};

export default PendingOrdersKitchen;
