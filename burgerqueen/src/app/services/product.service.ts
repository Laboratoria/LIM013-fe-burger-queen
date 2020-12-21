import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Observable<Product[]>;

  constructor(public db: AngularFirestore) {
    this.products = this.db.collection('Products').valueChanges();
  }
  getProducts() {
    return this.products;
  }
}
