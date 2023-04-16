import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MebleComponent } from './meble.component';

describe('MebleComponent', () => {
  let component: MebleComponent;
  let fixture: ComponentFixture<MebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
