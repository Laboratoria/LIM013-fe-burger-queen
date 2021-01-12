import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-item-order',
  templateUrl: './item-order.component.html',
  styleUrls: ['./item-order.component.scss']
})
export class ItemOrderComponent implements OnInit {
  @Input() childDataOrder: any;
  styleItem:number = 0;

  changeStatus(_index:string){
    status = this.childDataOrder[_index].status;
    switch (status) {
      case 'Pendiente':
        this.childDataOrder[_index].status='En Proceso';
        break;
      case 'En Proceso':
        this.childDataOrder[_index].status='Pendiente';
        break;
      case 'Por Entregar':
        this.childDataOrder[_index].status='Por Entregar ';
        break;
      case 'Por Entregar ':
        this.childDataOrder[_index].status='Por Entregar';
        break;
      default:
        break;
    }
  }

  //----------funcion de fecha------------------//

  updateStatus(_index:any,_id:any){
    status:String;
    if(this.childDataOrder[_index].status==='Pendiente'||this.childDataOrder[_index].status==='En Proceso'){
      status='Por Entregar';
    }
    else{
      status='Entregado';
    }
    this.firestoreService.updateStatus(_id,status);
  }
  constructor(private firestoreService: FirestoreService) { 
  }

  //funcion para dar formato a fecha Timestamp de firebase
  formatDate(_date){
    const options = { month:"short",day: "numeric"};
    return _date.toDate().toLocaleDateString("es", options);
  }

  ngOnInit(): void {
  }

}
