# Ond Tabular

Ond Tabular is an Angular library for creating customizable tabular data views with features like searching, and sorting with `Drag And Drop` feature. It simplifies the process of displaying tabular data in your Angular applications.

![@outsiderninjadevs/tabular logo](https://raw.githubusercontent.com/achrafmataich/ond-tabular/master/projects/outsiderninjadevs/tabular/assets/ond-tabular-logo.png)

[![Node.js CI](https://github.com/achrafmataich/ond-tabular/actions/workflows/nodjs.yaml/badge.svg)](https://github.com/achrafmataich/ond-tabular/actions/workflows/nodjs.yaml)

## Features

- Display tabular data with ease.
- Search and filter data by keywords.
- Customizable layout.
- Drag and drop elements.

## Installation

You can install Ond Tabular via npm:

```bash
npm install @outsiderninjadevs/ond-tabular
```

## Usage

1. We strongly recommend using Angular 17 standalone components, That's why we no more need `OndTabularModule`, All the components in this library are __standalone__

2. Create the list of element and the mappers in your component's typescript file

   We recommend using our `types` for the mappings.

   What makes this way a good way is that you are sure you respect the types and the mapping logic.

    ```ts
    import {
        KeyMappings, 
        AlignmentMappings, 
        DragPreviewMapping, 
        OndTabularComponent, 
        DragPreviewCardDirective
    } from '@outsiderninjadevs/ond-tabular'

    // imports

    interface IUser {
        name: string;
        age: number;
        is_an_admin?: boolean;
    }

    @Component({
        // properties
        standalone: true,
        imports: [/*...*/, OndTabularComponent, DragPreviewCardDirective],
    })
    export class MyComponent {
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
    ```

3. Use the `<ond-tabular>` component in your template to display tabular data:

    ```html
    <ond-tabular
    [elements]="usersList"
    [keysMapping]="keyMappings"
    [alignCellMapping]="alignmentMappings"
    [dragPreviewAttributes]="dragPreviewMapping"
    tableTitle="My Users Table"
    ></ond-tabular>
    ```

   > This will create a table of the given list, well mapped, aligned as you like, and with a drag and drop preview showing just the attributes you want

## Configuration

If needed, you can customize the appearance and behavior of the tabular component by providing additional options.

### 1. Customizing the preview card on drag

You can customize the drag preview card with the `*ondDragPreviewCard` structural directive.

```html
<ond-tabular [elements]="usersList">
  <!-- this is a tabular with default drag preview -->
</ond-tabular>

<ond-tabular [elements]="usersList">
  <!-- this is a tabular with custom drag preview -->
  <div *ondDragPreviewCard="let user">
    <div>
      name: {{ user?.name }}
      <br />
      Age: {{ user?.age }}
      <br />
      Is an admin:
      {{ user?.is_an_admin ?? 'N/A' }}
    </div>
  </div>
</ond-tabular>

<ond-tabular [elements]="usersList">
  <!-- this is a tabular with custom drag preview but also an element index in the table -->
  <div *ondDragPreviewCard="let user; let i=index">
    <div>
      <h3>#{{ i + 1 }}</h3>
      name: {{ user?.name }}
      <br />
      Age: {{ user?.age }}
      <br />
      Is an admin:
      {{ user?.is_an_admin ?? 'N/A' }}
    </div>
  </div>
</ond-tabular>
```

> Make sure to use the optional chaining `user?.name` because in the first loading of the tabular, the user instance is still null until you perform your drag action.

### 2. Public css classes

You can use a bench of css classes to customize the tabular styles

| CSS Selector                           | Uses                                                                                                                    |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| `.ond-tabular-header-container-public` | The container of the Header element in the tabular component, try to change it's `background-color`                     |
| `.ond-tabular-header-title-public`     | The title in the header in the tabular component, try to change it's `color`                                            |
| `.ond-tabular-header-search-public`    | The search bar container in the tabular component, try to change it's `background-color` or maybe it's border color too |

## License

This project is licensed under the MIT License - see the **`LICENSE`** file for details.
