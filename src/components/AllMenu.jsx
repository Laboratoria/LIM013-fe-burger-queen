import React from 'react';
import '../assets/styles/components/AllMenu.scss'
const AllMenu = ({children}) => (
    <section className="allMenu">
        <section class="headerAllMenu">
                <p>Carta</p>
        </section>
            {children}
    </section>
)

export default AllMenu;

