import React from "react";
import { Link } from "react-router-dom";

import Logo from "../imagenes/hamburguesa-logo.png";
import "../assets/styles/components/Login.scss";
const Login = () => {
  return (
    <>
      <section className="container-login">
        <section className="viewOne-title">
          <h1 className="title-hamburguer">Burguer Queen</h1>
          <p className="title-parrafo">Me encanta!</p>
        </section>
        <section className="content-hamburguer">
          <figure className="content-figure">
            <img className="figure-img" src={Logo} alt="BurguerQueen"></img>
          </figure>
          <section className="content-botton">
            <button className="botton-mesero">Mesero</button>
            <button className="botton-cocina">Cocinero</button>
          </section>
        </section>
      </section>
      {/* <div>
      <Link to="/waiter">Mesero</Link>
      </div>
       <div>
      <Link to="/kitchen">Cocina</Link>
       </div> */}
    </>
  );
};

export default Login;
