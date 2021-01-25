import { Component, OnInit } from '@angular/core';
import {ResumenItemComponent} from '../../component/resumen-item/resumen-item.component';
import { OrderDetailService } from '../../services/data/order-detail.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  constructor() { } 
  ngOnInit(): void {

  }


}
