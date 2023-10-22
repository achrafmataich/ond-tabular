import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowComponent } from './row.component';
import { FormsModule } from '@angular/forms';

describe('RowComponent', () => {
  let component: RowComponent<object>;
  let fixture: ComponentFixture<RowComponent<object>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowComponent],
    });
    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
