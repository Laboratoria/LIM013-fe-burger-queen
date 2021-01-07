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
  }

  constructor( ) { } 
  ngOnInit(): void {
  }


}
