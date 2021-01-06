import { Component, OnInit } from '@angular/core';
import {ResumenItemComponent} from '../../component/resumen-item/resumen-item.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  statusButton:string = 'disabled';

  activeButton(){
    this.statusButton = 'active';
    // console.log(this.statusButton);
  }


  constructor( ) { } // creo let resumenitemcomponent que tendra el valor de la clase 
  ngOnInit(): void {
  }

 


  // toConfirmOrder (){
  //   console.log('ingrese a resumenitemcomponent')
  //   // return this.resumenitemcomponent.confirmOrder();
  // }


}
