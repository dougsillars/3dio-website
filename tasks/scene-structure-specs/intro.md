<!-- sceneStructure reference created automatically -->
<!-- do not edit manually -->
<!-- check ./tasks/scene-structure-reference/README.md -->
# Scene Structure Specifications

Main data format of every Archilogic 3D scene.<br>
Describes all elements of a scene including their relations to each other (location, orientation, hierarchy) and their specific characteristics (attributes).

SceneStructure can be converted from and to A-Frame components on the fly

[sceneStructure to A-Frame Elements](scene.md#get-a-frame-elements-from-scene-structure)

[A-Frame Elements to sceneStructure](scene.md#get-scene-structure-from-a-frame-elements)

## Coordinate System

<img src="../../../img/docs/scene-structure-specs/coordinate-system.png" alt="Coordinate system" style="max-width: 200px; max-height: 200px; width: initial;"/>

Type: right-handed cartesian coordinate system<br>
Units: meters, degree angles<br>
Origin: always relative to parent element<br>
Y orientation: E=0° N=90° W=180° S=270°
