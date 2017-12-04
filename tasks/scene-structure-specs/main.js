import getDefaults from './get-types-for-docs'

const fs = require('fs')
const types = getDefaults()
const REF_PATH = './src/docs/api/1/scene-structure-specifications.md'
const IMG_PATH = './src/img/docs/scene-structure-specs/'
const INTRO_PATH = './tasks/scene-structure-specs/intro.md'

function generateReference() {
  // global md string kickoff
  let docStr = ''
  // get intro
  docStr += fs.readFileSync(INTRO_PATH)

  // create document index
  var indexStr = '## Types'
  Object.keys(types).forEach(t => {
    indexStr += `\n* [\`${t}\`](#${t})`
  })
  docStr += indexStr + '\n\n'

  // header template for params table
  var tableStr =
`| param | description | type | default | optional | min | values |
|---|---|---|---|---|---|---|`

  // iterate through types
  Object.keys(types).forEach(t => {
    let data = types[t]
    let params = data.params
    let ct = data.childrenTypes
    let pt = data.parentTypes
    let paramKeys = Object.keys(params)
    let descriptStr = data.description || ''
    let imgStr = getImage(t)
    // add title and table
    let typeStr = `\n\n## ${t}\n${descriptStr}${imgStr}\n\n${tableStr}`
    // code samples
    let sampleParamStr = ''
    let sampleAframeStr = ''
    // iterate through type params
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
        // add md table content
        typeStr += `\n| \`${p}\` | ${description} | \`${type}\` | ${defaultValue} | \`${optional}\` | ${min} | ${possibleValues} |`
      }
      // build code samples
      if (!params[p].optional) {
        let quot = params[p].type === 'string'
        // json sample
        sampleParamStr += `,\n  "${p}": ${JSON.stringify(params[p].defaultValue)}`
        // A-Frame sample
        if (!params[p].skipInAframe) sampleAframeStr += (`${p}: ${JSON.stringify(params[p].aframeDefault || params[p].defaultValue)}; `).replace(/"/gm, '')
      }
    })
    // info on parent nodes
    if (pt && pt.length) {
      typeStr += `\n\nPossible parent types`
      pt.forEach(p => {
        typeStr += `\n* [\`${p}\`](#${p})`
      })
    }
    // info on child nodes
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
    // special A-Frame cases
    if (t === 'object')  sampleAframeStr += 'key: /3f995099-d624-4c8e-ab6b-1fd5e3799173/170515-0913-4p3ktf/1e588a3b-90ac-4a32-b5b8-ff2fda7f87c4.gz.data3d.buffer'
    if (t === 'interior')  sampleAframeStr += 'id: 10344b13-d981-47a0-90ac-f048ee2780a6'
    let aframeStr = ''
    if (data.aframeComponent) {
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
  writeDocsFile(docStr)
}

function getImage(type) {
  let path = `${IMG_PATH}icon-${type}.png`
  let imgStr = ''
  if (fs.existsSync(path)) {
    imgStr = `\n\n<img src="${path.replace('./src','../../..')}" alt="${type} icon" style="max-width: 200px; max-height: 200px; width: initial;"/>`
    // imgStr = `\n\n![${type} icon](${path.replace('src','..  ')} =250x)`
  }
  return imgStr
}

function writeDocsFile(docStr) {
  fs.writeFile(REF_PATH, docStr, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log('file saved')
  })
}

generateReference()
