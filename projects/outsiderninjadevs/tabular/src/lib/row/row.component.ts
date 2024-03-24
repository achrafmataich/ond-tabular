import { Component, Input } from '@angular/core';
import { AlignmentMappings, Alignments } from '../types/mapping';
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: '[ond-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  imports: [
    NgStyle,
    NgForOf
  ],
  standalone: true
})
export class RowComponent<T extends object> {
  @Input() element!: T;
  @Input() keysList!: (keyof T)[];
  @Input() alignCellMapping!: AlignmentMappings<T>;

  getTextAlign(pos: Alignments | undefined): string {
    if (pos) {
      switch (pos) {
        case 'l': return "left";
        case 'c': return "center";
        case 'r': return "right";
        default: return "left";
      }
    } else {
      return "left";
    }
  }
}
