import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'ond-tabular-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class HeaderComponent {
  @Input() tableTitle!: string;
  @Input() keywords: string[] = [];
  @Output() keywordsChange = new EventEmitter<string[]>();
  @Output() downloadClicked = new EventEmitter<void>();
  searchKeywords = '';

  emitKeywords() {
    this.keywordsChange.emit(this.searchKeywords ? this.searchKeywords.trim().split(/\s+/) : []);
  }

  downloadButtonClicked() {
    this.downloadClicked.emit();
  }
}
