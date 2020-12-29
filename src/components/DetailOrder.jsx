import React from 'react';
import '../assets/styles/components/DetailOrder.scss'
const DetailOrder = ({children}) => (
    <section className="detail-order">
        <section className="title-order">
            <p>Detalle</p>
        </section>
    <section className= "body-detail-order">
        {children}
    </section>      
</section>
)

export default DetailOrder;