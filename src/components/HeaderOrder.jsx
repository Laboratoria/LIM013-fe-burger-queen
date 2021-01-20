import React, { useState } from "react";
import "../assets/styles/components/HeaderOrder.scss";
const HeaderOrder = (props) => {
  const [table, setTable] = useState("");
  const [costumer, setCostumer] = useState("");
  //   const details [] = props
  function handleChange(e) {
    setTable({ [e.target.name]: e.target.value });
  }

  function handleImput(e) {
    setCostumer({ [e.target.name]: e.target.value });
  }
  console.log(table);
  console.log(costumer);
  return (
    <section className="header-order">
      <section className="title-order">
        <p>Orden</p>
      </section>
      <form className="info-header-order">
        <label>
          <strong>Mesa </strong>
          <select
            onChange={handleChange}
            name="numberTable"
            className="order-table"
          >
            <option value="" selected disabled hidden></option>
            <option name="numberTable" value="1">
              1
            </option>
            <option name="numberTable" value="2">
              2
            </option>
            <option name="numberTable" value="3">
              3
            </option>
            <option name="numberTable" value="4">
              4
            </option>
            <option name="numberTable" value="5">
              5
            </option>
          </select>
        </label>
        <label>
          <strong className="order-name">Cliente </strong>
          <input onChange={handleImput} type="text" name="costumer" />
        </label>
      </form>
    </section>
  );
};

export default HeaderOrder;
