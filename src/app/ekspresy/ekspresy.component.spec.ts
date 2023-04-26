import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkspresyComponent } from './ekspresy.component';

describe('EkspresyComponent', () => {
  let component: EkspresyComponent;
  let fixture: ComponentFixture<EkspresyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkspresyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkspresyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
