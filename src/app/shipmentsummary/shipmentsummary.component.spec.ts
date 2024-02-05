import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsummaryComponent } from './shipmentsummary.component';

describe('ShipmentsummaryComponent', () => {
  let component: ShipmentsummaryComponent;
  let fixture: ComponentFixture<ShipmentsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentsummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
