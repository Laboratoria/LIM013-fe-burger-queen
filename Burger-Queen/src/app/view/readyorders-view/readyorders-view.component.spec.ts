import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyordersViewComponent } from './readyorders-view.component';

describe('ReadyordersViewComponent', () => {
  let component: ReadyordersViewComponent;
  let fixture: ComponentFixture<ReadyordersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadyordersViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyordersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
