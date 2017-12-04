# script to generate a sceneStructure Reference

* clone `3dio-js` repo next to `3dio-website` repo<br>
`3dio-js` contains the schema definitions
```
cd ..
git clone https://github.com/archilogic-com/3dio-js.git
```
* install dependencies
```bash
npm install rollup -g
```
* adapt `./tasks/scene-structure-specs/intro.md` if needed
* run script from 3dio-website root dir
```bash
npm run build-scene-structure-specs
```
* result is saved to
`./src/docs/api/1/scene-structure-reference.md`
