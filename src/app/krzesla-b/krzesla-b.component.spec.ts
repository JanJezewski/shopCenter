import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrzeslaBComponent } from './krzesla-b.component';

describe('KrzeslaBComponent', () => {
  let component: KrzeslaBComponent;
  let fixture: ComponentFixture<KrzeslaBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrzeslaBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KrzeslaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
