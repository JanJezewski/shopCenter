import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightNightButtonComponent } from './light-night-button.component';

describe('LightNightButtonComponent', () => {
  let component: LightNightButtonComponent;
  let fixture: ComponentFixture<LightNightButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightNightButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightNightButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
