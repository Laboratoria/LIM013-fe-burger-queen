/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import {db} from '../firebase'


const ItemPrueba = () => {
    // const [items, setItems ] = useState([]);
    
    // useEffect(() => {
    //     db.collection("carta").get().then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         const dataItems = doc.data();
    //         console.log(doc.id, " => ", dataItems);
    //         dataItems => setItems(dataItems)
    //     });
    // });
    

    // },[]);

    const getItems = async () =>{
        const querySnapshot = await db.collection("carta").get();
        querySnapshot.forEach(doc => {
            console.log(doc.data());
        })
    }

    useEffect(()=>{
        getItems();
    }, []);
    // console.log(items);
    
    return (
        <section className="detail-order">
            <section className="title-order">
                <p>Prueba</p>
            </section>
        <section className= "body-detail-order">
            
        </section>      
    </section>
    )
}

export default ItemPrueba;