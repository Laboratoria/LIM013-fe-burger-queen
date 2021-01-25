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
  // public getOrders() {
  //   return this.firestore.collection('BG-Orders').snapshotChanges();
  // }
  public getOrders() {
    return this.firestore.collection('BG-Orders', ref => ref.orderBy("date", "desc")).snapshotChanges();
  }
  // Actualiza el status
    public updateStatus(orderId: any, status: string) {
      return this.firestore.collection('BG-Orders').doc(orderId).update({status});
    }
  
    public updateChronometer(orderId: any, chronometer:any){
      return this.firestore.collection('BG-Orders').doc(orderId).update({chronometer});
    }
  
    public updateTime(orderId: any,minutes:any, seconds:any){
      return this.firestore.collection('BG-Orders').doc(orderId).update({minutes,seconds});
    }

  public createCollection(customerName,numOrder,status, minutes, seconds,detailOrder,total){
    return this.firestore.collection('BG-Orders').add({
      customerName,
      date:new Date(),
      numOrder,
      status,
      minutes,
      seconds,
      chronometer:true,
      detailOrder,
      total
    });
  }

}
