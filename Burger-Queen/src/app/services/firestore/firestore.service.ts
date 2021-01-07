import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  
  constructor(private firestore: AngularFirestore) { }

  
  //Obtiene todos los productos
  public getProducts() {
    return this.firestore.collection('BG-Products').snapshotChanges();
  }
  
  public getOrders() {
    return this.firestore.collection('BG-Orders').snapshotChanges();
  }
  
  public createCollection(customerName, numOrder,status, detailOrder,){
    return this.firestore.collection('BG-Orders').add({
      customerName,
      numOrder,
      status,
      detailOrder,
    });

  }
//   public numOder(){
//   return this.firestore.collection('BG-orders').doc().set({
//     time:new Date().toLocaleString(),
//     status:'Pending',
//   });
// }
}
