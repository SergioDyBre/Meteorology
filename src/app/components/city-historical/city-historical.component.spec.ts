import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityHistoricalComponent } from './city-historical.component';

describe('CityHistoricalComponent', () => {
  let component: CityHistoricalComponent;
  let fixture: ComponentFixture<CityHistoricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityHistoricalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
