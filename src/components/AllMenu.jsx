import React, { useEffect, useState } from 'react';
import '../assets/styles/components/AllMenu.scss'
import OptionsAllMenu from '../components/OptionsAllMenu';
import ItemMenu from '../components/ItemMenu';
const AllMenu = (props) => {
    const {itemOrder} = props
    const [category, setCategory] = useState('desayuno');
    const [item, setItem] = useState({});
    itemOrder(()=>(item))
    const test = (x) => {
        setCategory(x);
    }
    // console.log('en all menu',item);
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

