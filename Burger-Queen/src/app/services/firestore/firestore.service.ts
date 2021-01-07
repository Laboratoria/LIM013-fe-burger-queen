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
  // Crea un nuevo gato 
  public createCat (name,quantity) { 
    console.log('exito');
    return  this .firestore.collection ('BG').add({
      name,
      quantity
    });
  }

  // export const addPost = (UserId, Privacy, Publication, URLimg) => {
  //   const db = firebase.firestore();
  //   return db.collection('SN_Post').add({
  //     userId: UserId,
  //     date: new Date().toLocaleString(),
  //     privacy: Privacy,
  //     publication: Publication,
  //     urlimg: URLimg,
  //     likes: [],
  //     planes: [],
  //   });
  // };
  
}
