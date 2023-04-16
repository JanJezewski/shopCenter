import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoveComponent } from './hove.component';

describe('HoveComponent', () => {
  let component: HoveComponent;
  let fixture: ComponentFixture<HoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
