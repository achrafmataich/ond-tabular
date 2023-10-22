/**
 * Mapping of the keys an object of type `T` have
 * 
 * @example
 * ```typescript
 *  interface IUser {
 *      name: string;
 *      age: number;
 *      status: "active" | "inactive";
 *      is_an_admin: boolean;
 *  }
 *  // ...
 *  const userMappings: KeyMappings<IUser> = {
 *      name: 'Name',
 *      is_an_admin: 'Is an administrator'
 *  }
 * ```
 * 
 * 
 * This will create the tabular with `name` key mapped as `Name`
 * and `is_an_admin` key mapped as `Is an administrator`
 * 
 * The other keys that are not provided in the `userMapping` object are shown as they are in the type T
 */
export type KeyMappings<T> = { [key in keyof T]?: string };

/**
 * Alignments of the table cells
 * - `l` for **left**
 * - `r` for **right**
 * - `c` for **center**
 */
export type Alignments = "l" | "c" | "r";

/**
 * Mapping the cell's alignments of the `T` object keys
 * 
 * @example
 * ```typescript
 *  interface IUser {
 *      name: string;
 *      age: number;
 *      status: "active" | "inactive";
 *      is_an_admin: boolean;
 *  }
 *  // ...
 *  const userAlignmentMappings: AlignmentMappings<IUser> = {
 *      name: 'r',
 *      is_an_admin: 'c',
 *      age: 'l'
 *  }
 * ```
 * 
 * 
 * This will align `name` cell on the right, `is_an_admin` cells on the center
 * and `age` cell on the left
 * 
 * The keys that are not provided will have the default alignment (left)
 */
export type AlignmentMappings<T> = { [key in keyof T]?: Alignments };

/**
 * Mapping the keys of the `T` object that should be shown in the drag preview
 * 
 * @example
 * ```typescript
 *  interface IUser {
 *      name: string;
 *      age: number;
 *      status: "active" | "inactive";
 *      is_an_admin: boolean;
 *  }
 *  // ...
 *  const userDragPreviewMappings: AlignmentMappings<IUser> = {
 *      mainAttribute: 'name',
 *      otherAttributes: ['age', 'status']
 *  }
 * ```
 * 
 * 
 * This will show `name` as the header of the preview, and both `age` and `status` as **key-value** pairs 
 * 
 * The keys that are not provided will not bet shown in the preview
 */
export type DragPreviewMapping<T> = {
    mainAttribute: keyof T;
    otherAttributes: (keyof T)[];
}