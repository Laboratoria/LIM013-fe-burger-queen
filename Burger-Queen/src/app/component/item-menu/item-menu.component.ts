import { Component, OnInit,Output } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent implements OnInit {
 
  public products = [];
  total:number=0;
  addProducts(_item:number) { 
    this.total =0;
    this.products[_item-1].quantity++;
    console.log(this.products);
  }
  reduceProducts(_item:number) {
    this.total =0;
    if(this.products[_item-1].quantity>0){
        this.products[_item-1].quantity--;
    }
  }
  constructor(private firestoreService: FirestoreService) { }
  ngOnInit(): void {
    this.firestoreService.getProducts().subscribe((productsSnapshot) => {
      this.products = [];
      productsSnapshot.forEach((productData: any) => {
        this.products.push({quantity:0, ...productData.payload.doc.data()
        });
      })
      console.log(this.products);
    });
  }

}

