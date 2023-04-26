import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SztukaComponent } from './sztuka.component';

describe('SztukaComponent', () => {
  let component: SztukaComponent;
  let fixture: ComponentFixture<SztukaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SztukaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SztukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
