import React, { useState, useEffect } from "react";
import '../assets/styles/components/EveryOrder.scss';
import {getPreparedOrders} from "../firebase/controllerOrder.js";
const ReadyOrdersKitchen = () => {
  const [readyOrders, setReadyOrders] = useState([]);
  useEffect(() => {
    getPreparedOrders(setReadyOrders);
  }, []);
  return(
  <section className='showOrder'>
    {readyOrders.map((order) => (
      <section className='eachOrder'key={order.unique}>
        <section className="header-order">
      <section className="title-order">
        <p>Orden N°{order.id}</p>
      </section>
      <section className="info-header-order">
        <p>Mesa: {order.numberTable}</p>
        <p>Cliente: {order.name}</p>
        <p>Inicio: <span className="dateInit">{'17/12/2020  10:04:23'}</span> </p>
        <p>Termino: <span className="dateFinish">{'17/12/2020  10:14:23'}</span> </p>
        <p>Tiempo de preparación: <span className="time-preparation">{'10 min'}</span> </p>
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
        <p>Total {'S/.22.00'}</p>
      </section>
    </section>
      </section>
    ))}
  </section>
)};

export default ReadyOrdersKitchen;
