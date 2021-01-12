import React from 'react';
import '../assets/styles/components/Header.scss';
import logoBurguer from '../imagenes/hamburguesa-logo.png'
const Header = () => (
    <header>
        <section className='header-first'>
                <h1> Burguer Queen </h1>
                <img src= {logoBurguer} alt = 'logoBurguer'/>
        </section>
    </header>
)
export default Header;