### Selecting the furniture material

Furniture may have more than one material available. In this case you may select the desired material.

**Note**: Materials are associated with parts of the (or the whole) furniture.

There are three ways of changing and accessing materials:

* Using the inspector
* Using attributes in the HTML tag
* Using JavaScript

#### Using the inspector

1. Select the furniture entity in the tree on the left
2. Find the `io3d-furniture` component in the properties panel on the right
3. If more than one material is available, the available material options will appear in the panel

![](../../../img/docs/aframe-io3d-furniture-materials-inspector.png)

#### Using HTML

You can specify the material for each furniture part in the HTML attributes.

For example, the shelf below has one furniture part called `Wood`, so we use the `material_Wood` property to select the `Black Walnut Tree` material:

```html
  <a-entity io3d-furniture="id:10344b13-d981-47a0-90ac-f048ee2780a6; material_Wood:Black Walnut Tree" position="0 0 -3.2"></a-entity>
```

**Note**: Both the property names (e.g. `material_Wood`) _and_ the values (e.g. `Black Walnut Tree`) are case-sensitive.

#### Using JavaScript

You can specify and change the material using JavaScript:

```javascript
var shelf = document.querySelector('a-entity[io3d-furniture]')
var component = shelf.components['io3d-furniture']
component.data.material_Wood = 'Black Walnut Tree'
component.update()
```

### Listing available & currently selected materials

You can list all available materials by using the JavaScript API:

```javascript
var shelf = document.querySelector('a-entity[io3d-furniture]')
var component = shelf.components['io3d-furniture']
console.log(component.availableMaterials)
```

If the furniture has multiple materials available, this will log an object with the different parts of the furniture as properties. Each property contains an array of names for the different materials.

For example, the shelf may have a single piece (`Wood`) with a set of available materials:

```javascript
// console.log(component.availableMaterials)
{
  Wood: [
    Oak stained aqua blue,
    Oak stained pink pastell,
    Black Walnut Tree,
    Oak stained chalk,
    Oak stained dark warmgrey,
    Oak stained mint blue,
    Oak stained graphite grey,
    Oak stained salmon pink,
    Oak stained graphite black,
    Oak stained light warmgrey,
    Oak stained cold grey,
    European Oak
  ]
}
```

The currently selected material is available via the material properties:

```javascript
var shelf = document.querySelector('a-entity["io3d-furniture"]').components['io3d-furniture']
console.log(shelf.data.material_Wood) // "European Oak"
```

The material properties follow the naming scheme "material_" followed by the furniture part they are associated with.
