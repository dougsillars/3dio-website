# Scene API

The scene API allows users to access Archilogic's scene structure and for instance convert it to A-Frame Elements.

Content:
* [Scene Id](#scene-id)
* [Scene Structure](#scene-structure)
* [`getStructure(sceneId)`](#get-structure)
* [`getAframeElements(sceneId)`](#get-a-frame-elements)
* [`getAframeElementsFromSceneStructure(sceneStructure)`](#get-a-frame-elements-from-scene-structure)
* [`getSceneStructureFromAframeElements(elements)`](#get-scene-structure-from-a-frame-elements)
* [`normalizeSceneStructure(sceneStructure)`](#normalize-scene-structure)
* [`validateSceneStructure(sceneStructure)`](#validate-scene-structure)
* [`getViewerUrl(sceneId)`](#get-viewer-url)
* [`exportSvg(sceneStructure)`](#export-svg)

## Scene Id

Each scene has it's unique id which is generally refered to as `sceneId`.

You can get the `sceneId` of an Archilogic model for instance from the url:
```bash
https://spaces.archilogic.com/3d/!5dc58829-ecd3-4b33-bdaf-f798b7edecd4`
                                 |-------------scene-id---------------|
```
```bash
https://spaces.archilogic.com/3d/archilogic/zgkeizhc?modelResourceId=5dc58829-ecd3-4b33-bdaf-f798b7edecd4
                                                                    |-------------scene-id---------------|
```
## Scene Structure

The scene structure is a JSON based scene format used in the [Archilogic editor](https://spaces.archilogic.com/3d) to describe scenes.

example of a simple scene structure snippet describing a furniture item:
```json
{
  "type": "interior",
  "x": 3.4,
  "y": 0,
  "z": 1.4,
  "src": "!3aff54e2-fdff-44a3-9646-f2db1ea3bbfc"
}
```
Take a look at the [Scene Structure Specifications](scene-structure-specifications.md)


### Get Structure

Use `io3d.scene.getStructure(sceneId)` to get the sceneStructure of an Archilogic model

| input | type | return |
| --- | --- | --- |
| sceneId | `string` | Promise => sceneStructure [`json`] |
```js
io3d.scene.getStructure(sceneId)
.then(console.log)
```

this returns an object with the following hierarchy:
```json
{
  "type": "plan",
  "children": [
    {
      "type": "level",
      "children": [
         {
           "type": "interior"
         }
         // all elements are children of the level
      ]
    }
  ]
}
```

### Get A-Frame Elements

`io3d.scene.getAframeElements(sceneId)` is a wrapper function for [getStructure()](#get-structure) and [getAframeElementsFromSceneStructure()](#get-a-frame-elements-from-scene-structure)<br>
The function returns an A-Frame DOM element with children nodes according to the hierarchy of the scene structure.

| input | type | return |
| --- | --- | --- |
| sceneId | `string` | Promise => A-Frame DOM elements |
To add an Archiogic scene to your A-Frame scene you can do:
```js
const sceneEl = document.querySelector('a-scene')
io3d.scene.getAframeElements(sceneId)
  .then(elements => {
    // this will give us two elements
    // The first is the actual scene according to the scene structure hierarchy
    // The second is the camera with potential waypoints that where defined in the scene structure
    // you can leverage the waypoints using our A-Frame tour component
    elements.forEach((el) => {
      // add elements to the scene
      sceneEl.appendChild(el)
    })
  })
```

### Get A-Frame Elements From Scene Structure

`io3d.scene.getAframeElementsFromSceneStructure(sceneStructure)` converts scene structure into A-Frame DOM elements
This is needed when working for instance with our [Home Staging AI](home-staging-ai.md)
The sample converts a furniture item described in scene structure into an A-Frame entity using the [io3d-furniture](aframe-components.html#io3d-furniture) component

| input | type | return |
| --- | --- | --- |
| sceneStructure | `json` | A-Frame DOM elements |
```js
const element3d = {
  "type": "interior",
  "x": 3.4,
  "y": 0,
  "z": 1.4,
  "src": "!3aff54e2-fdff-44a3-9646-f2db1ea3bbfc"
}
const sceneEl = document.querySelector('a-scene')

const element = io3d.scene.getAframeElementsFromSceneStructure(element3d)
sceneEl.appendChild(element)
```
result:
```html
<a-scene>
    <a-entity io3d-furniture="id:3aff54e2-fdff-44a3-9646-f2db1ea3bbfc" position="3.4 0 1.4"></a-entity>
</a-scene>
```

### Get Scene Structure From A-Frame Elements

`io3d.scene.getSceneStructureFromAframeElements(elements)` converts A-Frame DOM elements to scene structure
This is needed when working for instance with the [Replace Furniture Method](home-staging-ai.md#example-replacing-single-furniture-element)
The sample converts a furniture item described in scene structure into an A-Frame entity using the [io3d-furniture](aframe-components.html#io3d-furniture) component

| input | type | return |
| --- | --- | --- |
| A-Frame DOM elements | `DOM elements` | sceneStructure [`json`] |
```html
<a-scene>
    <a-entity io3d-furniture="id:3aff54e2-fdff-44a3-9646-f2db1ea3bbfc" position="3.4 0 1.4"></a-entity>
</a-scene>

<script>
  const el = document.querySelector('[io3d-furniture]')
  const sceneStructure = io3d.scene.getSceneStructureFromAframeElements(el)

  console.log(sceneStructure)

  // result:
  // {
  //   "type": "interior",
  //   "x": 3.4,
  //   "y": 0,
  //   "z": 1.4,
  //   "src": "!3aff54e2-fdff-44a3-9646-f2db1ea3bbfc"
  // }
</script>
```

### Normalize scene structure

With `io3d.scene.normalizeSceneStructure(sceneStructure)` you make sure to always have a scene structure object that contains all the necessary information.
This includes:
* adding default values if not specified
* adding a uuid to each element if not existant

| input | type | return |
| --- | --- | --- |
| sceneStructure | `json` | Promise => sceneStructure [`json`] |
```
const element3d = {
  "type": "interior",
  "x": 3.4,
  "z": 1.4,
  "src": "!3aff54e2-fdff-44a3-9646-f2db1ea3bbfc"
}
io3d.scene.normalizeSceneStructure(element3d)
  .then(result => {
    console.log(result)
  })
```
```bash
{
  "type": "interior",
  "x": 3.4,
  "y": 0,
  "z": 1.4,
  "ry": 0,
  "children": [],
  "id": "2140a713-2ac5-483a-a278-d45cfab1d68c",
  "src": "!3aff54e2-fdff-44a3-9646-f2db1ea3bbfc"
}
```

### Validate scene structure

`io3d.scene.validateSceneStructure(sceneStructure)` allows you to validate a scene structure object.<br>
This is useful when converting third party formats into scene structure or creating scene structure on the fly like in this [Augmented Reality Demo](https://github.com/archilogic-com/3dio-js/tree/master/examples-browser/staging/stage-room-ar)

| input | type | return |
| --- | --- | --- |
| sceneStructure | `json` | Promise => validation result [`json`] |
```js
io3d.scene.validateSceneStructure({type:"foo"}).then(console.log)
```
```bash
{
	"isValid": false,
	"warnings": [],
	"errors": [{
		"message": "Parameter "type" of value "foo" is not supported",
		"item": {
			"type": "foo"
		},
		"code": 4
	}]
}
```
Error codes:
```bash
  OK: 0,
  MIN_VALUE: 1,
  MAX_VALUE: 2,
  MISSED: 3,
  NOT_SUPPOPRTED: 4,
  VALUE: 5,
  TYPE: 6,
  CHILDREN_TYPE: 7
```

### Get viewer url

returns Archilogic Viewer Url from a scene Id

| input | type | return |
| --- | --- | --- |
| sceneId | `string` | viewer url [`string`] |
```js
io3d.scene.getViewerUrl('5dc58829-ecd3-4b33-bdaf-f798b7edecd4')
```
returns

https://spaces.archilogic.com/3d/!5dc58829-ecd3-4b33-bdaf-f798b7edecd4

### Export svg

converts sceneStructure into a 2D svg floor plan

| input | type | return |
| --- | --- | --- |
| sceneStructure | `json` | Promise => `{ content: svgString }` |
```javascript
io3d.config({
  // Replace this with your own publishable key for use on your own domain
  // More info: https://3d.io/docs/api/1/get-started-browser.html#using-publishable-api-keys
  publishableApiKey: 'YOUR_PUBLISHABLE_API_KEY'
})

// sceneId: reference to an Archilogic scene
// get your own via https://spaces.archilogic.com/order or https://spaces.archilogic.com/3d
const sceneId = '27fbe564-6cf4-48aa-8a19-6f0fb6cca7c4'

io3d.scene.exportSvg(sceneStructure)
.then(result => {
  document.body.appendChild(result.content)
})
```

