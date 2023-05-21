import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicalListComponent } from './periodical-list.component';

describe('PeriodicalListComponent', () => {
  let component: PeriodicalListComponent;
  let fixture: ComponentFixture<PeriodicalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodicalListComponent]
    });
    fixture = TestBed.createComponent(PeriodicalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
