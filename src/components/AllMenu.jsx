import React, { useState } from 'react';
import '../assets/styles/components/AllMenu.scss'
import OptionsAllMenu from '../components/OptionsAllMenu';
import ItemMenu from '../components/ItemMenu';
const AllMenu = (props) => {
    const [category, setCategory] = useState('desayuno');
    // const [item, setItem] = useState({});
    const {sendGetItem, sendItem} = props
    // const test = (x) => {
    //     sendGetItem(x);
    // }
    // test(item)
    // console.log('en all menu',item);
    return (
    <section className="allMenu">
        <section className="headerAllMenu">
                <p>Carta</p>
        </section>
        <OptionsAllMenu optionCategory = {setCategory} items/>
        <ItemMenu categoryType={category} eachItem={sendGetItem} sendEachItem ={sendItem}/>
    </section>
)}

export default AllMenu;

