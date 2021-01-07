// /* eslint-disable no-unused-expressions */
// import React, { useEffect, useState } from 'react';
// import {db} from '../firebase'


// const ItemPrueba = () => {
//     const [items, setItems ] = useState([]);
    
//     // useEffect(() => {
//     //     db.collection("carta").get().then(function(querySnapshot) {
//     //         const docs = [];
//     //     querySnapshot.forEach(function(doc) {
//     //         docs.push({...doc.data(), id:doc.id})
            
//     //     });
       
//     //     setItems(docs)
//     // });
//     // },[]);

//     const getItems = () =>{
//      db.collection("carta").onSnapshot((querySnapshot) => {
//          const docs = []
//             querySnapshot.forEach(doc => {
//                 // console.log(doc.data());
//                 // console.log(doc.id);
//                 docs.push({...doc.data(), id:doc.id})
//             })
//     setItems(docs)
//         }); 
//     }

//     useEffect(()=>{
//         getItems();
//     }, []);
//     // console.log(items);
    
//     return (
//         <section className="detail-order">
//             <section className="title-order">
//                 <p>Prueba</p>
//             </section>
//         <section className= "body-detail-order">
            
//         </section>      
//     </section>
//     )
// }

// export default ItemPrueba;