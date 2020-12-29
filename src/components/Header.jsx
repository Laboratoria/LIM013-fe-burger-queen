import React from 'react';
import '../assets/styles/components/Header.scss';
import logoBurguer from '../imagenes/hamburguesa-logo.png'
const Header = () => (
    <header>
        <section className='header-first'>
                <h1> Burguer Queen </h1>
                <img src= {logoBurguer} alt = 'logoBurguer'/>
        </section>
        <nav>
            <section className= 'request'>
                <p>Pedido</p>
            </section>
            <section className= 'state'>
                <p>Estado</p>
            </section>
            <section className='delivered'>
                <p>Entregado</p>
            </section>
        </nav>
    </header>
)
export default Header;