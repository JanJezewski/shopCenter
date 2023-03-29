import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveButtonComponent } from './active-button.component';

describe('ActiveButtonComponent', () => {
  let component: ActiveButtonComponent;
  let fixture: ComponentFixture<ActiveButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
