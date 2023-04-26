import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkarpetyComponent } from './skarpety.component';

describe('SkarpetyComponent', () => {
  let component: SkarpetyComponent;
  let fixture: ComponentFixture<SkarpetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkarpetyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkarpetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
