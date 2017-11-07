# Scene Structure Reference

Index
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
| `w` |  | `number` | `1` | `false` | `0.01` | `` |
| `h` |  | `number` | `1` | `false` | `0.01` | `` |
| `l` |  | `number` | `1` | `false` | `0.01` | `` |

SceneStructure Json
```json
{
  "type": "box",
  "w": 1,
  "h": 1,
  "l": 1
}
```

A-Frame Component
```html
<a-entity io3d-box="w: 1; h: 1; l: 1;"></a-entity>
```


## camera-bookmark

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `distance` |  | `number` | `` | `false` | `` | `` |

SceneStructure Json
```json
{
  "type": "camera-bookmark",
  "distance": undefined
}
```

## closet

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `w` |  | `number` | `0.6` | `false` | `0.01` | `` |
| `h` |  | `number` | `2.4` | `false` | `0.01` | `` |
| `l` |  | `number` | `1.8` | `false` | `0.01` | `` |
| `baseboard` |  | `number` | `0.1` | `true` | `0.01` | `` |
| `doorWidth` |  | `number` | `0.02` | `true` | `0.01` | `` |
| `handleLength` |  | `number` | `0.02` | `true` | `0.01` | `` |
| `handleWidth` |  | `number` | `0.02` | `true` | `0.01` | `` |
| `handleHeight` |  | `number` | `0.3` | `true` | `0.01` | `` |

SceneStructure Json
```json
{
  "type": "closet",
  "w": 0.6,
  "h": 2.4,
  "l": 1.8
}
```

A-Frame Component
```html
<a-entity io3d-closet="w: 0.6; h: 2.4; l: 1.8;"></a-entity>
```


## curtain

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `w` |  | `number` | `0.2` | `false` | `0.01` | `` |
| `h` |  | `number` | `2.4` | `false` | `0.01` | `` |
| `l` |  | `number` | `1.8` | `false` | `0.01` | `` |
| `folds` |  | `number` | `14` | `true` | `0.01` | `` |

SceneStructure Json
```json
{
  "type": "curtain",
  "w": 0.2,
  "h": 2.4,
  "l": 1.8
}
```

## door

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `v` |  | `number` | `3` | `false` | `` | `3` |
| `w` |  | `number` | `0.05` | `false` | `0.01` | `` |
| `h` |  | `number` | `2` | `false` | `0.01` | `` |
| `l` |  | `number` | `0.9` | `false` | `0.01` | `` |
| `frameLength` |  | `number` | `0.05` | `true` | `0.01` | `` |
| `frameOffset` |  | `number` | `0` | `true` | `` | `` |
| `leafWidth` |  | `number` | `0.03` | `true` | `` | `` |
| `leafOffset` |  | `number` | `0.005` | `true` | `` | `` |
| `doorType` |  | `string` | `"singleSwing"` | `false` | `` | `singleSwing,doubleSwing,swingFix,swingDoubleFix,doubleSwingDoubleFix,slidingDoor,opening` |
| `fixLeafRatio` |  | `number` | `0.3` | `true` | `` | `` |
| `doorAngle` |  | `number` | `92` | `true` | `` | `` |
| `hinge` |  | `string` | `"right"` | `false` | `` | `right,left` |
| `side` |  | `string` | `"back"` | `false` | `` | `front,back` |
| `thresholdHeight` |  | `number` | `0.01` | `true` | `` | `` |

SceneStructure Json
```json
{
  "type": "door",
  "v": 3,
  "w": 0.05,
  "h": 2,
  "l": 0.9,
  "doorType": "singleSwing",
  "hinge": "right",
  "side": "back"
}
```

A-Frame Component
```html
<a-entity io3d-door="v: 3; w: 0.05; h: 2; l: 0.9; doorType: "singleSwing"; hinge: "right"; side: "back";"></a-entity>
```


