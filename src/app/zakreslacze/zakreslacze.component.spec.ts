import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakreslaczeComponent } from './zakreslacze.component';

describe('ZakreslaczeComponent', () => {
  let component: ZakreslaczeComponent;
  let fixture: ComponentFixture<ZakreslaczeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakreslaczeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZakreslaczeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
