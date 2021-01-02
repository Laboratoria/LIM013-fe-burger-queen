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
}
