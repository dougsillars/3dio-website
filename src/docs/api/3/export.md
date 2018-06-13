# API Methods
* [DXF Export](#dxf-export)
* [SVG Floor Plan Export](#svg-floor-plan-export)

## DXF export

Converts sceneStructure to [DXF 2D] Format

#### Params

| params | type    | default |
| :------------- | :------------- | :------------- |
| sceneStructure | object       | -       |
| options | object       | -      |

#### Usage

```js
// Sending API request from a browser

var message = {
  jsonrpc: '2.0',
  method: 'Scene.exportDxf',
  // Method parameters
  params: {
    sceneStructure: { … },
    options: { … }
  },
  // Random request ID for debugging purposes
  id: Math.round(Math.random()*1e20)
}

fetch(url, {
  headers: {
    'content-type': 'application/json',
    'x-publishable-key': 'YOUR_PUBLISHABLE_API_KEY'
  },
  method: 'POST',
  body: JSON.stringify(message)
})
.then(response => response.json()) // parses response to JSON
.then(function (serverResponse) {
  // Request failed (i.e. wrong request params)
  if (serverResponse.error) console.error(serverResponse.error)
  // Request successful
  else (serverResponse.result) console.log(serverResponse.result)
})
```

#### Returns

JSON-RPC with DXF string.

Layers:
```
WALL      merged wall contours
ROOM      room boundaries
OUTLINE   overall outline of enclosed space
DOOR      door opening contour
WINDOW    window opening contour
```
Format: DXF Text V12
```
0
SECTION
2
HEADER
9
$INSUNITS
70
4
0
ENDSEC
0
EOF
```

## SVG Floor Plan Export

converts sceneStructure to svg

#### Params

| params | type    | default |
| :------------- | :------------- | :------------- |
| sceneStructure | object       | -       |
| options | object       | -      |

#### Usage

* using build in 3dio method
```js
io3d.scene.exportSvg({sceneStructure})
.then(console.log)
```
* using API directly
```js
io3d.utils.services.call('Scene.exportSvg', { arguments: {sceneStructure}})
.then(console.log)
```

#### Returns

SVG string

```html
<svg>
  <g>
    <rect width="5" height="10"/>
  </g>
</svg>
```
