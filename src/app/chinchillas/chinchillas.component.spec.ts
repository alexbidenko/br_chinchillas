import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinchillasComponent } from './chinchillas.component';

describe('ChinchillasComponent', () => {
  let component: ChinchillasComponent;
  let fixture: ComponentFixture<ChinchillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinchillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinchillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
