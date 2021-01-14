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
  //cronometro
  time: string;
  minutes: any = '00';
  seconds: any = '00';
  chronometerCall
  startDate = new Date();
  endDate = new Date();

katy(){
  console.log(this.childDataOrder)
}

  changeStatus(_index: string, event) {
    console.log( this.childDataOrder);
    //console.log(this.childDataOrder[1]);
    status = this.childDataOrder[_index].status;


    switch (status) {
      case 'Pendiente':
        this.childDataOrder[_index].status = 'En Proceso';
        //this.firestoreService.updateStatus(this.childDataOrder[_index].id,this.childDataOrder[_index].status);

        // this.chronometer(event,this.childDataOrder[_index].minutes,this.childDataOrder[_index].seconds)

        //---------------cronometro inicio---------------------//
        this.chronometerCall = setInterval(() => { // 2 parametros funcion e intervalo 1000-milisegundo
          this.childDataOrder[_index].seconds++;
          //console.log('aumenta'+this.childDataOrder[_index].seconds)
          if (this.childDataOrder[_index].seconds < 10) this.childDataOrder[_index].seconds = '0' + this.childDataOrder[_index].seconds;
          if (this.childDataOrder[_index].seconds > 59) {
            this.childDataOrder[_index].seconds = '00'// reinicio
            this.childDataOrder[_index].minutes++
            if (this.childDataOrder[_index].minutes < 10) this.childDataOrder[_index].minutes = '0' + this.childDataOrder[_index].minutes
          }
          if (this.childDataOrder[_index].minutes > 59) {
            this.childDataOrder[_index].minutes = '00';
          }
        }, 1000);
        event.target.setAttribute('disabled', '');

        //-----------------cronometro fin---------------------//
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

  // calcularDiasAusencia() {
  //   console.log('ingrese fecha aqui');
  //   console.log(this.childDataOrder[2].status);
  //   console.log(this.childDataOrder[1]);
  //   // this.childDataOrder.array.forEach(element => {console.log(element.date);
  //   console.log('hola' + this.childDataOrder[1]);
  //   for (const property in this.childDataOrder) {
  //     console.log('hola');
  //     console.log(property.length);

  //   }
  // }

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
    //--------------cronometro guardar tiempo-----------//
    this.time = this.childDataOrder[_index].minutes + ':' + this.childDataOrder[_index].seconds;
    console.log('tiempo' + this.time);
    // this.firestoreService.updateTime(_id, this.time);
    //--------------------fin---------------------------//
  }

  constructor(private firestoreService: FirestoreService) {
    console.log('laboratoria' + this.childDataOrder);
    this.getOrders();
    console.log('katy2')
    console.log(this.childDataOrder); //[1]

  }



  //funcion para dar formato a fecha Timestamp de firebase
  formatDate(_date) {
    const options = { month: "short", day: "numeric" };
    return _date.toDate().toLocaleDateString("es", options);

  }

  // //------------------Función de cronometro--------------------------//

  // chronometer (event,_minutes,_seconds)  {
  //   this.chronometerCall = setInterval(() =>{ // 2 parametros 
  //     _seconds++;
  //     console.log('aumenta'+_seconds)
  //     if (_seconds < 10) _seconds ='0'  + _seconds;
  //     if (_seconds> 59) {
  //       _seconds = '00'// reinicio
  //       _minutes ++
  //       if (_minutes < 10)  _minutes ='0'+_minutes
  //     }
  //     if (_minutes > 59) {
  //       _minutes = '00';
  //     }
  //   }, 1000);
  //   event.target.setAttribute('disabled','');
  // }


  // chronometer (event)  {
  //   this.chronometerCall = setInterval(() =>{ // 2 parametros 
  //     this.seconds++;
  //     console.log('aumenta'+this.seconds)
  //     if (this.seconds < 10) this.seconds ='0'  + this.seconds;
  //     if (this.seconds> 59) {
  //       this.seconds = '00'// reinicio
  //       this.minutes ++
  //       if (this.minutes < 10)  this.minutes ='0'+this.minutes
  //     }
  //     if (this.minutes > 59) {
  //       this.minutes = '00';
  //     }
  //   }, 1000);
  //   event.target.setAttribute('disabled','');
  // }

  // calcularDiasAusencia(){
  //   console.log('ingrese fecha');
  //   // this.childDataOrder.array.forEach(element => {console.log(element.date);
  //   console.log('hola'+this.childDataOrder[1]);
  //   for (const property in this.childDataOrder) {
  //     console.log('hola');
  //     console.log(property.length);
  //   }



  pause() {
    //this.time=  this.childDataOrder[_index].minutes+ ':'+ this.childDataOrder[_index].seconds ;
    //console.log('tiempo'+this.time);
    clearInterval(this.chronometerCall)
    // this.play.removeAttribute(`disabled`)
  }




  cronometer(){
    //this.childDataOrder[].minutes;
  }
  getOrders() {
    console.log('getOrders');
    this.firestoreService.getOrders().subscribe((ordersSnapshot) => {
      this.ordersPedido = [];
      ordersSnapshot.forEach((orderData: any) => {
        this.ordersPedido.push({ ...orderData.payload.doc.data() })
      });
      this.ordersPedido.forEach(element => {
        this.startDate = element.date.toDate();
        //  console.log('Inicio '+  this.startDate);
        //console.log('Fin '+ this.endDate);
        let seconds;
        let minutes;
        let milisegundos = Math.round(this.endDate.getTime() - this.startDate.getTime());
        minutes = Math.trunc(milisegundos / (1000 * 60)); // 100/60 = 1.6 = 1  
        seconds = (Math.trunc((milisegundos / 1000) - (minutes * 60)) < 0) ? 0 : (Math.trunc((milisegundos / 1000) - (minutes * 60)));
        console.log("cronometro: " + minutes + ':' + seconds);
        console.log(element);        //console.log('ingrese soy id'+element.id)
        //this.firestoreService.updateTime(element.id, minutes,seconds);
      });
    });
  }
  ngOnChanges() {
    console.log(this.childDataOrder);
}

  ngOnInit(): void {
    
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')

    // console.log('ordes' + this.ordersPedido);
    // console.log('cronometro')
    // console.log(this.childDataOrder); //[1]
    // console.log('laboratoria' + this.childDataOrder);
    // this.chronometerCall = setInterval(() => { // 2 parametros funcion e intervalo 1000-milisegundo
    //   seconds++;
    //   //console.log('aumenta'+this.childDataOrder[_index].seconds)
    //   if (seconds < 10) seconds = '0' + seconds;
    //   if (seconds > 59) {
    //     seconds = '00'// reinicio
    //     minutes++
    //     if (minutes < 10)minutes = '0' + minutes
    //   }
    //   if (minutes > 59) {
    //     minutes = '00';
    //   }
    // }, 1000);


  }


}
