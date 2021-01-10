import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../../services/firestore/firestore.service';
import { OrderDetailService } from '../../services/data/order-detail.service';

@Component({
  selector: 'app-order-pending',
  templateUrl: './order-pending.component.html',
  styleUrls: ['./order-pending.component.scss']
})
export class OrderPendingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
