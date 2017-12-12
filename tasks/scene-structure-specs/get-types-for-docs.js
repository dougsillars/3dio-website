// import sceneStructure types
import generic from '../../../3dio-js/src/scene/structure/validate/generic'
import box from '../../../3dio-js/src/scene/structure/validate/by-type/box.js'
import cameraBookmark from '../../../3dio-js/src/scene/structure/validate/by-type/camera-bookmark.js'
import closet from '../../../3dio-js/src/scene/structure/validate/by-type/closet.js'
import column from '../../../3dio-js/src/scene/structure/validate/by-type/column.js'
import curtain from '../../../3dio-js/src/scene/structure/validate/by-type/curtain.js'
import door from '../../../3dio-js/src/scene/structure/validate/by-type/door.js'
import floor from '../../../3dio-js/src/scene/structure/validate/by-type/floor.js'
import floorplan from '../../../3dio-js/src/scene/structure/validate/by-type/floorplan.js'
import group from '../../../3dio-js/src/scene/structure/validate/by-type/group'
import interior from '../../../3dio-js/src/scene/structure/validate/by-type/interior'
import kitchen from '../../../3dio-js/src/scene/structure/validate/by-type/kitchen.js'
import level from '../../../3dio-js/src/scene/structure/validate/by-type/level.js'
import object from '../../../3dio-js/src/scene/structure/validate/by-type/object.js'
import plan from '../../../3dio-js/src/scene/structure/validate/by-type/plan.js'
import polybox from '../../../3dio-js/src/scene/structure/validate/by-type/polybox.js'
import polyfloor from '../../../3dio-js/src/scene/structure/validate/by-type/polyfloor.js'
import railing from '../../../3dio-js/src/scene/structure/validate/by-type/railing.js'
import stairs from '../../../3dio-js/src/scene/structure/validate/by-type/stairs.js'
import tag from '../../../3dio-js/src/scene/structure/validate/by-type/tag.js'
import wall from '../../../3dio-js/src/scene/structure/validate/by-type/wall.js'
import window from '../../../3dio-js/src/scene/structure/validate/by-type/window.js'

import { defaults, defaultsDeep, cloneDeep } from 'lodash'

export default function getDefaultsByType (type) {
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
  }

  if (type && types[type]) {
    return {
      params: defaults({}, generic.params, types[type].params),
      childrenTypes: types[type].childrenTypes
    }
  } else {
    var typeSpecificValidations = {}

    Object.keys(types).forEach(function (key) {
      let _generic = cloneDeep(generic)
      _generic.params.type.defaultValue = key
      _generic.params.type.possibleValues = [key]
      typeSpecificValidations[key] = {
        params: defaultsDeep({}, types[key].params, _generic.params),
        childrenTypes: types[key].childrenTypes,
        parentTypes: types[key].parentTypes,
        description: types[key].description
      }
      if (types[key].aframeComponent) typeSpecificValidations[key].aframeComponent = types[key].aframeComponent
      typeSpecificValidations[key].params = sortObject(typeSpecificValidations[key].params)
    })
    return typeSpecificValidations
  }
}

function fixOrder(obj) {
  var sortable = [];
  for (var param in obj) {
      sortable.push([param, obj[param]]);
  }
}

function sortObject(obj) {
  return Object.keys(obj)
    .sort((a, b) => {
      let order = ['w','h','l','ry', 'z', 'y', 'x', 'type']
      let indA = order.indexOf(a)
      let indB = order.indexOf(b)
      if (indA > indB) return -1
      else if (indA < indB) return 1
      else return 0
    })
    .reduce((a, v) => {
      a[v] = obj[v];
      return a;
    }, {})
}
