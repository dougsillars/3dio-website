import getDefaults from './get-types-for-docs'

const fs = require('fs')
const types = getDefaults()
const REF_PATH = '../../src/docs/api/1/scene-structure-reference.md'

console.log(types.box)

var docStr = ''
docStr += '<!-- sceneStructure reference created automatically -->\n<!-- do not edit manually -->\n<!-- check ./tasks/scene-structure-reference/README.md -->'
docStr += '\n# Scene Structure Reference\n\n'

var indexStr = 'Types'
Object.keys(types).forEach(t => {
  indexStr += `\n* [\`${t}\`](#${t})`
})

docStr += indexStr + '\n\n'

var tableStr =
`| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|`

Object.keys(types).forEach(t => {
  let data = types[t]
  let params = data.params
  let ct = data.childrenTypes
  let pt = data.parentTypes
  let paramKeys = Object.keys(params)
  let typeStr = `\n\n## ${t}\n\n${tableStr}`
  let sampleParamStr = ''
  let sampleAframeStr = ''
  paramKeys.forEach(p => {
    // skip children param if element has no children
    if (p !== 'children' || (ct && ct.length)) {
      // format param fields
      let description = params[p].description || ''
      let type = params[p].type
      let defaultValue = (params[p].defaultValue !== undefined ? '\`' + JSON.stringify(params[p].defaultValue) + '\`' : '')
      let optional = params[p].optional || false
      let min = (params[p].min ? '\`' + params[p].min + '\`' : '')
      let possibleValues = '' //(params[p].possibleValues ? '\`' + params[p].possibleValues + '\`' : '')
      if (params[p].possibleValues) possibleValues = params[p].possibleValues.map(v => '\`' + JSON.stringify(v) + '\`').join(' ')
      // create md table str
      typeStr += `\n| \`${p}\` | ${description} | \`${type}\` | ${defaultValue} | \`${optional}\` | ${min} | ${possibleValues} |`
    }
    if (!params[p].optional) {
      let quot = params[p].type === 'string'
      sampleParamStr += `,\n  "${p}": ${JSON.stringify(params[p].defaultValue)}`
      if (!params[p].skipInAframe) sampleAframeStr += (`${p}: ${JSON.stringify(params[p].aframeDefault || params[p].defaultValue)}; `).replace(/"/gm, '')
    }
  })
  if (pt && pt.length) {
    typeStr += `\n\nPossible parent types`
    pt.forEach(p => {
      typeStr += `\n* [\`${p}\`](#${p})`
    })
  }
  if (ct && ct.length) {
    typeStr += `\n\nPossible children types`
    ct.forEach(c => {
      typeStr += `\n* [\`${c}\`](#${c})`
    })
  }
  let sampleStr =
`\n\nSceneStructure Json\n\`\`\`json
{${sampleParamStr.substring(1)}
}\`\`\``
  let aframeStr = ''
  if (data.aframeComponent) {
    console.log('aframe')
    aframeStr =
`\n\nA-Frame Component
\`\`\`html
<a-entity ${data.aframeComponent.name}="${sampleAframeStr.trim()}" position="0 ${data.params.y.defaultValue} 0"></a-entity>
\`\`\`
`
  }
  //typeStr.replace(/``/gm,'')
  typeStr += sampleStr + aframeStr
  docStr += typeStr
})

fs.writeFile(REF_PATH, docStr, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('file saved')
})

//console.log(docStr)
