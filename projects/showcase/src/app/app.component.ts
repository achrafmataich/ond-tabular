import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AlignmentMappings, DragPreviewCardDirective,
  DragPreviewMapping,
  KeyMappings,
  OndTabularComponent
} from "../../../outsiderninjadevs/tabular";

interface IUser {
  name: string;
  age: number;
  is_an_admin?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OndTabularComponent, DragPreviewCardDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  usersList: IUser[] = [
    {
      name: 'Achraf',
      age: 24
    },
    {
      name: 'Alae',
      age: 18
    }
    // ...
  ];

  keyMappings: KeyMappings<IUser> = {
    name: "Name",
    is_an_admin: "Is an admin"
  };

  alignmentMappings: AlignmentMappings<IUser> = {
    name: "l"
  };

  dragPreviewMapping: DragPreviewMapping<IUser> = {
    mainAttribute: "name",
    otherAttributes: ["is_an_admin"]
  }
}
