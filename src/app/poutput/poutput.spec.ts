import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poutput } from './poutput';

describe('Poutput', () => {
  let component: Poutput;
  let fixture: ComponentFixture<Poutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
