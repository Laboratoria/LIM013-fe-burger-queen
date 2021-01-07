import React, {useState} from "react";
import Header from '../components/Header';
import OrderAndAllMenu from '../components/OrderAndAllMenu';
import Order from '../components/Order';
import HeaderOrder from '../components/HeaderOrder';
import DetailOrder from '../components/DetailOrder';
import ProductOrder from '../components/ProductOrder';
import ContainerTotal from '../components/ContainerTotal';
import ButtonSend from '../components/ButtonSend';
import ButtonCancel from '../components/ButtonCancel';
import AllMenu from '../components/AllMenu';

import '../assets/styles/App.scss'
const AppView =() =>{
   const [selectItem, setSelectItem] = useState({})
   console.log(selectItem, 'AppView');
   return (
    <section className = 'App'>
        <Header/>
        <OrderAndAllMenu >
            <Order>
                <HeaderOrder/>
                <DetailOrder>
                    <ProductOrder/>
                    <ProductOrder/>
                </DetailOrder>
                <ContainerTotal/>
                <ButtonSend/>
                <ButtonCancel/>
            </Order>
            <AllMenu itemOrder = {setSelectItem}/>
        </OrderAndAllMenu>
    </section>
)
    }

export default AppView;