# home staging ai<br>api call and response

## call

When calling the api endpoint for the Home Staging AI there are several arguments:

argument | type | description | example
--- | --- | --- | ---
floors | `object` | functional label per floor id | `{09ff5a87-644e-4a9a-b969-cea793e21023: "dining_living"}`
modelStructure | `object` | [sceneStructure](scene-structure-specifications.md) that includes the floor and it's id, highest node has to be 'plan', all nodes have to include ids and location | 
maxResults | `number` | maximum number of results that shall be computed ( 1 - 20) | `1`
[tags](#tags) | `array`| list of descriptive tags to specify the furnishing | `["bed_2p", "bed_nightstand"]`

example:

```js
call('Autofurnishing.furnish', { arguments: {
  floors: { "09ff5a87-644e-4a9a-b969-cea793e21023": "dining_living"},
  modelStructure: {type: "plan", children: [ ... ]},
  maxResults: 2,
  tags: 'bed_2p, bed_nightstand'
})
```

### tags

The service tries to find the best fit for a specific space.
If you already know what you are looking for, you can specify tags in the query, and tell the service what to include for sure.
These tags can also be combined: `['sofa_3p', 'tv']`<br>
Being too specific, or combining the wrong tags might lead to no results

```json
{ 
  "bedroom": [
    "bed_1p",
    "bed_2p",
    "bed_nightstand",
    "table"
  ],
  "dining": [
    "table_2p",
    "table_3p",
    "table_4p",
    "table_5p",
    "table_6p",
    "table_7p",
    "table_8p",
    "table_10p"
  ],
  "homeOffice": [
    "sofa",
    "sofa_2p",
    "table"
  ],
  "living": [
    "sofa_2p",
    "sofa_3p",
    "sofa_4p",
    "sofa_5p",
    "sofa_6p",
    "sofa_7p",
    "tv"  
  ],
  "dining_living": [
    "sofa_2p",
    "sofa_3p",
    "sofa_4p",
    "sofa_5p",
    "sofa_6p",
    "sofa_7p",
    "table_10p",
    "table_4p",
    "table_5p",
    "table_6p",
    "table_7p",
    "table_8p",
    "tv"
  ]
}
```

## response

### generic furniture tags

The raw api call returns an array of furnishings per floor id.
The groups array contains the actual furniture information.
Each group can consist of one or many geometries.
To get the corresponding information you can call the products api.

```json
{
	"jsonrpc": "2.0",
	"result": {
		"errors": {},
		"furnishings": {
			"09ff5a87-644e-4a9a-b969-cea793e21023": [{
				"groups": [{
					"ry": 180.0,
					"z": 1.8849999999999996,
					"x": 1.1950000362112978,
					"src": "!5513b403-87eb-4243-8b5a-cc5cc29c617e",
					"y": 0.0
				}, {
					"ry": -2.2472720662295444E-6,
					"z": -2.124999855073614,
					"x": 1.194999985621296,
					"src": "!e422147a-95d6-4802-a598-b1e3ea96dda2",
					"y": 0.0
				}, {
					"ry": -1.4033418597069752E-14,
					"z": -0.5949999998038867,
					"x": -1.3949999636751516,
					"src": "!9b407e4b-dd75-4313-82d0-0461b2ced3c4",
					"y": 0.0
				}],
				"metaData": { ... },
				"hasPositivePrediction": true
			}]
		}
	},
	"id": "7c65f6d7-48c4-4d0e-af3d-2200dfb4e7b4"
}
```

### call products api

To check whether it's a furniture item or a group containing other furniture items, check its modelStructure from the api result. it's either `"type": "group"` or `"type": "interior"`.
In this example we have a group containing three furniture items.

```js
// remove the prefix (!) from the src id: resourceId = group.src.substring(1)
call('Product.read', { resourceId: "5513b403-87eb-4243-8b5a-cc5cc29c617e" })
// result
{
  "productDisplayName": "Generic Sofa Group 3P",
  "productResourceId": "5513b403-87eb-4243-8b5a-cc5cc29c617e",
  "modelStructure": "{ ... }",
  "categories": ["group", "living"],
  "tags": ["autofurnish", "sofa", "wallAttached", "3P"]
}
// result.modelStructure:
{
	"type": "group",
	"children": [{
		"type": "interior",
		"src": "!f12093e6-02d7-4a7f-9fb1-01f0073f7c5f",
		"children": [],
		"x": 0,
		"y": 0,
		"z": 0,
		"ry": 0,
		"materials": {}
	}, {
		"type": "interior",
		"src": "!8b5f7079-b42b-4689-9b37-3dd2946bb651",
		"z": 1.25,
		"children": [],
		"x": 0,
		"y": 0,
		"ry": 0,
		"materials": {}
	}, {
		"type": "interior",
		"src": "!b74d75f4-a228-4145-948c-d30ce69042dc",
		"z": 0.010000000000000009,
		"x": 1.58,
		"ry": 180,
		"children": [],
		"y": 0,
		"materials": {}
	}]
}
```

You can then query the metadata for each furniture item, containing bounding box and descriptive tags.

```json
{
  "productDisplayName": "Generic Sofa 3 Seater",
  "productResourceId": "f12093e6-02d7-4a7f-9fb1-01f0073f7c5f",
  "modelStructure": "{\"type\":\"interior\"}",
  "boundingPoints": {
    "min": [-1.08, 0.0, -0.41],
    "max": [1.08, 0.75, 0.43]
  },
  "boundingBox": {
    "length": 2.16,
    "width": 0.84,
    "height": 0.75
  },
  "categories": ["relaxing", "living", "office"],
  "tags": ["3 seater", "sofa", "3P"]
}
```

### list of useful tags, grouped by label

These are common tags for the generic furiture items that, in combination with the bounding box, help to match them with real products.

```json
{
  "bedroom": [
    "armchair",
    "bed",
    "coffee table",
    "double bed",
    "rectangular",
    "side table",
    "single bed",
    "table lamp",
    "wardrobe"
  ],
  "dining": [
    "chair",
    "dining table",
    "rectangular",
    "round",
    "sideboard",
    "table"
  ],
  "homeOffice": [
    "2 seater",
    "armchair",
    "coffee table",
    "rectangular",
    "shelf",
    "side table",
    "sideboard",
    "sofa"
  ],
  "living": [
    "2 seater",
    "3 seater",
    "4 seater",
    "L shaped left",
    "L shaped right",
    "TV",
    "armchair",
    "coffee table",
    "free standing lamp",
    "rectangular",
    "round",
    "shelf",
    "side table",
    "sideboard",
    "sofa"
  ]
}
```