import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgdComponent } from './agd.component';

describe('AgdComponent', () => {
  let component: AgdComponent;
  let fixture: ComponentFixture<AgdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
