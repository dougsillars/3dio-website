# Architectural Toolkit<br>for A-Frame
<!-- app creator code samples by dev+codesamples@3d.io -->

## io3d-kitchen

```html
<a-entity io3d-kitchen="l:3; wallCabinet:false"></a-entity>
```

### params

[kitchen type](scene-structure-reference.md#kitchen)

### interactive sample

<iframe style="width:100%; height:400px;" 
        src="https://appcreator-testing.3d.io/2TgcW3?m=e&e=light&embed=true">
</iframe>

## io3d-stairs

```html
<a-entity io3d-stairs="l:3; w:2; stairType:doubleWinder"></a-entity>
```

### params

[stairs type](scene-structure-reference.md#stairs)

### interactive sample

<iframe style="width:100%; height:400px;" 
        src="https://appcreator-testing.3d.io/uocsLI?m=e&e=light&embed=true">
</iframe>

## io3d-wall

```html
<a-entity io3d-wall="l:3; w:0.12;"></a-entity>
```

### params

[wall type](scene-structure-reference.md#wall)

### interactive sample

<iframe style="width:100%; height:400px;" 
        src="https://appcreator-testing.3d.io/kWarKr?m=e&e=light&embed=true">
</iframe>

## io3d-door

```html
<a-entity io3d-wall="l:3; w:0.12;">
    <a-entity io3d-door="l:0.9; side:front" position="1 0 0"></a-entity>
</a-entity>
```

### params

[door type](scene-structure-reference.md#door)

### interactive sample

<iframe style="width:100%; height:400px;" 
        src="https://appcreator-testing.3d.io/F6qWJl?m=e&e=light&embed=true">
</iframe>

## io3d-window

```html
<a-entity io3d-wall="l:3; w:0.12;">
    <a-entity io3d-window="l:1.5" position="1 0.8 0"></a-entity>
</a-entity>
```

### params

[window type](scene-structure-reference.md#window)

### interactive sample

<iframe style="width:100%; height:400px;" 
        src="https://appcreator-testing.3d.io/R7MKOx?m=e&e=light&embed=true">
</iframe>