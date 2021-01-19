import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-item-order',
  templateUrl: './item-order.component.html',
  styleUrls: ['./item-order.component.scss']
})
export class ItemOrderComponent implements OnInit {
  @Input() childDataOrder: any;
  styleItem: number = 0;
  public ordersPedido = [];


  changeStatus(_index: string) {
    status = this.childDataOrder[_index].status;
    switch (status) {
      case 'Pendiente':
        this.childDataOrder[_index].status = 'En Proceso';
        break;
      case 'En Proceso':
        this.childDataOrder[_index].status = 'Pendiente';
        break;
      case 'Por Entregar':
        this.childDataOrder[_index].status = 'Por Entregar ';
        break;
      case 'Por Entregar ':
        this.childDataOrder[_index].status = 'Por Entregar';
        break;
      default:
        break;
    }
  }



  //----------funcion de fecha------------------//

  updateStatus(_index: any, _id: any) {
    status: String;
    if (this.childDataOrder[_index].status === 'Pendiente' || this.childDataOrder[_index].status === 'En Proceso') {
      status = 'Por Entregar';
    }
    else {
      status = 'Entregado';
    }
    this.firestoreService.updateStatus(_id, status);
  }

  constructor(private firestoreService: FirestoreService) {
  }



  //------Función para dar formato a fecha Timestamp de firebase----//
  formatDate(_date) {
    const options = { month: "short", day: "numeric" };
    return _date.toDate().toLocaleDateString("es", options);

  }

 // -------------------------Función para cronometro---------------------------//
  ngOnChanges() {
    this.childDataOrder.forEach(element => {
      let startDate=new Date();
      startDate = element.date.toDate(); //  asignamos fecha con la que se creo doc // timestamp a date 
      let seconds:any;
      let minutes:any;
      let chronometerCall;  
      let endDate= new Date();
      //endDate = fecha actual           // startDate = fecha de creacion
      // Math.round = entero //  getTime()= milsegundos //  Math.trunc = devuelve en entero eliminando  los digitos fracionados
      let milisegundos = Math.round(endDate.getTime() - startDate.getTime()); //
      minutes = Math.trunc(milisegundos / (1000 * 60));
      //< 1 ?'00':(Math.trunc(milisegundos / (1000 * 60)));// 100/60 = 1.6 = 1  
      seconds = (Math.trunc((milisegundos / 1000) - (minutes * 60)) < 0) ? 0 : (Math.trunc((milisegundos / 1000) - (minutes * 60)));
      if(element.chronometer){
        ///console.log('entre intervalo');
      chronometerCall = setInterval(() => { 
        seconds++;
        if (seconds < 10) seconds = '0' + seconds;
        if (seconds > 59) {
          seconds = '00'// reinicio
          minutes++
          if (minutes < 10) minutes = '0' + minutes;
        }
        if (minutes > 59) {
          minutes = '00';
        }
        element.minutes = minutes;
        element.seconds = seconds;
      }, 1000);
    }
    });
    
  }


// ------------------------------------Función que detiene tiempo y actualiza la data-----------------//
stopTime(_index: string){
    this.firestoreService.updateChronometer(this.childDataOrder[_index].id,false);
    let currentDate; // fecha actual 
    let startDate= new Date();
    startDate = this.childDataOrder[_index].date.toDate();
    currentDate = new Date();
    let milisegundos = Math.round(currentDate.getTime() - startDate.getTime());
    let minutes:any = Math.trunc(milisegundos / (1000 * 60)); // 100/60 = 1.6 = 1    //1
    let seconds:any = (Math.trunc((milisegundos / 1000) - (minutes * 60)) < 0) ? 0 : (Math.trunc((milisegundos / 1000) - (minutes * 60)));//9
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    this.firestoreService.updateTime(this.childDataOrder[_index].id,minutes,seconds);

  }


  ngOnInit(): void {
 
  }


}



