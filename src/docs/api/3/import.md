# Data Import
* [IFC Import](#ifc-import)

## IFC Import

converts IFC to sceneStructure

#### Parameters

| Name | Type    | Default | Optional |
| :------------- | :------------- | :------------- | :------------- |
| content | string       | none       | false|

#### Usage

```js
io3d.utils.services.call('Scene.importIfc', { arguments: {content: ifc}})
.then(console.log)
```

#### Response

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
