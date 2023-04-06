import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButyComponent } from './buty.component';

describe('ButyComponent', () => {
  let component: ButyComponent;
  let fixture: ComponentFixture<ButyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
