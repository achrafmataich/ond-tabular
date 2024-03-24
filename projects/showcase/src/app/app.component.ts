import { Component } from '@angular/core';
import {AlignmentMappings, DragPreviewMapping, KeyMappings} from "../../../outsiderninjadevs/tabular";

interface IUser {
  name: string;
  age: number;
  is_an_admin?: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
