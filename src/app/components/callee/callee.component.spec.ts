import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalleeComponent } from './callee.component';

describe('CalleeComponent', () => {
  let component: CalleeComponent;
  let fixture: ComponentFixture<CalleeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalleeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
