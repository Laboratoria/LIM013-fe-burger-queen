import React, { useEffect, useState } from 'react';
// import {db} from '../firebase'
import "../assets/styles/components/ItemMenu.scss";
import getItems from '../firebase/useGetItems'

// const categoryType = 'bebidas';
const ItemMenu = (props) => {
    const {categoryType, eachItem} = props;
    // console.log(categoryType);
    function handleClick(item) {
        // console.log('The link was clicked.', item);
        eachItem(item);
      }
    const [items, setItems ] = useState([]);
    // const getItems = (categoryType) =>{
    //  db.collection("carta").where("categoria", "==", categoryType).onSnapshot((querySnapshot) => {
    //      const docs = []
    //         querySnapshot.forEach(doc => {
    //             docs.push({...doc.data(), id:doc.id})
    //         });
    //     setItems(docs)
    //     }); 
    // }

    useEffect(()=>{
        getItems(setItems,categoryType);
    }, [categoryType]);
    // const {categoryType} = props;
    // const itemsState = useGetItems(categoryType);
  return (
    <section className= "viewAllMenu">
        {items.map((item) => (
             <section className="itemMenu" key={item.id}>
                <img src={item.imagen} alt="simple hamburguer" id={item.id} onClick={(e) => {e.preventDefault();handleClick(item)}} />
                <section>
                    <p>{item.nombre[0].toUpperCase()+item.nombre.slice(1)}</p>
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
