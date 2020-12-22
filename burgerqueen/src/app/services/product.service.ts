import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Product } from '../models/product';
import { Order } from '../models/order'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsCollection: AngularFirestoreCollection<Product>;
  orderCollection: AngularFirestoreCollection<Order>;
  products: Observable<Product[]>;
  productDoc: AngularFirestoreDocument<Product> | undefined;

  constructor(public db: AngularFirestore) {
    this.productsCollection = this.db.collection('Products');
    this.orderCollection = this.db.collection('order');
    this.products = this.productsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

  }
  getProducts() {
    return this.products;
  }

  addOrder(product: Product) {
    this.orderCollection.add(product);
  }
}
