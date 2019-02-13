import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherRootComponent } from './another-root.component';

describe('AnotherRootComponent', () => {
  let component: AnotherRootComponent;
  let fixture: ComponentFixture<AnotherRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
