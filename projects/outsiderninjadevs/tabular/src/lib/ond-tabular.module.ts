import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OndTabularComponent } from './ond-tabular.component';
import { OndTabularService } from './ond-tabular.service';
import { RowComponent } from './row/row.component';
import { DragPreviewCardDirective } from './directives/drag-preview-card.directive';
import { OndCoreModule } from "@outsiderninjadevs/core";

@NgModule({
  declarations: [
    OndTabularComponent,
    HeaderComponent,
    FooterComponent,
    RowComponent,
    DragPreviewCardDirective,
  ],
  providers: [
    OndTabularService,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    OndCoreModule
  ],
  exports: [
    OndTabularComponent,
    DragPreviewCardDirective
  ]
})
export class OndTabularModule { }
