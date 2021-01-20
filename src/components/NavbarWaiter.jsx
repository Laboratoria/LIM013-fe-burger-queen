import React from "react";
import "../assets/styles/components/Header.scss";
const NavbarWaiter = () => (
  <nav className="navbarWaiter">
    <section className="request">
      <p>Pedido</p>
    </section>
    <section className="state">
      <p>Estado</p>
    </section>
    <section className="delivered">
      <p>Entregado</p>
    </section>
  </nav>
);
export default NavbarWaiter;
