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
  // Actualiza el status
    public updateStatus(orderId: any, status: string) {
      return this.firestore.collection('BG-Orders').doc(orderId).update({status});
    }
  
  public createCollection(customerName,numOrder,status, time, detailOrder,){
    return this.firestore.collection('BG-Orders').add({
      customerName,
      date:new Date(),
      numOrder,
      status,
      time,
      detailOrder,
    });
  }

}
