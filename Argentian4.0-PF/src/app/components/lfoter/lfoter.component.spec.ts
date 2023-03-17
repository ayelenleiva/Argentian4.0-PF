import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfoterComponent } from './lfoter.component';

describe('LfoterComponent', () => {
  let component: LfoterComponent;
  let fixture: ComponentFixture<LfoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LfoterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LfoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
