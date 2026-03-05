import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourGetterSetter } from './four-getter-setter';

describe('FourGetterSetter', () => {
  let component: FourGetterSetter;
  let fixture: ComponentFixture<FourGetterSetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourGetterSetter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourGetterSetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
