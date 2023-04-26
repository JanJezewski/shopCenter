import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluzyComponent } from './bluzy.component';

describe('BluzyComponent', () => {
  let component: BluzyComponent;
  let fixture: ComponentFixture<BluzyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluzyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BluzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
