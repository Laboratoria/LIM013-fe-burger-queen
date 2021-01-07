import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getnameuser',
  templateUrl: './getnameuser.component.html',
  styleUrls: ['./getnameuser.component.scss']
})
export class GetnameuserComponent implements OnInit {
  nameClient:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
