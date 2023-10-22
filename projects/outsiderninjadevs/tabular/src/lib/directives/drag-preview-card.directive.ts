import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { DragPreviewCardContext } from '../types/contexts/DragPreviewCardContext';

/**
 * The `ondDragPreviewCard` directive is a structural directive that allows customization
 * of the drag preview UI when used within an Angular component template.
 *
 * @usageNotes
 * To use this directive, add it to an element and define local variables within it.
 *
 * ```html
 * <ond-tabular [elements]="users">
 *   <div *ondDragPreviewCard="let user; let i=index"><!-- Customization content here --></div>
 * </ond-tabular>
 * ```
 */
@Directive({
  selector: '[ondDragPreviewCard]'
})
export class DragPreviewCardDirective<T extends object> implements OnInit {
  /**
   * Creates an instance of `DragPreviewCardDirective`.
   *
   * @param templateRef - A reference to the template to be rendered within the drag preview.
   * @param vcRef - A reference to the view container where the customized drag preview will be inserted.
   */
  constructor(
    private readonly templateRef: TemplateRef<DragPreviewCardContext<T>>,
    private readonly vcRef: ViewContainerRef
  ) { }

  /**
   * Initializes the directive by creating the embedded view with custom context data.
   */
  ngOnInit(): void {
    // Define the context with default values.
    const context: DragPreviewCardContext<T> = {
      $implicit: null,
      index: null
    };

    // Create an embedded view with the provided template and context.
    this.vcRef.createEmbeddedView(this.templateRef, context);
  }
}