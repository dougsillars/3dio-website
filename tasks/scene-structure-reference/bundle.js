'use strict';

var lodash = require('lodash');

var generic = {
  params: {
    type: {
      type: 'string',
      possibleValues: [
        'box',
        'camera-bookmark',
        'closet',
        'curtain',
        'door',
        'floor',
        'floorplan',
        'group',
        'interior',
        'kitchen',
        'level',
        'plan',
        'polybox',
        'polyfloor',
        'railing',
        'stairs',
        'tag',
        'wall',
        'window',
      ],
      optional: false,
      skipInAframe: true
    },
    x: { // x position in meters
      type: 'number',
      defaultValue: 0,
      optional: false,
      skipInAframe: true
    },
    y: { // y position in meters
      type: 'number',
      defaultValue: 0,
      optional: false,
      skipInAframe: true
    },
    z: { // z position in meters
      type: 'number',
      defaultValue: 0,
      optional: false,
      skipInAframe: true
    },
    ry: { // y rotation in angle degrees
      type: 'number',
      defaultValue: 0,
      optional: false,
      skipInAframe: true,
      description: 'rotation around y axis'
    },
    children: {
      //type: 'array-with-objects',
      type: 'array',
      defaultValue: [],
      optional: true,
      skipInAframe: true
    },
    id: {
      type: 'string',
      optional: true,
      skipInAframe: true,
      description: 'unique identifier: UUID v4'
    },
    materials: {
      type: 'object',
      optional: true
    }
  }
};

var box = {
  params: {
    l: { // length in meters
      type: 'number',
      defaultValue: 1,
      optional: false,
      min: 0.01,
      description: 'length'
    },
    w: { // width in meters
      type: 'number',
      defaultValue: 1,
      optional: false,
      min: 0.01, // 1cm
      description: 'width'
    },
    h: { // height in meters
      type: 'number',
      defaultValue: 1,
      optional: false,
      min: 0.01, // 1cm
      description: 'height'
    }
  },
  childrenTypes: [],
  parentTypes: ['level'],
  aframeComponent: {
    name: 'io3d-box'
  }
};

var cameraBookmark = {
  params: {
    distance: {
      type: 'number'
    }
  },
  parentTypes: ['plan']
};

var closet = {
  params: {
    l: { // length in meters
      type: 'number',
      defaultValue: 1.8,
      optional: false,
      min: 0.01,
      description: 'length'
    },
    w: { // width in meters
      type: 'number',
      defaultValue: 0.6,
      optional: false,
      min: 0.01,
      description: 'width'
    },
    h: { // height in meters
      type: 'number',
      defaultValue: 2.4,
      optional: false,
      min: 0.01,
      description: 'height'
    },
    baseboard: {
      type: 'number',
      defaultValue: 0.1,
      optional: true,
      min: 0.01,
      description: 'height of baseboard'
    },
    doorWidth: {
      type: 'number',
      defaultValue: 0.02,
      optional: true,
      min: 0.01,
      description: 'thickness of closet door'
    },
    handleLength: {
      type: 'number',
      defaultValue: 0.02,
      optional: true,
      min: 0.01,
      description: 'length of closet door handle'
    },
    handleWidth: {
      type: 'number',
      defaultValue: 0.02,
      optional: true,
      min: 0.01,
      description: 'thickness of closet door handle'
    },
    handleHeight: {
      type: 'number',
      defaultValue: 0.3,
      optional: true,
      min: 0.01,
      description: 'height of closet door handle'
    }
  },
  childrenTypes: [],
  parentTypes: ['level'],
  aframeComponent: {
    name: 'io3d-closet'
  }
};

var column = {
  params: {
    l: { // diameter
      type: 'number',
      defaultValue: 0.2,
      optional: false,
      min: 0.01,
      description: 'length for square / diameter for circle'
    },
    h: { // height in meters
      type: 'number',
      defaultValue: 2.4,
      optional: false,
      min: 0.01,
      description: 'height'
    },
    shape: {
      type: 'string',
      defaultValue: 'square',
      optional: false,
      min: 0.01,
      possibleValues: ['square', 'circle'],
      description: 'column contour'
    }
  },
  childrenTypes: [],
  parentTypes: [
    'level',
    'group'
  ],
  aframeComponent: {
    name: 'io3d-column'
  }
};

