import React from "react";
import "../assets/styles/components/OptionsAllMenu.scss";

const OptionsAllMenu = (props) => {
  const {optionCategory} = props;
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.', e.target.id);
    //set categoria
    optionCategory(e.target.id);
  }

return (
  
  <nav className="optionsAllMenu">
    <div className="optionBreakfast" onClick={handleClick}>
      <p id="desayuno">Desayuno</p>
    </div>
    <div className="optionMenu" onClick={handleClick}>
        <p id="menu">Menu</p>
    </div>
    <div className="optionDrinks" onClick={handleClick}>
        <p id="bebidas">Bebidas</p>
    </div>
  </nav>
);
}
export default OptionsAllMenu;
