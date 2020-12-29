import React from 'react';
import '../assets/styles/components/ItemMenu.scss'
import haburguerItem from '../imagenes/hamburguesa simple carne.jpg'
const ItemMenu = () => (
    <section className="itemMenu">
        <img src={haburguerItem} alt="simple hamburguer"/>
        <section>
            <p>Hamburguesa simple de res</p>
        </section>
        <section>
            <p>S/.10.00</p>
        </section>
    </section>
)

export default ItemMenu;