## floor

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `w` | width | `number` | `4` | `false` | `0.01` | `` |
| `h` | height | `number` | `0.2` | `false` | `0.01` | `` |
| `l` | length | `number` | `4` | `false` | `0.01` | `` |
| `hasCeiling` | toggle ceiling | `boolean` | `true` | `false` | `` | `` |
| `hCeiling` | ceiling height | `number` | `2.4` | `false` | `` | `` |

SceneStructure Json
```json
{
  "type": "floor",
  "w": 4,
  "h": 0.2,
  "l": 4,
  "hasCeiling": true,
  "hCeiling": 2.4
}
```

A-Frame Component
```html
<a-entity io3d-floor="w: 4; h: 0.2; l: 4; hasCeiling: true; hCeiling: 2.4;"></a-entity>
```


## floorplan

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `w` |  | `number` | `` | `false` | `0.01` | `` |
| `l` |  | `number` | `` | `false` | `0.01` | `` |
| `file` |  | `string` | `` | `false` | `` | `` |

SceneStructure Json
```json
{
  "type": "floorplan",
  "w": undefined,
  "l": undefined,
  "file": undefined
}
```

## group

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `src` |  | `string` | `` | `true` | `` | `` |

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
  "type": "group"
}
```

## interior

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `src` |  | `string` | `` | `false` | `` | `` |

Possible children types
* [`interior`](#interior)
* [`object`](#object)
* [`tag`](#tag)

SceneStructure Json
```json
{
  "type": "interior",
  "src": undefined
}
```

A-Frame Component
```html
<a-entity io3d-furniture="src: undefined;"></a-entity>
```


## kitchen

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `w` |  | `number` | `0.6` | `false` | `0.01` | `` |
| `h` |  | `number` | `2.4` | `false` | `0.01` | `` |
| `l` |  | `number` | `1.8` | `false` | `0.01` | `` |
| `highCabinetLeft` |  | `int` | `2` | `true` | `` | `` |
| `highCabinetRight` |  | `int` | `0` | `true` | `` | `` |
| `wallCabinet` |  | `boolean` | `true` | `true` | `` | `` |
| `cabinetType` |  | `string` | `"flat"` | `true` | `` | `flat,style1,style2` |
| `sinkType` |  | `string` | `"none"` | `true` | `` | `single,double,none` |
| `extractorType` |  | `string` | `"none"` | `true` | `` | `box,pyramid,integrated,none` |
| `ovenType` |  | `string` | `"none"` | `true` | `` | `single,double,none` |
| `cooktopType` |  | `string` | `"none"` | `true` | `` | `electro60,electro90,none` |

SceneStructure Json
```json
{
  "type": "kitchen",
  "w": 0.6,
  "h": 2.4,
  "l": 1.8
}
```

A-Frame Component
```html
<a-entity io3d-kitchen="w: 0.6; h: 2.4; l: 1.8;"></a-entity>
```


## level

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|

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
  "type": "level"
}
```

## object

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `object` |  | `string` | `` | `false` | `` | `` |
| `sourceScale` |  | `number` | `` | `true` | `` | `` |

