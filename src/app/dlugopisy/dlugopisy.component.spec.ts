import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlugopisyComponent } from './dlugopisy.component';

describe('DlugopisyComponent', () => {
  let component: DlugopisyComponent;
  let fixture: ComponentFixture<DlugopisyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlugopisyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlugopisyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
