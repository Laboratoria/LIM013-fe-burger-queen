import React from 'react'
import TakeOrder from "./TakeOrder"
import StateWaiter from "./StateWaiter"
import DeliveredWaiter from "./DeliveredWaiter"
import NavbarWaiter from "../components/NavbarWaiter";
import NavbarKitchen  from "../components/NavbarKitchen";
const Waiter = () => (
  <section className="App">
    <NavbarWaiter/>
    <TakeOrder/>
  </section>
)

export default  Waiter