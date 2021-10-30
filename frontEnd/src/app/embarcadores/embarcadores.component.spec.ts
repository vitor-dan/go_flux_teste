import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbarcadoresComponent } from './embarcadores.component';

describe('EmbarcadoresComponent', () => {
  let component: EmbarcadoresComponent;
  let fixture: ComponentFixture<EmbarcadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbarcadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbarcadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
