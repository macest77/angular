import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzarniComponent } from './czarni.component';

describe('CzarniComponent', () => {
  let component: CzarniComponent;
  let fixture: ComponentFixture<CzarniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CzarniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CzarniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
