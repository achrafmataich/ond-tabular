import { Component, Input } from '@angular/core';

@Component({
  selector: 'ond-tabular-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() listLength!: number;
}
