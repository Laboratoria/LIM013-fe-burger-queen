/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import db from './src/FirestoreConfig.jsx'


const ItemPrueba = () => {
    const [items, setItems ] = useState([]);
    //  useEffect(()=>{
    //    db.collection('carta').get().then(doc.data() => {setItems(doc.data())})
    // }, [])
    useEffect(() => {
        // db.collection('carta').get().then(function(querySnapshot ){

        // }
        db.collection("carta").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            const dataItems = doc.data();
            console.log(doc.id, " => ", dataItems);
            dataItems => setItems(dataItems)
        });
    });
    

    },[]);
    console.log(items);
    
    return (
        <section className="detail-order">
            <section className="title-order">
                <p>Detalle</p>
            </section>
        <section className= "body-detail-order">
            
        </section>      
    </section>
    )
}

export default ItemPrueba;