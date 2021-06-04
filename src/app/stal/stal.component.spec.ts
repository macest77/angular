import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StalComponent } from './stal.component';

describe('StalComponent', () => {
  let component: StalComponent;
  let fixture: ComponentFixture<StalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
