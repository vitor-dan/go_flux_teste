import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancesComponent } from './lances.component';

describe('LancesComponent', () => {
  let component: LancesComponent;
  let fixture: ComponentFixture<LancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
