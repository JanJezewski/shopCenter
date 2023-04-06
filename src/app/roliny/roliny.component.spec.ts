import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolinyComponent } from './roliny.component';

describe('RolinyComponent', () => {
  let component: RolinyComponent;
  let fixture: ComponentFixture<RolinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolinyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
