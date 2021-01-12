import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { OrderDetailService } from '../../services/data/order-detail.service';

@Component({
  selector: 'app-getnameuser',
  templateUrl: './getnameuser.component.html',
  styleUrls: ['./getnameuser.component.scss']
})
export class GetnameuserComponent implements OnInit {
  nameClient:string = '';
  customerName: string;

  constructor(private data: OrderDetailService) { }
  // actualizar informacion de cliente
  sendCustomerName(){
    this.data.changeCustomerName(this.customerName.toUpperCase());
  }


ngOnInit(): void {
  this.data.currentCustomerName.subscribe(name => this.customerName = name)
}

}
