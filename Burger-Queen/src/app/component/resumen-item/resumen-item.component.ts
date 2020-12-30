import { Component } from '@angular/core';
import { ItemMenuComponent } from '../item-menu/item-menu.component';

@Component({
  selector: 'app-resumen-item',
  templateUrl: './resumen-item.component.html',
  styleUrls: ['./resumen-item.component.scss']
})
export class ResumenItemComponent { // OJO dentro de clase todo las propiedades y funciones
  // variable que contiene cantidad de producto
  total: number = 0;
  products = [
    { item: 1, product: 'cafe con leche', quantity: 2, unitValue: 5.00, subtotal: 10.00 },
    { item: 2, product: 'cafe americano', quantity: 1, unitValue: 5.00, subtotal: 5.00 },
    { item: 3, product: 'jugo natural', quantity: 1, unitValue: 7.00, subtotal: 7.00 },
    { item: 4, product: 'sandwich de jamon y queso', quantity: 2, unitValue: 10.00, subtotal: 20.00 }
  ]

  // funcion que se ejecuta por defecto
  constructor() {
    this.calculateTotal();
  }

  addProducts(_item: number) {
    this.products[_item - 1].quantity++;
    this.calculateSubtotal(_item);
  }

  reduceProducts(_item: number) {
    if (this.products[_item - 1].quantity > 1) {
      this.products[_item - 1].quantity--;
      this.calculateSubtotal(_item);
    }
  }

  calculateSubtotal(item: number) {
    this.products[item - 1].subtotal = this.products[item - 1].quantity * this.products[item - 1].unitValue;
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    this.products.forEach(element => {
      this.total = (element.quantity * element.unitValue) + this.total;
    });
  }

  updateItem(){
    let newItem=1;
    this.products.forEach(element => { 
      element.item = newItem;
      newItem++;
    });
  }

  deleteRow(_item: number) {
    // for(let i = 0; i < this.products.length; ++i){
    //     if (this.products[i].item=== item) {
    //         this.products.splice(i,1);// i posicion y 1 cantidad de elemento eliminar
    //     }
    // }
    this.products.forEach(element => {
      if (element.item === _item) {
        this.products.splice(this.products.indexOf(element), 1);
      }
    });
    this.calculateTotal();
    this.updateItem();
  }



}