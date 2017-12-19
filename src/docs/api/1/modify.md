# Modify

Modify API enables you to transform and style your 3D content using scalable preprocessing in the cloud.
Play around with the [modify app](https://modify.3d.io) to test out different settings.

Namespace: `io3d.modify`

## Quota

The modify API is a part of the 3d.io Freemium API. Learn here about [Quotas](https://3d.io/docs/api/1/authentication.html)
and how to authenticate in order to use this API.


## origami

Applies a low poly, paper crafted style to the model.

| Parameter | Type | Required? | Default | Description |
| --- | --- | --- | --- | --- |
| `storageId` | String | Yes | | The storageId of the model. Valid formats: `data3d.buffer`, `obj` |
| `options`   | Object | No  | | | |
| `options.ratio` | Float | No | optimal | The ratio [0.0 to 1.0] how strong the model gets collapsed. |

[coming soon] modify settings

### Example

The following snippet sends a modify API request with storageID from a furniture.
The resulting storageId url of the transformed model gets logged upon task completion:

```javascript
  var storageId = '/535e624259ee6b0200000484/170511-1605-ti05qg/archilogic_2017-05-11_16-05-27_vNIa8r.gz.data3d.buffer'

  io3d.modify.origami(storageId, { ratio: 0.1 })
    .then(io3d.utils.processing.whenDone)
    .then(io3d.storage.getUrlFromStorageId)
    .then(console.log)
```

![origami Modifier](https://storage.3d.io/535e624259ee6b0200000484/2017-10-19_9-44_i7TkMp/modify.png)


## consolidateFaceSides

This API fixes inconsistencies in supposedly continuous surfaces. This is useful if your model is not showing up properly or has visible holes.

| Parameter | Type | Required? | Description |
| --- | --- | --- | --- |
| `storageId` | String | Yes | The storageId of the model. Valid formats: `data3d.buffer`, `obj` |

[coming soon] consolidateFaceSides settings


### Example

The following snippet sends a modify API request for a model with inconsistent face normals.
The resulting storageId url of the transformed model gets logged upon task completion:

```javascript
  var storageId = '/535e624259ee6b0200000484/171018-1032-hbth3l/archilogic_2017-10-18_10-32-30_ME3Aah.gz.data3d.buffer'
  
  io3d.modify.consolidateFaceSides(storageId)
    .then(io3d.utils.processing.whenDone)
    .then(io3d.storage.getUrlFromStorageId)
    .then(console.log)
```

![consolidateFaceSides Modifier](https://storage.3d.io/535e624259ee6b0200000484/2017-10-18_23-4_1Dg9G4/consolidate.png)

## collisionObject

This API calculates more accurate collision mesh for complex models then a commonly used primitive such as a collision box, sphere or capsule.
A collision mesh is a low-polygonal, convex model used for physics calculation. It is invisible and extremely low-detail compared to the visible model. Compared to using the high-polygonal model, the physics performance is improved greatly in the simulation and the lack of precision will not be noticed.

| Parameter | Type | Required? | Default | Description |
| --- | --- | --- | --- | --- |
| `storageId` | String | Yes | | The storageId of the model to modify. Valid formats: `data3d.buffer`, `obj`|
| `options`   | Object | No  | | |
| `options.subdivisions` | Int | No | 2 | The resolution of the collision object. Triangles: `12 * 4 ^ count` |

### Example

The following snippet sends a modify API request to get an optimal collision object for a model.
The resulting storageId url of the transformed model gets logged upon task completion:

```javascript
  var storageId = '/535e624259ee6b0200000484/170223-2130-wbapug/archilogic_2017-02-23_21-30-44_1X3O1Q.gz.data3d.buffer'
  
  io3d.modify.collisionObject(storageId, { subdivisions: 1 })
    .then(io3d.utils.processing.whenDone)
    .then(io3d.storage.getUrlFromStorageId)
    .then(console.log)
```

![collisionObject Modifier](https://storage.3d.io/535e624259ee6b0200000484/2017-11-24_12-51_VstemF/collisionObject.png)

[coming soon] collisionObject usage in physics engine example

