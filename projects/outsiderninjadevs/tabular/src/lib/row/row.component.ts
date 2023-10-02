import { Component, Input } from '@angular/core';
import { AlignmentMappings, Alignments } from '../types/mapping';

@Component({
  selector: '[ond-tabular-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
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
