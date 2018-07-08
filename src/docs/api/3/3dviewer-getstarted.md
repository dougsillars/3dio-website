# 3D Viewer Getting Started

The 3D viewer is a lightweight client that allows you to showcase your 3D models on the web.  


## Displaying Your Scene 

Once you have created a scene, you'll want to show it off.  3D.io has created a small, lightweight Viewer that will display your Scene on a webpage (or embedded on a webpage in an iFrame).

To display your scene, you'll simply create a url in the format:

https://viewer.archilogic.com/?sceneId=6d263da3-915a-47dd-8e41-7001a351ad7a&autoStart=false&presentationMode=tourOnce

This url references the viewer.archilogic.com site, and feeds in url parameters required to build the page.  In this case, the sceneId references an existing scene, autoStart is set to false and presentationMode to tourOnce.  Changing the parameters in the url will change the way your model is presented on the page:

| Parameter | Description | Potential Values | Default value |
| --- | --- | --- | --- |
| sceneId | The scene that you would like to display. | [An existing sceneId] | if blank, the viewer will display no scene. |
| autoStart | Will model presentation autoplay? | true <br> false | false|
| presentationMode | The initial presentation delivered on the webpage. | none  <br> goToCameraDefault <br> goToFirstBookmark <br>tourOnce <br> tourLoop| goToFirstBookmark |

### Presentation Mode Descriptions

| Parameter | Description | 
| --- | --- | 
| none |	Nothing happens. The camera stays put at its initial position and orientation (currently in bird view mode at [-1, 50, 0], looking down at [0, 0, 0]).				|
| goToCameraDefault|  The camera moves to a scene-dependent, automatically calculated default position and orientation (note how this is different than the initial camera attributes).		|
| goToFirstBookmark	| The camera moves to the first bookmark.	|
| tourOnce	| A presentation is started that will go through all bookmarks exactly once.	|
| tourLoop	| A presentation is started that will go through all bookmarks, move back to the first one and then repeat forever.	|


Once built, this url will create a simple webpage that contains your model.  However, you may want to better customise your model, or embed it in an existing webpage.  The next sections provide these details.

## Next Steps

[Embedding Models inside an existing page](3dviewer-embed.md)
<br>
[Customizing Models with JavaScript](3dviewer-customise.md)