var curtain = {
  params: {
    l: { // length in meters
      type: 'number',
      defaultValue: 1.8,
      optional: false,
      min: 0.01,
      description: 'length'
    },
    w: { // width in meters
      type: 'number',
      defaultValue: 0.2,
      optional: false,
      min: 0.01,
      description: 'thickness'
    },
    h: { // height in meters
      type: 'number',
      defaultValue: 2.4,
      optional: false,
      min: 0.01,
      description: 'height'
    },
    folds: {
      type: 'number',
      defaultValue: 14,
      optional: true,
      min: 0.01,
      description: 'number of folds'
    }
  },
  childrenTypes: [],
  parentTypes: ['level']
};

var door = {
  params: {
    v: {
      type: 'number',
      defaultValue: 3,
      possibleValues: [3],
      optional: false,
      description: 'version'
    },
    l: { // length in meters
      type: 'number',
      defaultValue: 0.9,
      optional: false,
      min: 0.01,
      description: 'length'
    },
    w: { // width in meters
      type: 'number',
      defaultValue: 0.05,
      optional: false,
      min: 0.01,
      description: 'width'
    },
    h: { // height in meters
      type: 'number',
      defaultValue: 2,
      optional: false,
      min: 0.01,
      description: 'height'
    },
    frameLength: { // in meters
      type: 'number',
      defaultValue: 0.05,
      optional: true,
      min: 0.01,
      description: 'thickness of frame'
    },
    frameOffset: { // in meters
      type: 'number',
      defaultValue: 0,
      optional: true,
      description: 'frame thicker than wall'
    },
    leafWidth: { // in meters
      type: 'number',
      defaultValue: 0.03,
      optional: true,
      description: 'thickness of door leaf'
    },
    leafOffset: { // in meters
      type: 'number',
      defaultValue: 0.005,
      optional: true,
      description: 'z offset of door leaf'
    },
    doorType: {
      type: 'string',
      defaultValue: 'singleSwing',
      optional: false,
      possibleValues: ['singleSwing', 'doubleSwing', 'swingFix', 'swingDoubleFix', 'doubleSwingDoubleFix', 'slidingDoor', 'opening'],
      description: 'defines opening type'
    },
    hinge: {
      type: 'string',
      defaultValue: 'right',
      optional: false,
      possibleValues: ['right', 'left'],
      description: 'door leaf opening direction'
    },
    side: {
      type: 'string',
      defaultValue: 'back',
      optional: false,
      possibleValues: ['front', 'back'],
      description: 'door leaf opening to the front or back of the wall'
    },
    doorAngle: { // in angle degrees
      type: 'number',
      defaultValue: 92,
      optional: true,
      description: 'door leaf opening anlge'
    },
    fixLeafRatio: { // in meters
      type: 'number',
      defaultValue: 0.3,
      optional: true
    },
    thresholdHeight: {
      type: 'number',
      defaultValue: 0.01,
      optional: true
    }
  },
  childrenTypes: [],
  parentTypes: ['wall'],
  aframeComponent: {
    name: 'io3d-door'
  }
};

var floor = {
  params: {
    w: { // width in meters
      type: 'number',
      defaultValue: 4,
      optional: false,
      min: 0.01, // 1cm
      description: 'width'
    },
    h: { // height in meters
      type: 'number',
      defaultValue: 0.2,
      optional: false,
      min: 0.01, // 1cm
      description: 'height'
    },
    l: { // length in meters
      type: 'number',
      defaultValue: 4,
      optional: false,
      min: 0.01,
      description: 'length'
    },
    hasCeiling: { // in meters
      type: 'boolean',
      defaultValue: true,
      optional: false,
      description: 'toggle ceiling'
    },
    hCeiling: { // in meters
      type: 'number',
      defaultValue: 2.4,
      optional: false,
      description: 'ceiling height'
    }
  },
  childrenTypes: [],
  parentTypes: ['level'],
  aframeComponent: {
    name: 'io3d-floor'
  }
};

var floorplan = {
  params: {
    w: { // width in meters
      type: 'number',
      optional: false,
      min: 0.01 // 1cm
    },
    l: { // length in meters
      type: 'number',
      optional: false,
      min: 0.01
    },
    file: {
      type: 'string',
      optional: false
    }
  },
  childrenTypes: [],
  parentTypes: ['level']
};

