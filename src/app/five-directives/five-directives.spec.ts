import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveDirectives } from './five-directives';

describe('FiveDirectives', () => {
  let component: FiveDirectives;
  let fixture: ComponentFixture<FiveDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveDirectives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
