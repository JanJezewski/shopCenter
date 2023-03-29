import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolecaneComponent } from './polecane.component';

describe('PolecaneComponent', () => {
  let component: PolecaneComponent;
  let fixture: ComponentFixture<PolecaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolecaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolecaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
