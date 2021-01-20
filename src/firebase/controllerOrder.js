import {db} from '../firebase';

//Pending orders

export const getPendingOrders = (callback) =>{
     db.collection("orders").where("prepared", "==", false).onSnapshot((querySnapshot) => {
         const docs = []
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), unique:doc.id})
            });
        callback(docs)
        }); 
}

// All orders
export const getAllOrders = (callback) =>{
    db.collection("orders").onSnapshot((querySnapshot) => {
        const docs = []
           querySnapshot.forEach(doc => {
               docs.push({...doc.data(), unique:doc.id})
           });
       callback(docs)
       }); 
}

//Prepared Orders

export const getPreparedOrders = (callback) =>{
    db.collection("orders").where("prepared", "==", true).onSnapshot((querySnapshot) => {
        const docs = []
           querySnapshot.forEach(doc => {
               docs.push({...doc.data(), unique:doc.id})
           });
       callback(docs)
       }); 
}