import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent implements OnInit {
  total:number=0;
  result=[{item:1,name:'Café con leche',quantity:0},
  {item:2,name:'Café americano',quantity:0},
  {item:3,name:'Café americano',quantity:0},
  {item:4,name:'Café americano',quantity:0},
  {item:5,name:'Café americano',quantity:0},
  {item:6,name:'Café americano',quantity:0},
  {item:7,name:'Café americano',quantity:0},
  {item:8,name:'Café americano',quantity:0},
  {item:9,name:'Café americano',quantity:0}
]
  addProducts(item:number) { 
    this.total =0;
    this.result[item-1].quantity++;
  }
  reduceProducts(item:number) {
    this.total =0;
    if(this.result[item-1].quantity>0){
        this.result[item-1].quantity--;
    }
  }
  constructor() { }
  ngOnInit(): void {
  }

}
