import React, { useEffect, useState } from "react";
// import {db} from '../firebase'
import "../assets/styles/components/ItemMenu.scss";
import getItems from "../firebase/useGetItems";

const ItemMenu = (props) => {
  const [items, setItems] = useState([]);
  const { categoryType, eachItem, sendEachItem } = props;
  function handleClick(item) {
    // if (sendEachItem.some(product=> (product.id === item.id)))
    if (sendEachItem.filter((product) => product.id === item.id).length > 0) {
      eachItem(sendEachItem);
    } else {
      const newItem = {
        id: item.id,
        name: item.nombre,
        price: item.precio,
        quantity: 1,
        subTotal: item.precio,
      };
      eachItem((sendEachItem) => [...sendEachItem, newItem]);
      ///
    }
  }

  // function handleTotal(){

  // }
  // const getItems = (categoryType) =>{
  //  db.collection("carta").where("categoria", "==", categoryType).onSnapshot((querySnapshot) => {
  //      const docs = []
  //         querySnapshot.forEach(doc => {
  //             docs.push({...doc.data(), id:doc.id})
  //         });
  //     setItems(docs)
  //     });
  // }

  useEffect(() => {
    getItems(setItems, categoryType);
  }, [categoryType]);
  // const {categoryType} = props;
  // const itemsState = useGetItems(categoryType);
  return (
    <section className="viewAllMenu">
      {items.map((item) => (
        <section className="itemMenu" key={item.id}>
          <img
            src={item.imagen}
            alt="simple hamburguer"
            id={item.id}
            onClick={(e) => {
              e.preventDefault();
              handleClick(item);
            }}
          />
          <section>
            <p>{item.nombre[0].toUpperCase() + item.nombre.slice(1)}</p>
          </section>
          <section>
            <p>S/.{item.precio}.00</p>
          </section>
        </section>
      ))}
    </section>
  );
};

export default ItemMenu;
