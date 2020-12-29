import React from "react";
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
import BodyAllMenu from '../components/BodyAllMenu';
import OptionsAllMenu from '../components/OptionsAllMenu';
import OptionBreakfast from '../components/OptionBreakfast';
import OptionMenu from '../components/OptionMenu';
import OptionDrinks from '../components/OptionDrinks';
import ItemMenu from '../components/ItemMenu';
import ItemPrueba from '../components/ItemPrueba';
import '../assets/styles/App.scss'
const AppView =() =>(
    <section className = 'App'>
        <Header/>
        <OrderAndAllMenu>
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
            <AllMenu>
                <OptionsAllMenu>
                    <OptionBreakfast/>
                    <OptionMenu/>
                    <OptionDrinks/>
                </OptionsAllMenu>
                <BodyAllMenu>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                </BodyAllMenu>
            </AllMenu>
        </OrderAndAllMenu>
        <ItemPrueba />
    </section>
)

export default AppView;