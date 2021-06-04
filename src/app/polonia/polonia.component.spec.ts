import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloniaComponent } from './polonia.component';

describe('PoloniaComponent', () => {
  let component: PoloniaComponent;
  let fixture: ComponentFixture<PoloniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoloniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoloniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
