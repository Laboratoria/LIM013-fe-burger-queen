import React from 'react';
import '../assets/styles/components/Header.scss';
const Header = () => (
    <header>
        <section className='header-first'>
            <section>
                <h1> Burguer Queen </h1>
            </section>
            <figure>
            </figure>
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