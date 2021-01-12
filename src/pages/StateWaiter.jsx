import React from 'react'
import PendingOrdersWaiter from "../components/PendingOrdersWaiter";
import ReadyOrdersWaiter from "../components/ReadyOrdersWaiter.jsx";

const StateWaiter = () => (
    <section className="container-orders">
      <PendingOrdersWaiter/>
      <ReadyOrdersWaiter/>
    </section>
)

export default  StateWaiter