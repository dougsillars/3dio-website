# Data Import Methods
* [IFC Import](#ifc-import)

## Ifc Import

converts ifc to sceneStructure

#### Params

| params | type    | default |
| :------------- | :------------- | :------------- |
| content | string       | none       |

#### Usage

```js
io3d.utils.services.call('Scene.importIfc', { arguments: {content: ifc}})
.then(console.log)
```

#### Returns

sceneStructure object

```json
{
  "type": "plan",
  "children": [
    {
      "type": "level",
      "children": []
    }
  ]
}
```
