import { Component, OnInit } from '@angular/core';
import { ItemMenuComponent } from '../item-menu/item-menu.component';

@Component({
  selector: 'app-resumen-item',
  templateUrl: './resumen-item.component.html',
  styleUrls: ['./resumen-item.component.scss']
})
export class ResumenItemComponent implements OnInit {
  total:number=0;
  products=[
    {item:1,product:'cafe con leche',quantity:2, valorUnitario:5.00,total:10.00},
    {item:2,product:'cafe americano',quantity:1, valorUnitario:5.00,total:5.00 },
    {item:3,product:'jugo natural',quantity:1, valorUnitario:7.00,total:7.00 },
    {item:4,product:'sandwich de jamon y queso',quantity:2,valorUnitario:10.00,total:20.00 }
  ]

  addProducts(item:number) { 
    this.total =0;
    this.products[item-1].quantity++;
  }
  reduceProducts(item:number) {
    this.total =0;
    if(this.products[item-1].quantity>0){
        this.products[item-1].quantity--;
    }
  }

  subtotal(item:number){
    this.products[item-1].total = this.products[item-1].quantity*this.products[item-1].valorUnitario;
  }
hallarTotal(){
  this.products.forEach(element => {
    this.total=(element.quantity*element.valorUnitario)+this.total;
    console.log(this.total);
  });
}


  constructor() { }

  ngOnInit(): void {
  }

}
