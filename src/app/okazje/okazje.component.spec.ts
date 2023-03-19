import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkazjeComponent } from './okazje.component';

describe('OkazjeComponent', () => {
  let component: OkazjeComponent;
  let fixture: ComponentFixture<OkazjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkazjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkazjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

