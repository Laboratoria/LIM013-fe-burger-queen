import { ComponentFixture, TestBed,async } from '@angular/core/testing';

import { ResumenItemComponent } from './resumen-item.component';

describe('ResumenItemComponent', () => {
  let component: ResumenItemComponent;
  let fixture: ComponentFixture<ResumenItemComponent>;

  // beforeEach(async (() => {
  //   let a: any;
  //   component=new ResumenItemComponent(a);
  // }));


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('deberia devolver 8',async(()=>{
  //   expect(component.sumar(3,5)).toEqual(8);
  // }));
});