var group = {
  params: {
    src: {
      type: 'string',
      optional: true,
      skipInAframe: true
    }
  },
  childrenTypes: [
    'box',
    'column',
    'group',
    'interior',
    'object',
    'polybox',
    'wall'
  ],
  parentTypes: [
    'level',
    'group'
  ]
};

var interior = {
  params: {
    src: {
      type: 'string',
      optional: false,
      skipInAframe: true
    }
  },
  childrenTypes: ['interior', 'object', 'tag'],
  parentTypes: ['level', 'group', 'interior'],
  aframeComponent: {
    name: 'io3d-furniture'
  }
};

var kitchen = {
  params: {
    w: { // width in meters
      type: 'number',
      defaultValue: 0.6,
      optional: false,
      min: 0.01 // 1cm
    },
    h: { // height in meters
      type: 'number',
      defaultValue: 2.4,
      optional: false,
      min: 0.01 // 1cm
    },
    l: {
      type: 'number',
      defaultValue: 4.2,
      optional: false,
      min: 0.01
    },
    elementLength: {
      type: 'number',
      defaultValue: 0.6,
      optional: false,
      min: 0.01
    },
    baseBoard: {
      type: 'number',
      defaultValue: 0.1,
      optional: true,
      min: 0.01
    },
    counterHeight: {
      type: 'number',
      defaultValue: 0.9,
      optional: true,
      min: 0.01
    },
    counterThickness: {
      type: 'number',
      defaultValue: 0.03,
      optional: true,
      min: 0.01
    },
    barCounter: {
      type: 'boolean',
      defaultValue: false,
      optional: true
    },
    doorWidth: {
      type: 'number',
      defaultValue: 0.02,
      optional: true,
      min: 0.01
    },
    highCabinetLeft: {
      type: 'int',
      defaultValue: 2,
      optional: true
    },
    highCabinetRight: {
      type: 'int',
      defaultValue: 0,
      optional: true
    },
    wallCabinet: {
      type: 'boolean',
      defaultValue: true,
      optional: true
    },
    wallCabinetHeight: {
      type: 'number',
      defaultValue: 1.5,
      optional: true,
      min: 0.01
    },
    wallCabinetWidth: {
      type: 'number',
      defaultValue: 0.45,
      optional: true,
      min: 0.01
    },
    cabinetType: {
      type: 'string',
      defaultValue: 'flat',
      optional: true,
      possibleValues: ['flat', 'style1', 'style2']
    },
    sinkType: {
      type: 'string',
      defaultValue: 'single',
      optional: true,
      possibleValues: ['single', 'double', 'none']
    },
    sinkPos: {
      type: 'int',
      defaultValue: 4,
      optional: true
    },
    extractorType: {
      type: 'string',
      defaultValue: 'integrated',
      optional: true,
      possibleValues: ['box', 'pyramid', 'integrated', 'none']
    },
    ovenType: {
      type: 'string',
      defaultValue: 'single',
      optional: true,
      possibleValues: ['single', 'double', 'none']
    },
    ovenPos: {
      type: 'int',
      defaultValue: 6,
      optional: true
    },
    cooktopType: {
      type: 'string',
      defaultValue: 'electro60',
      optional: true,
      possibleValues: [
        'electro60',
        'electro90',
        'gas60',
        'gas90',
        'none'
      ]
    },
    cooktopPos: {
      type: 'int',
      defaultValue: 6,
      optional: true
    },
    microwave: {
      type: 'boolean',
      defaultValue: false,
      optional: true
    },
    microwavePos: {
      type: 'int',
      defaultValue: 1,
      optional: true
    },
    fridge: {
      type: 'boolean',
      defaultValue: false,
      optional: true
    },
    fridgePos: {
      type: 'int',
      defaultValue: 1,
      optional: true
    }
    // TODO: add all the default values
  },
  childrenTypes: [],
  parentTypes: ['level'],
  aframeComponent: {
    name: 'io3d-kitchen'
  }
};

var level = {
  params: {},
  childrenTypes: [
    'box',
    'closet',
    'column',
    'curtain',
    'floor',
    'floorplan',
    'group',
    'interior',
    'kitchen',
    'object',
    'polybox',
    'polyfloor',
    'railing',
    'stairs',
    'tag',
    'wall'
  ],
  parentTypes: ['plan']
};

var object = {
  params: {
    object: {
      type: 'string',
      optional: false,
      skipInAframe: true
    },
    sourceScale: {
      type: 'number',
      optional: true,
      skipInAframe: true
    }
  },
  childrenTypes: ['interior'],
  parentTypes: ['level'],
  aframeComponent: {
    name: 'io3d-data3d'
  }
};

