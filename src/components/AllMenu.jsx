import React, { useState, useEffect } from 'react';
import '../assets/styles/components/AllMenu.scss'
import OptionsAllMenu from '../components/OptionsAllMenu';
import ItemMenu from '../components/ItemMenu';
const AllMenu = () => {
    const [category, setCategory] = useState('desayuno');
    const [item, setItem] = useState({});
    
    const test = (x) => {
        setCategory(x);
    }
    console.log('en all menu',item);
    return (
    <section className="allMenu">
        <section className="headerAllMenu">
                <p>Carta</p>
        </section>
        <OptionsAllMenu optionCategory = {setCategory} />
        <ItemMenu categoryType={category} eachItem={setItem}/>
    </section>
)}

export default AllMenu;