Possible children types
* [`interior`](#interior)

SceneStructure Json
```json
{
  "type": "object",
  "object": undefined
}
```

A-Frame Component
```html
<a-entity io3d-data3d="object: undefined;"></a-entity>
```


## plan

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `modelDisplayName` |  | `string` | `` | `false` | `` | `` |
| `v` |  | `number` | `` | `false` | `` | `1` |

Possible children types
* [`level`](#level)
* [`camera-bookmark`](#camera-bookmark)

SceneStructure Json
```json
{
  "type": "plan",
  "modelDisplayName": undefined,
  "v": undefined
}
```

## polybox

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `h` |  | `number` | `1` | `false` | `0.01` | `` |
| `polygon` |  | `array` | `` | `false` | `` | `` |

SceneStructure Json
```json
{
  "type": "polybox",
  "h": 1,
  "polygon": undefined
}
```

A-Frame Component
```html
<a-entity io3d-polybox="h: 1; polygon: undefined;"></a-entity>
```


## polyfloor

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `h` | height | `number` | `0.2` | `false` | `0.01` | `` |
| `polygon` | outer polygon | `array` | `[1.5,1.5,1.5,-1.5,-1.5,-1.5,-1.5,1.5]` | `false` | `` | `` |
| `polygonHoles` | polygon holes | `array` | `` | `true` | `` | `` |
| `hasCeiling` | toggle ceiling | `boolean` | `true` | `false` | `` | `` |
| `hCeiling` | ceiling height | `number` | `2.4` | `false` | `` | `` |
| `usage` |  | `string` | `` | `true` | `` | `` |

SceneStructure Json
```json
{
  "type": "polyfloor",
  "h": 0.2,
  "polygon": [1.5,1.5,1.5,-1.5,-1.5,-1.5,-1.5,1.5],
  "hasCeiling": true,
  "hCeiling": 2.4
}
```

A-Frame Component
```html
<a-entity io3d-polyfloor="h: 0.2; polygon: [1.5,1.5,1.5,-1.5,-1.5,-1.5,-1.5,1.5]; hasCeiling: true; hCeiling: 2.4;"></a-entity>
```


## railing

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `w` |  | `number` | `` | `false` | `0.01` | `` |
| `h` |  | `number` | `` | `false` | `0.01` | `` |
| `l` |  | `number` | `` | `false` | `0.01` | `` |

SceneStructure Json
```json
{
  "type": "railing",
  "w": undefined,
  "h": undefined,
  "l": undefined
}
```

A-Frame Component
```html
<a-entity io3d-railing="w: undefined; h: undefined; l: undefined;"></a-entity>
```


## stairs

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `w` |  | `number` | `1.2` | `false` | `0.01` | `` |
| `h` |  | `number` | `2.4` | `false` | `0.01` | `` |
| `l` |  | `number` | `4` | `false` | `0.01` | `` |
| `stepWidth` |  | `number` | `1.2` | `true` | `0.01` | `` |
| `stairType` |  | `string` | `"straight"` | `true` | `0.01` | `` |

SceneStructure Json
```json
{
  "type": "stairs",
  "w": 1.2,
  "h": 2.4,
  "l": 4
}
```

A-Frame Component
```html
<a-entity io3d-stairs="w: 1.2; h: 2.4; l: 4;"></a-entity>
```


## tag

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `title` |  | `string` | `` | `false` | `` | `` |
| `notes` |  | `string` | `` | `true` | `` | `` |

SceneStructure Json
```json
{
  "type": "tag",
  "title": undefined
}
```

## wall

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `w` |  | `number` | `0.15` | `false` | `0.01` | `` |
| `h` |  | `number` | `2.4` | `false` | `0.01` | `` |
| `l` |  | `number` | `1` | `false` | `0.01` | `` |
| `baseHeight` |  | `number` | `0` | `true` | `` | `` |
| `frontHasBase` |  | `boolean` | `false` | `true` | `` | `` |
| `backHasBase` |  | `boolean` | `false` | `true` | `` | `` |

Possible children types
* [`window`](#window)
* [`door`](#door)

SceneStructure Json
```json
{
  "type": "wall",
  "w": 0.15,
  "h": 2.4,
  "l": 1
}
```

A-Frame Component
```html
<a-entity io3d-wall="w: 0.15; h: 2.4; l: 1;"></a-entity>
```


## window

| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|
| `h` |  | `number` | `1.5` | `false` | `0.01` | `` |
| `l` |  | `number` | `` | `false` | `0.01` | `` |
| `rowRatios` |  | `array` | `` | `true` | `` | `` |
| `columnRatios` |  | `array` | `` | `true` | `` | `` |
| `frameLength` |  | `number` | `0.04` | `true` | `0.01` | `` |
| `frameWidth` |  | `number` | `0.06` | `true` | `0.01` | `` |
| `y` |  | `undefined` | `0.9` | `false` | `` | `` |

SceneStructure Json
```json
{
  "type": "window",
  "h": 1.5,
  "l": undefined,
  "y": 0.9
}
```

A-Frame Component
```html
<a-entity io3d-window="h: 1.5; l: undefined; y: 0.9;"></a-entity>
```