var plan = {
  params: {
    modelDisplayName: {
      type: 'string',
      optional: false,
      skipInAframe: true,
      description: 'name of the scene'
    },
    v: {
      type: 'number',
      possibleValues: [1],
      optional: false,
      skipInAframe: true,
      description: 'version'
    }
  },
  childrenTypes: ['level', 'camera-bookmark'],
  parentTypes: []
};

var polybox = {
  params: {
    h: { // height in meters
      type: 'number',
      defaultValue: 1,
      optional: false,
      min: 0.01 // 1cm
    },
    polygon: {
      //type: 'array-with-arrays-with-numbers',
      type: 'array',
      aframeType: 'string',
      optional: false
    }
  },
  childrenTypes: [],
  parentTypes: ['level'],
  aframeComponent: {
    name: 'io3d-polybox'
  }
};

var polyfloor = {
  params: {
    h: { // height in meters
      type: 'number',
      defaultValue: 0.2,
      optional: false,
      min: 0.01, // 1cm
      description: 'height'
    },
    polygon: {
      //type: 'array-with-arrays-with-numbers',
      type: 'array',
      // aframeType: 'string',
      defaultValue: [[1.5,1.5], [1.5,-1.5], [-1.5,-1.5], [-1.5,1.5]],
      aframeDefault: [ 1.5,1.5,1.5,-1.5,-1.5,-1.5,-1.5,1.5 ],
      optional: false,
      description: 'outer polygon'
    },
    polygonHoles: {
      type: 'array',
      optional: true,
      description: 'polygon holes'
    },
    hasCeiling: { // in meters
      type: 'boolean',
      defaultValue: true,
      optional: false,
      description: 'toggle ceiling'
    },
    hCeiling: { // in meters
      type: 'number',
      defaultValue: 2.4,
      optional: false,
      description: 'ceiling height'
    },
    usage: { // in meters
      type: 'string',
      optional: true
    }
  },
  childrenTypes: [],
  parentTypes: ['level'],
  aframeComponent: {
    name: 'io3d-polyfloor'
  }
};

var railing = {
  params: {
    w: { // width in meters
      type: 'number',
      defaultValue: 0.05,
      optional: false,
      min: 0.01,
      description: 'width'
    },
    h: { // height in meters
      type: 'number',
      defaultValue: 1,
      optional: false,
      min: 0.01,
      description: 'height'
    },
    l: { // length in meters
      type: 'number',
      defaultValue: 1,
      optional: false,
      min: 0.01,
      description: 'length'
    },
    pailing: {
      type: 'number',
      defaultValue: 0.01,
      optional: false,
      description: 'strength of the posts'
    },
    railCount: {
      type: 'int',
      defaultValue: 2,
      optional: true,
      description: 'horizontal rail count'
    },
    segmentation: {
      type: 'string',
      defaultValue: 'distance',
      possibleValues: ['distance', 'number', 'none'],
      optional: false,
      description: 'vertical segmentation type'
    },
    segments: {
      type: 'int',
      defaultValue: 5,
      optional: true,
      description: 'number of vertical segments, for segmentation = \'number\''
    },
    segmentDistance: {
      type: 'number',
      defaultValue: 0.14,
      optional: true,
      description: 'distance between vertical segments, for segmentation = \'distance\''
    }
  },
  childrenTypes: [],
  parentTypes: ['level'],
  aframeComponent: {
    name: 'io3d-railing'
  }
};

var stairs = {
  params: {
    w: { // width in meters
      type: 'number',
      defaultValue: 1.2,
      optional: false,
      min: 0.01 // 1cm
    },
    h: { // height in meters
      type: 'number',
      defaultValue: 2.4,
      optional: false,
      min: 0.01 // 1cm
    },
    l: { // length in meters
      type: 'number',
      defaultValue: 4,
      optional: false,
      min: 0.01
    },
    stepWidth: {
      type: 'number',
      defaultValue: 1.2,
      optional: false,
      min: 0.01
    },
    stairType: {
      type: 'string',
      defaultValue: 'straight',
      optional: false,
      possibleValues: ['straight', 'straightLanding', 'lShaped', 'halfLanding', '2QuarterLanding', 'winder', 'doubleWinder', 'spiral']
    },
    treadHeight: {
      type: 'number',
      defaultValue: 0.02,
      optional: false
    },
    stepThickness: {
      type: 'number',
      defaultValue: 0.17,
      optional: false
    },
    railing: {
      type: 'string',
      defaultValue: 'right',
      optional: false,
      possibleValues: ['none', 'left', 'right', 'both']
    },
    railingType: {
      type: 'string',
      defaultValue: 'verticalBars',
      optional: false,
      possibleValues: ['verticalBars']
    }
    // TODO: add all default values
  },
  childrenTypes: [],
  parentTypes: ['level'],
  aframeComponent: {
    name: 'io3d-stairs'
  }
};

