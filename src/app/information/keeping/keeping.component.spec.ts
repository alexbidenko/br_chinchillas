import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepingComponent } from './keeping.component';

describe('KeepingComponent', () => {
  let component: KeepingComponent;
  let fixture: ComponentFixture<KeepingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeepingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
