import React, {useEffect, useState} from 'react';
import {db} from '../firebase';
const useGetItems = (category) => {
  const [items, setItems ] = useState([]);
    const getItems = () =>{
     db.collection("carta").where("categoria", "==", category).onSnapshot((querySnapshot) => {
         const docs = []
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id:doc.id})
            });
        setItems(docs)
        }); 
    }
    useEffect(()=>{
      getItems();
  }, []);
  return items;
}

export default useGetItems;