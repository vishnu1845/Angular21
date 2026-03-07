import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixPipes } from './six-pipes';

describe('SixPipes', () => {
  let component: SixPipes;
  let fixture: ComponentFixture<SixPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixPipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixPipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
