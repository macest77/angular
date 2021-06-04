import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegiaComponent } from './legia.component';

describe('LegiaComponent', () => {
  let component: LegiaComponent;
  let fixture: ComponentFixture<LegiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
