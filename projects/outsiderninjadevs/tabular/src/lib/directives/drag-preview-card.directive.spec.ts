import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragPreviewCardDirective } from './drag-preview-card.directive';
import { Component, TemplateRef, ViewContainerRef } from '@angular/core';
import { DragPreviewCardContext } from '../types/contexts/DragPreviewCardContext';

@Component({
  template: `<div *ondDragPreviewCard="let data"></div>`
})
class TestComponent {
  data = {};
}

describe('DragPreviewCardDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  let dep1Service: TemplateRef<DragPreviewCardContext<object>>;
  let dep2: ViewContainerRef; // Replace with the actual type of dep2


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, DragPreviewCardDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
  });

  it('should create an instance', () => {
    const directive = new DragPreviewCardDirective<object>(dep1Service, dep2);
    expect(directive).toBeTruthy();
  });
});
