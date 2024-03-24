/**
 * @file ond-tabular.component.ts
 * @description Main component of the `ond-tabular` library for flexible table display of dynamic data.
 *
 * @template T - The type of data objects in the table.
 *
 * @example
 * **Basic usage:**
 * <ond-tabular [elements]="data"></ond-tabular>
 *
 * @example
 * **Customized table with title and key mappings:**
 * <ond-tabular
 *   [elements]="data"
 *   [tableTitle]="'Custom Table Title'"
 *   [keysMapping]="{ name: 'Full Name', age: 'Age' }"
 * ></ond-tabular>
 *
 * @example
 * **Customized cell alignment:**
 * <ond-tabular
 *   [elements]="data"
 *   [alignCellMapping]="{ name: 'c', age: 'r' }"
 * ></ond-tabular>
 */

import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { DragPreviewMapping, KeyMappings, AlignmentMappings } from './types/mapping';
import {CdkDrag, CdkDragDrop, CdkDragPreview, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { DragPreviewCardDirective } from './directives/drag-preview-card.directive';
import { DragPreviewCardContext } from './types/contexts/DragPreviewCardContext';
import { OndCsvBuilderService } from '@outsiderninjadevs/core';
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {RowComponent} from "./row/row.component";
import {FooterComponent} from "./footer/footer.component";


/**
 * OndTabularComponent is the main component of the **ond-tabular** library, providing a flexible table display for dynamic data.
 */
@Component({
  selector: 'ond-tabular',
  templateUrl: './ond-tabular.component.html',
  styleUrls: [
    "./ond-tabular.component.scss"
  ],
  imports: [
    NgIf,
    HeaderComponent,
    CdkDropList,
    RowComponent,
    NgForOf,
    CdkDragPreview,
    NgTemplateOutlet,
    CdkDrag,
    FooterComponent
  ],
  standalone: true
})
export class OndTabularComponent<T extends object> implements OnInit {

  /**
   * The array of data elements to be displayed in the table.
   *
   * @required This input is required and must be provided when using the component.
   *
   * @example
   * <ond-tabular [elements]="data"></ond-tabular>
   */
  @Input({ required: true }) elements!: T[];

  /**
   * An optional object that maps keys to custom table header labels.
   * Use this to customize the table header labels.
   *
   * @example
   * <ond-tabular
   *   [elements]="data"
   *   [keysMapping]="{ name: 'Full Name', age: 'Age' }"
   * ></ond-tabular>
   */
  @Input() keysMapping!: KeyMappings<T>;

  /**
   * An optional object that defines cell alignment for each key.
   * Use this to customize the alignment of table cells.
   *
   * @example
   * <ond-tabular
   *   [elements]="data"
   *   [alignCellMapping]="{ name: 'c', age: 'r' }"
   * ></ond-tabular>
   */
  @Input() alignCellMapping!: AlignmentMappings<T>;

  /**
   * An optional title for the table.
   *
   * @example
   * <ond-tabular [elements]="data" [tableTitle]="'Custom Table Title'"></ond-tabular>
   */
  @Input() tableTitle!: string;

  /**
   * An optional drag preview elements to be shown
   *
   * @example
   * <ond-tabular [elements]="data" [dragPreviewAttributes]="{mainAttribute: 'name', otherAttributes: ["age", "bank_account"]}"></ond-table>
   */
  @Input() dragPreviewAttributes!: DragPreviewMapping<T>;


  private _list: T[] = [];
  listLength: number = this._list.length;
  keysList: (keyof T)[] = [];
  private _searchKeywords: string[] = [];

  // getters and setters

  get searchKeywords(): string[] {
    return this._searchKeywords;
  }

  set searchKeywords(kw: string[]) {
    this._searchKeywords = kw;
    this.searchKeywordsChanged(this._searchKeywords);
  }

  set list(value: T[]) {
    this._list = value;
    this.updateListLength();
  }

  get list(): T[] {
    return this._list;
  }

  // END getters and setters

  // Refs

  /**
   * The reference of the template having a `*ondDragPreviewCard` selector
   */
  @ContentChild(DragPreviewCardDirective, { read: TemplateRef }) customUI!: TemplateRef<DragPreviewCardContext<T>>;

  // END Refs

  constructor(private csv: OndCsvBuilderService) { }

  /**
   * Initializes the component, setting up the list of elements and keysList.
   */
  ngOnInit(): void {
    this._list = this.elements;
    if(this._list) {
      this.listLength = this._list.length
    }
    const _keysList: string[] = this.elements ? [...new Set(this.elements.flatMap(obj => Object.keys(obj)))] : [];
    this.keysList = _keysList.map(val => {
      return val as keyof T;
    });
  }

  /**
   * Detects changes in the list length and updates `listLength` accordingly.
   */

  private updateListLength() {
    this.listLength = this._list.length;
  }

  /**
   * Handles changes to the search keywords and filters the list accordingly.
   *
   * @param keywords - An array of keywords to filter the list by.
   */
  private searchKeywordsChanged(keywords: string[]) {
    if (!keywords || keywords.length === 0) {
      this.list = this.elements;
    } else {
      this.list = this.elements.filter((element: T) => {
        return keywords.every(keyword =>
          this.keysList.some((key: keyof T) =>
            element[key] && typeof element[key] === 'string' &&
            (element[key] as string).toLowerCase().includes(keyword.toLowerCase())
          )
        );
      });
    }
  }

  /**
   * Drop event when the user put the element in a place
   *
   * @param event The event object of the drag and drop feature
   */
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this._list, event.previousIndex, event.currentIndex);
  }

  /**
   * The method called when the user click on the download button
   */
  downloadCSV() {
    this.csv.toCSVAsync<T>(this._list)
      .then(csvStr => {
        this.csv.downloadCSVAsync(csvStr, this.tableTitle ? this.tableTitle.toLowerCase() + ".csv" : "tabular.csv");
      });
  }

  /**
   * Description
   * @param {T} item
   * @param {number} index
   * @returns {DragPreviewCardContext<T>}
   */
  createCustomUIContext(item: T, index: number): DragPreviewCardContext<T> {
    const res: DragPreviewCardContext<T> = {
      $implicit: item,
      index: index
    };
    return res;
  }
}
