import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinchillaComponent } from './chinchilla.component';

describe('ChinchillaComponent', () => {
  let component: ChinchillaComponent;
  let fixture: ComponentFixture<ChinchillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinchillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinchillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
