import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetnameuserComponent } from './getnameuser.component';

describe('GetnameuserComponent', () => {
  let component: GetnameuserComponent;
  let fixture: ComponentFixture<GetnameuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetnameuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetnameuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
