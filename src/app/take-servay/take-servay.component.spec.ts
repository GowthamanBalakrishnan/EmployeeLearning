import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeServayComponent } from './take-servay.component';

describe('TakeServayComponent', () => {
  let component: TakeServayComponent;
  let fixture: ComponentFixture<TakeServayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeServayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeServayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
