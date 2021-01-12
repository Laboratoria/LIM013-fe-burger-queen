import React from "react";
import '../assets/styles/components/EveryOrder.scss';

const PendingOrdersWaiter = () => (
  <section>
    <section className="header-order">
      <section className="title-order">
        <p>Orden N°{5}</p>
      </section>
      <section className="info-header-order">
        <p>Mesa: {5}</p>
        <p>Cliente: {'Giovand Yucra'}</p>
        <p>Inicio: <span className="dateInit">{'17/12/2020  11:04:23'}</span> </p>
      </section>
    </section>
    <section className="detail-order">
      <section className="title-order">
        <p>Detalle</p>
      </section>
      <section className="body-detail-order">
        <ul>
          <li>
          {1} {"Hamburguesa simple de pollo"} {'S/.10.00'}
          </li>
          <li>
          {2} {"Hamburguesa simple de pollo"}{'S/.11.00'}
          </li>
          <li>
          {3} {"Hamburguesa simple de pollo"}{'S/.11.00'}  
          </li>
        </ul>
      </section>
      <section className="amount-order">
        <p>Total {'S/.22.00'}</p>
      </section>
    </section>
    <button className="button-in-kitchen">
      En cocina
    </button>
  </section>
);

export default PendingOrdersWaiter;
