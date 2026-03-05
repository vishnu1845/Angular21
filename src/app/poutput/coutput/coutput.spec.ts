import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coutput } from './coutput';

describe('Coutput', () => {
  let component: Coutput;
  let fixture: ComponentFixture<Coutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