var tag = {
  params: {
    title: {
      type: 'string',
      optional: false
    },
    notes: {
      type: 'string',
      optional: true
    },
  },
  childrenTypes: [],
  parentTypes: ['level', 'interior']
};

var wall = {
  params: {
    w: { // width in meters
      type: 'number',
      defaultValue: 0.15,
      optional: false,
      min: 0.01,
      description: 'width'
    },
    h: { // height in meters
      type: 'number',
      defaultValue: 2.4,
      optional: false,
      min: 0.01,
      description: 'height'
    },
    l: { // length in meters
      type: 'number',
      defaultValue: 1,
      optional: false,
      min: 0.01,
      description: 'length'
    },
    controlLine: {
      type: 'string',
      defaultValue: 'back',
      optional: true,
      possibleValues: ['back', 'center', 'front'],
      description: 'relative position of the control line to the wall'
    },
    baseHeight: {
      type: 'number',
      defaultValue: 0,
      optional: true,
      description: 'height of the baseboard'
    },
    frontHasBase: {
      type: 'boolean',
      defaultValue: false,
      optional: true,
      description: 'show baseboard on the front'
    },
    backHasBase: {
      type: 'boolean',
      defaultValue: false,
      optional: true,
      description: 'show baseboard on the back'
    }
  },
  childrenTypes: [
    'window',
    'door'
  ],
  parentTypes: [
    'level',
    'group'
  ],
  aframeComponent: {
    name: 'io3d-wall'
  }
};

var window = {
  params: {
    y: {
      defaultValue: 0.8,
    },
    h: {
      type: 'number',
      defaultValue: 1.5,
      optional: false,
      min: 0.01,
      description: 'height'
    },
    l: {
      type: 'number',
      defaultValue: 1.6,
      optional: false,
      min: 0.01,
      description: 'length'
    },
    side: {
      type: 'string',
      defaultValue: 'back',
      optional: false,
      possibleValues: ['back', 'center', 'front'],
      description: 'relative position of the window inside the wall opening'
    },
    rowRatios: {
      //type: 'array-with-numbers',
      type: 'array',
      defaultValue: [ 1 ],
      optional: true,
      description: 'relative height of horizontal segmentation'
    },
    columnRatios: {
      //type: 'array-with-arrays-with-numbers',
      type: 'array',
      defaultValue: [ [ 1 ] ],
      optional: true,
      description: 'relative width of vertical segmentation per row'
    },
    frameLength: {
      type: 'number',
      defaultValue: 0.04,
      optional: true,
      min: 0.01,
      description: 'thickness of the frame'
    },
    frameWidth: {
      type: 'number',
      defaultValue: 0.06,
      optional: true,
      min: 0.01,
      description: 'Wwidth of the frame'
    }
  },
  childrenTypes: [],
  parentTypes: ['wall'],
  aframeComponent: {
    name: 'io3d-window'
  }
};

// import sceneStructure types
function getDefaultsByType (type) {
  var types = {
    box: box,
    'camera-bookmark': cameraBookmark,
    closet: closet,
    column: column,
    curtain: curtain,
    door: door,
    floor: floor,
    floorplan: floorplan,
    group: group,
    interior: interior,
    kitchen: kitchen,
    level: level,
    object: object,
    plan: plan,
    polybox: polybox,
    polyfloor: polyfloor,
    railing: railing,
    stairs: stairs,
    tag: tag,
    wall: wall,
    window: window
  };

  if (type && types[type]) {
    return {
      params: lodash.defaults({}, generic.params, types[type].params),
      childrenTypes: types[type].childrenTypes
    }
  } else {
    var typeSpecificValidations = {};

    Object.keys(types).forEach(function (key) {
      let _generic = lodash.cloneDeep(generic);
      _generic.params.type.defaultValue = key;
      _generic.params.type.possibleValues = [key];
      typeSpecificValidations[key] = {
        params: lodash.defaultsDeep({}, types[key].params, _generic.params),
        childrenTypes: types[key].childrenTypes,
        parentTypes: types[key].parentTypes
      };
      if (types[key].aframeComponent) typeSpecificValidations[key].aframeComponent = types[key].aframeComponent;
      typeSpecificValidations[key].params = sortObject(typeSpecificValidations[key].params);
    });
    return typeSpecificValidations
  }
}

