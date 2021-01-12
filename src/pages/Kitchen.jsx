import React from 'react'
import StateKitchen from "./StateKitchen"
import ReadyKitchen from "./ReadyKitchen"
import NavbarKitchen  from "../components/NavbarKitchen";
const Kitchen = () => (
  <section className="App">
    <NavbarKitchen/>
    <ReadyKitchen/>
  </section>
)

export default  Kitchen