import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndTabularComponent } from './ond-tabular.component';

describe('OndTabularComponent', () => {
  let component: OndTabularComponent<object>;
  let fixture: ComponentFixture<OndTabularComponent<object>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OndTabularComponent]
    });
    fixture = TestBed.createComponent(OndTabularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
