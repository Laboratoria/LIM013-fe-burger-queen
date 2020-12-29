import React from 'react';
import '../assets/styles/components/HeaderOrder.scss'
const HeaderOrder = () => (
            <section className="header-order">
                <section className="title-order">
                    <p>Orden</p>
                </section>
                <section className="info-header-order">
                    <p><strong>Mesa :</strong> <span className="order-table"> 1 </span></p>
                    <p><strong>Cliente :</strong> <span className="order-name">Giovand Yucra Gavilan</span></p>
                </section>
            </section>
)

export default HeaderOrder;