import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpodnieComponent } from './spodnie.component';

describe('SpodnieComponent', () => {
  let component: SpodnieComponent;
  let fixture: ComponentFixture<SpodnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpodnieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpodnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
