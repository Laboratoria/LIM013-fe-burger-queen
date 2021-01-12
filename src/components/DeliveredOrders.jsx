import React from "react";
import '../assets/styles/components/EveryOrder.scss';

const DeliveredOrders = () => (
  <section>
    <section className="header-order">
      <section className="title-order">
        <p>Orden N°{5}</p>
      </section>
      <section className="info-header-order">
        <p>Mesa: {5}</p>
        <p>Cliente: {'Francesca Tiravantti'}</p>
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
          <li>
          {1} {"Hamburguesa simple de pollo"} {'S/.10.00'}
          </li>
          <li>
          {2} {"Hamburguesa simple de pollo"} {'S/.11.00'}
          </li>
          <li>
          {3} {"Hamburguesa simple de pollo"} {'S/.11.00'}  
          </li>
        </ul>
      </section>
      <section className="amount-order">
        <p>Total {'S/.22.00'}</p>
      </section>
    </section>
  </section>
);

export default DeliveredOrders;