function sortObject(obj) {
  return Object.keys(obj)
    .sort((a, b) => {
      let order = ['w','h','l','ry', 'z', 'y', 'x', 'type'];
      let indA = order.indexOf(a);
      let indB = order.indexOf(b);
      if (indA > indB) return -1
      else if (indA < indB) return 1
      else return 0
    })
    .reduce((a, v) => {
      a[v] = obj[v];
      return a;
    }, {})
}

const fs = require('fs');
const types = getDefaultsByType();
const REF_PATH = '../../src/docs/api/1/scene-structure-reference.md';

console.log(types.box);

var docStr = '';
docStr += '<!-- sceneStructure reference created automatically -->\n<!-- do not edit manually -->\n<!-- check ./tasks/scene-structure-reference/README.md -->';
docStr += '\n# Scene Structure Reference\n\n';

var indexStr = 'Types';
Object.keys(types).forEach(t => {
  indexStr += `\n* [\`${t}\`](#${t})`;
});

docStr += indexStr + '\n\n';

var tableStr =
`| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|`;

Object.keys(types).forEach(t => {
  let data = types[t];
  let params = data.params;
  let ct = data.childrenTypes;
  let pt = data.parentTypes;
  let paramKeys = Object.keys(params);
  let typeStr = `\n\n## ${t}\n\n${tableStr}`;
  let sampleParamStr = '';
  let sampleAframeStr = '';
  paramKeys.forEach(p => {
    // skip children param if element has no children
    if (p !== 'children' || (ct && ct.length)) {
      // format param fields
      let description = params[p].description || '';
      let type = params[p].type;
      let defaultValue = (params[p].defaultValue !== undefined ? '\`' + JSON.stringify(params[p].defaultValue) + '\`' : '');
      let optional = params[p].optional || false;
      let min = (params[p].min ? '\`' + params[p].min + '\`' : '');
      let possibleValues = ''; //(params[p].possibleValues ? '\`' + params[p].possibleValues + '\`' : '')
      if (params[p].possibleValues) possibleValues = params[p].possibleValues.map(v => '\`' + JSON.stringify(v) + '\`').join(' ');
      // create md table str
      typeStr += `\n| \`${p}\` | ${description} | \`${type}\` | ${defaultValue} | \`${optional}\` | ${min} | ${possibleValues} |`;
    }
    if (!params[p].optional) {
      let quot = params[p].type === 'string';
      sampleParamStr += `,\n  "${p}": ${JSON.stringify(params[p].defaultValue)}`;
      if (!params[p].skipInAframe) sampleAframeStr += (`${p}: ${JSON.stringify(params[p].aframeDefault || params[p].defaultValue)}; `).replace(/"/gm, '');
    }
  });
  if (pt && pt.length) {
    typeStr += `\n\nPossible parent types`;
    pt.forEach(p => {
      typeStr += `\n* [\`${p}\`](#${p})`;
    });
  }
  if (ct && ct.length) {
    typeStr += `\n\nPossible children types`;
    ct.forEach(c => {
      typeStr += `\n* [\`${c}\`](#${c})`;
    });
  }
  let sampleStr =
`\n\nSceneStructure Json\n\`\`\`json
{${sampleParamStr.substring(1)}
}\`\`\``;
  let aframeStr = '';
  if (data.aframeComponent) {
    console.log('aframe');
    aframeStr =
`\n\nA-Frame Component
\`\`\`html
<a-entity ${data.aframeComponent.name}="${sampleAframeStr.trim()}" position="0 ${data.params.y.defaultValue} 0"></a-entity>
\`\`\`
`;
  }
  //typeStr.replace(/``/gm,'')
  typeStr += sampleStr + aframeStr;
  docStr += typeStr;
});

fs.writeFile(REF_PATH, docStr, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('file saved');
});

//console.log(docStr)
