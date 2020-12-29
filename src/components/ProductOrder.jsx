import React from 'react';
import '../assets/styles/components/ProductOrder.scss'
const ProductOrder = () => (
    <section className="product-order">
        <div>
            <button className="button-add">
                <i className="fas fa-plus-circle"></i>
            </button>
            <p>2</p>
            <button className="button-less">
                <i className="fas fa-minus-circle"></i>
            </button>
        </div>
        <p className= "name-detail">Hamburguesa simple de res</p>
        <p className="price-detail"> S/10 </p>
        <button className="button-trash">
            <i className="fas fa-trash-alt"></i>
        </button>
    </section>
)

export default ProductOrder;