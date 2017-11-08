# Scene Structure Reference

Types
* [`box`](#box)
* [`camera-bookmark`](#camera-bookmark)
* [`closet`](#closet)
* [`curtain`](#curtain)
* [`door`](#door)
* [`floor`](#floor)
* [`floorplan`](#floorplan)
* [`group`](#group)
* [`interior`](#interior)
* [`kitchen`](#kitchen)
* [`level`](#level)
* [`object`](#object)
* [`plan`](#plan)
* [`polybox`](#polybox)
* [`polyfloor`](#polyfloor)
* [`railing`](#railing)
* [`stairs`](#stairs)
* [`tag`](#tag)
* [`wall`](#wall)
* [`window`](#window)



## box

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"box"` | `false` |  | `box` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `l` | length | `number` | `1` | `false` | `0.01` |  |
| `h` | height | `number` | `1` | `false` | `0.01` |  |
| `w` | width | `number` | `1` | `false` | `0.01` |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

SceneStructure Json
```json
{
  "type": "box",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "l": 1,
  "h": 1,
  "w": 1
}```

A-Frame Component
```html
<a-entity io3d-box="l: 1; h: 1; w: 1;" position="0 0 0"></a-entity>
```


## camera-bookmark

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"camera-bookmark"` | `false` |  | `camera-bookmark` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `distance` |  | `number` |  | `false` |  |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

SceneStructure Json
```json
{
  "type": "camera-bookmark",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "distance": undefined
}```

## closet

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"closet"` | `false` |  | `closet` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `l` | length | `number` | `1.8` | `false` | `0.01` |  |
| `h` | height | `number` | `2.4` | `false` | `0.01` |  |
| `w` | width | `number` | `0.6` | `false` | `0.01` |  |
| `handleWidth` | thickness of closet door handle | `number` | `0.02` | `true` | `0.01` |  |
| `handleHeight` | height of closet door handle | `number` | `0.3` | `true` | `0.01` |  |
| `handleLength` | length of closet door handle | `number` | `0.02` | `true` | `0.01` |  |
| `doorWidth` | thickness of closet door | `number` | `0.02` | `true` | `0.01` |  |
| `baseboard` | height of baseboard | `number` | `0.1` | `true` | `0.01` |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

SceneStructure Json
```json
{
  "type": "closet",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "l": 1.8,
  "h": 2.4,
  "w": 0.6
}```

A-Frame Component
```html
<a-entity io3d-closet="l: 1.8; h: 2.4; w: 0.6;" position="0 0 0"></a-entity>
```


## curtain

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"curtain"` | `false` |  | `curtain` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `l` | length | `number` | `1.8` | `false` | `0.01` |  |
| `h` | height | `number` | `2.4` | `false` | `0.01` |  |
| `w` | thickness | `number` | `0.2` | `false` | `0.01` |  |
| `folds` | number of folds | `number` | `14` | `true` | `0.01` |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

SceneStructure Json
```json
{
  "type": "curtain",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "l": 1.8,
  "h": 2.4,
  "w": 0.2
}```

## door

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"door"` | `false` |  | `door` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `l` | length | `number` | `0.9` | `false` | `0.01` |  |
| `h` | height | `number` | `2` | `false` | `0.01` |  |
| `w` | width | `number` | `0.05` | `false` | `0.01` |  |
| `doorAngle` | door leaf opening anlge | `number` | `92` | `true` |  |  |
| `hinge` | door leaf opening direction | `string` | `"right"` | `false` |  | `right,left` |
| `side` | door leaf opening to the front or back of the wall | `string` | `"back"` | `false` |  | `front,back` |
| `v` |  | `number` | `3` | `false` |  | `3` |
| `fixLeafRatio` |  | `number` | `0.3` | `true` |  |  |
| `thresholdHeight` |  | `number` | `0.01` | `true` |  |  |
| `frameLength` | thickness of frame | `number` | `0.05` | `true` | `0.01` |  |
| `frameOffset` | frame thicker than wall | `number` | `0` | `true` |  |  |
| `leafWidth` | thickness of door leaf | `number` | `0.03` | `true` |  |  |
| `leafOffset` | z offset of door leaf | `number` | `0.005` | `true` |  |  |
| `doorType` | defines opening type | `string` | `"singleSwing"` | `false` |  | `singleSwing,doubleSwing,swingFix,swingDoubleFix,doubleSwingDoubleFix,slidingDoor,opening` |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

SceneStructure Json
```json
{
  "type": "door",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "l": 0.9,
  "h": 2,
  "w": 0.05,
  "hinge": "right",
  "side": "back",
  "v": 3,
  "doorType": "singleSwing"
}```

A-Frame Component
```html
<a-entity io3d-door="l: 0.9; h: 2; w: 0.05; hinge: right; side: back; v: 3; doorType: singleSwing;" position="0 0 0"></a-entity>
```


## floor

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"floor"` | `false` |  | `floor` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `l` | length | `number` | `4` | `false` | `0.01` |  |
| `h` | height | `number` | `0.2` | `false` | `0.01` |  |
| `w` | width | `number` | `4` | `false` | `0.01` |  |
| `hCeiling` | ceiling height | `number` | `2.4` | `false` |  |  |
| `hasCeiling` | toggle ceiling | `boolean` | `true` | `false` |  |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

SceneStructure Json
```json
{
  "type": "floor",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "l": 4,
  "h": 0.2,
  "w": 4,
  "hCeiling": 2.4,
  "hasCeiling": true
}```

A-Frame Component
```html
<a-entity io3d-floor="l: 4; h: 0.2; w: 4; hCeiling: 2.4; hasCeiling: true;" position="0 0 0"></a-entity>
```


## floorplan

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"floorplan"` | `false` |  | `floorplan` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `l` |  | `number` |  | `false` | `0.01` |  |
| `w` |  | `number` |  | `false` | `0.01` |  |
| `file` |  | `string` |  | `false` |  |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

SceneStructure Json
```json
{
  "type": "floorplan",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "l": undefined,
  "w": undefined,
  "file": undefined
}```

## group

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"group"` | `false` |  | `group` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `src` |  | `string` |  | `true` |  |  |
| `children` |  | `array` | `[]` | `true` |  |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

Possible children types
* [`interior`](#interior)
* [`object`](#object)
* [`wall`](#wall)
* [`box`](#box)
* [`group`](#group)
* [`polybox`](#polybox)

SceneStructure Json
```json
{
  "type": "group",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0
}```

## interior

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"interior"` | `false` |  | `interior` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `src` |  | `string` |  | `false` |  |  |
| `children` |  | `array` | `[]` | `true` |  |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

Possible children types
* [`interior`](#interior)
* [`object`](#object)
* [`tag`](#tag)

SceneStructure Json
```json
{
  "type": "interior",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "src": undefined
}```

A-Frame Component
```html
<a-entity io3d-furniture="" position="0 0 0"></a-entity>
```


## kitchen

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"kitchen"` | `false` |  | `kitchen` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `l` |  | `number` | `1.8` | `false` | `0.01` |  |
| `h` |  | `number` | `2.4` | `false` | `0.01` |  |
| `w` |  | `number` | `0.6` | `false` | `0.01` |  |
| `extractorType` |  | `string` | `"none"` | `true` |  | `box,pyramid,integrated,none` |
| `materials` |  | `object` |  | `true` |  |  |
| `cooktopType` |  | `string` | `"none"` | `true` |  | `electro60,electro90,none` |
| `highCabinetLeft` |  | `int` | `2` | `true` |  |  |
| `highCabinetRight` |  | `int` | `0` | `true` |  |  |
| `wallCabinet` |  | `boolean` | `true` | `true` |  |  |
| `cabinetType` |  | `string` | `"flat"` | `true` |  | `flat,style1,style2` |
| `sinkType` |  | `string` | `"none"` | `true` |  | `single,double,none` |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `ovenType` |  | `string` | `"none"` | `true` |  | `single,double,none` |

SceneStructure Json
```json
{
  "type": "kitchen",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "l": 1.8,
  "h": 2.4,
  "w": 0.6
}```

A-Frame Component
```html
<a-entity io3d-kitchen="l: 1.8; h: 2.4; w: 0.6;" position="0 0 0"></a-entity>
```


## level

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"level"` | `false` |  | `level` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `children` |  | `array` | `[]` | `true` |  |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

Possible children types
* [`box`](#box)
* [`closet`](#closet)
* [`curtain`](#curtain)
* [`floor`](#floor)
* [`floorplan`](#floorplan)
* [`group`](#group)
* [`interior`](#interior)
* [`kitchen`](#kitchen)
* [`object`](#object)
* [`polybox`](#polybox)
* [`polyfloor`](#polyfloor)
* [`railing`](#railing)
* [`stairs`](#stairs)
* [`tag`](#tag)
* [`wall`](#wall)

SceneStructure Json
```json
{
  "type": "level",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0
}```

## object

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"object"` | `false` |  | `object` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `object` |  | `string` |  | `false` |  |  |
| `sourceScale` |  | `number` |  | `true` |  |  |
| `children` |  | `array` | `[]` | `true` |  |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

Possible children types
* [`interior`](#interior)

SceneStructure Json
```json
{
  "type": "object",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "object": undefined
}```

A-Frame Component
```html
<a-entity io3d-data3d="" position="0 0 0"></a-entity>
```


## plan

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"plan"` | `false` |  | `plan` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `modelDisplayName` |  | `string` |  | `false` |  |  |
| `v` |  | `number` |  | `false` |  | `1` |
| `children` |  | `array` | `[]` | `true` |  |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

Possible children types
* [`level`](#level)
* [`camera-bookmark`](#camera-bookmark)

SceneStructure Json
```json
{
  "type": "plan",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "modelDisplayName": undefined,
  "v": undefined
}```

## polybox

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"polybox"` | `false` |  | `polybox` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `h` |  | `number` | `1` | `false` | `0.01` |  |
| `polygon` |  | `array` |  | `false` |  |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

SceneStructure Json
```json
{
  "type": "polybox",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "h": 1,
  "polygon": undefined
}```

A-Frame Component
```html
<a-entity io3d-polybox="h: 1; polygon: undefined;" position="0 0 0"></a-entity>
```


## polyfloor

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"polyfloor"` | `false` |  | `polyfloor` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `h` | height | `number` | `0.2` | `false` | `0.01` |  |
| `usage` |  | `string` |  | `true` |  |  |
| `polygon` | contour vertices - counter clock wise | `array` | `[[1.5,1.5],[1.5,-1.5],[-1.5,-1.5],[-1.5,1.5]]` | `false` |  |  |
| `hCeiling` | ceiling height | `number` | `2.4` | `false` |  |  |
| `hasCeiling` | toggle ceiling | `boolean` | `true` | `false` |  |  |
| `polygonHoles` | polygon holes | `array` |  | `true` |  |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

SceneStructure Json
```json
{
  "type": "polyfloor",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "h": 0.2,
  "polygon": [[1.5,1.5],[1.5,-1.5],[-1.5,-1.5],[-1.5,1.5]],
  "hCeiling": 2.4,
  "hasCeiling": true
}```

A-Frame Component
```html
<a-entity io3d-polyfloor="h: 0.2; polygon: [1.5,1.5,1.5,-1.5,-1.5,-1.5,-1.5,1.5]; hCeiling: 2.4; hasCeiling: true;" position="0 0 0"></a-entity>
```


## railing

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"railing"` | `false` |  | `railing` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `l` |  | `number` |  | `false` | `0.01` |  |
| `h` |  | `number` |  | `false` | `0.01` |  |
| `w` |  | `number` |  | `false` | `0.01` |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

SceneStructure Json
```json
{
  "type": "railing",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "l": undefined,
  "h": undefined,
  "w": undefined
}```

A-Frame Component
```html
<a-entity io3d-railing="l: undefined; h: undefined; w: undefined;" position="0 0 0"></a-entity>
```


## stairs

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"stairs"` | `false` |  | `stairs` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `l` |  | `number` | `4` | `false` | `0.01` |  |
| `h` |  | `number` | `2.4` | `false` | `0.01` |  |
| `w` |  | `number` | `1.2` | `false` | `0.01` |  |
| `stairType` |  | `string` | `"straight"` | `true` | `0.01` |  |
| `stepWidth` |  | `number` | `1.2` | `true` | `0.01` |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

SceneStructure Json
```json
{
  "type": "stairs",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "l": 4,
  "h": 2.4,
  "w": 1.2
}```

A-Frame Component
```html
<a-entity io3d-stairs="l: 4; h: 2.4; w: 1.2;" position="0 0 0"></a-entity>
```


## tag

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"tag"` | `false` |  | `tag` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `title` |  | `string` |  | `false` |  |  |
| `notes` |  | `string` |  | `true` |  |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

SceneStructure Json
```json
{
  "type": "tag",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "title": undefined
}```

## wall

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"wall"` | `false` |  | `wall` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `l` |  | `number` | `1` | `false` | `0.01` |  |
| `h` |  | `number` | `2.4` | `false` | `0.01` |  |
| `w` |  | `number` | `0.15` | `false` | `0.01` |  |
| `backHasBase` |  | `boolean` | `false` | `true` |  |  |
| `frontHasBase` |  | `boolean` | `false` | `true` |  |  |
| `baseHeight` |  | `number` | `0` | `true` |  |  |
| `children` |  | `array` | `[]` | `true` |  |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

Possible children types
* [`window`](#window)
* [`door`](#door)

SceneStructure Json
```json
{
  "type": "wall",
  "x": 0,
  "y": 0,
  "z": 0,
  "ry": 0,
  "l": 1,
  "h": 2.4,
  "w": 0.15
}```

A-Frame Component
```html
<a-entity io3d-wall="l: 1; h: 2.4; w: 0.15;" position="0 0 0"></a-entity>
```


## window

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `type` |  | `string` | `"window"` | `false` |  | `window` |
| `x` |  | `number` | `0` | `false` |  |  |
| `y` |  | `number` | `0.8` | `false` |  |  |
| `z` |  | `number` | `0` | `false` |  |  |
| `ry` | rotation around y axis | `number` | `0` | `false` |  |  |
| `l` |  | `number` | `1.6` | `false` | `0.01` |  |
| `h` |  | `number` | `1.5` | `false` | `0.01` |  |
| `rowRatios` |  | `array` |  | `true` |  |  |
| `columnRatios` |  | `array` |  | `true` |  |  |
| `frameLength` |  | `number` | `0.04` | `true` | `0.01` |  |
| `frameWidth` |  | `number` | `0.06` | `true` | `0.01` |  |
| `id` | unique identifier | `string` |  | `true` |  |  |
| `materials` |  | `object` |  | `true` |  |  |

SceneStructure Json
```json
{
  "type": "window",
  "x": 0,
  "y": 0.8,
  "z": 0,
  "ry": 0,
  "l": 1.6,
  "h": 1.5
}```

A-Frame Component
```html
<a-entity io3d-window="l: 1.6; h: 1.5;" position="0 0.8 0"></a-entity>
```
