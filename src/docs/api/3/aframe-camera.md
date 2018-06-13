## Create a camera flythrough tour of your A-Frame scene.

**Note:** This feature requires a third-party component, [aframe-animation-component](https://github.com/ngokevin/kframe/tree/master/components/animation/).

Right now, you should use version **3.2.5** of that component with the `tour` component.

| Parameter | Description | Default value |
| --- | --- | --- |
| `autoStart` | Determines if the camera tour starts automatically | `true` |
| `loop` | When set to `true`, the tour will play in a loop, transitioning from the last waypoint to the first. | `true` |
| `wait` | Time (in milliseconds) the tour will wait at each waypoint before moving on. | `2000` |
| `move` | Time (in milliseconds) the tour will take to move to the next point (at most). | `3000` |

### Example

The following example shows a tour of the different rooms in an apartment:

```html
<head>
  <script src="https://aframe.io/releases/0.7.1/aframe.min.js"></script>
  <script src="https://dist.3d.io/3dio-js/1.1.x/3dio.min.js"></script>
  <!-- This component requires the animation component from kframe! -->
  <script src="https://unpkg.com/aframe-animation-component@3.2.5/dist/aframe-animation-component.min.js"></script>
</head>
<body>
  <a-scene>
    <!-- loading an apartment -->
    <a-entity io3d-data3d="key:/3f995099-d624-4c8e-ab6b-1fd5e3799173/170515-0913-4p3ktf/1e588a3b-90ac-4a32-b5b8-ff2fda7f87c4.gz.data3d.buffer" position="0 0 0"></a-entity>
    <!-- define the camera with a tour (it will start automatically and loop infinitely) -->
    <a-entity camera tour>
      <!-- each of these waypoints will be visited in the given order -->
      <a-entity tour-waypoint="Living Room" io3d-uuid="living-room" position="-2.9 1.6 3.5"></a-entity>
      <a-entity tour-waypoint="Office" io3d-uuid="living-room" position="-3.6 1.6 -2.6" rotation="0 -140 0"></a-entity>
      <a-entity tour-waypoint="Kitchen" io3d-uuid="kitchen" position="-1.9 1.6 -1.4" rotation="0 -100 0"></a-entity>
      <a-entity tour-waypoint="Bedroom" io3d-uuid="bedroom" position="3.1 1.6 -2.6" rotation="0 -140 0"></a-entity>
    </a-entity>
  </a-scene>
</body>
```

### Programmatically start / stop or pause / resume the tour

The tour can be manually started, stopped, paused or resumed by calling the corresponding methods `playTour`, `stopTour` and `pauseTour`.
Here is an example with a play / pause button:

```html
<a-scene>
  <a-box color="red"></a-box>
  <a-entity id="camera" camera tour="autoStart: false" position="0 2 5" rotation="-22.5 0 0">
    <!-- each of these waypoints will be visited in the given order -->
    <a-entity tour-waypoint="Front" io3d-uuid="front" position="0 2 5" rotation="-22.5 0 0"></a-entity>
    <a-entity tour-waypoint="Back" io3d-uuid="back" position="0 2 -5" rotation="-22.5 180 0"></a-entity>
  </a-entity>
</a-scene>

<!-- Play / Pause button -->
<button id="play-pause">Play</button>

<script>
  var tour = document.querySelector('[tour]').components.tour

  // when the button is clicked, play or pause
  document.getElementById('play-pause').addEventListener('click', function () {
    if(this.textContent === 'Play') {
      this.textContent = 'Pause'
      tour.playTour()
    } else {
      this.textContent = 'Play'
      tour.pauseTour()
    }

  })
</script>
```

### Programmatically jumping to any waypoint

If you need to offer a way to make the camera fly from the current position to a predefined waypoint, you can use the `goTo` method together with the name of the waypoint:

```html
<!-- Buttons to move to each waypoint -->
<button onclick="document.getElementById('camera').components.tour.goTo('bedroom1')">Bedroom 1</button>
<button onclick="document.getElementById('camera').components.tour.goTo('bedroom2')">Bedroom 2</button>

<a-scene>
  <a-box color="red"></a-box>
  <a-entity id="camera" camera tour="autoStart: false" position="0 2 5" rotation="-22.5 0 0">
    <!-- each of these waypoints will be visited in the given order -->
    <a-entity tour-waypoint="Bedroom" io3d-uuid="bedroom1" position="0 2 5" rotation="-22.5 0 0"></a-entity>
    <a-entity tour-waypoint="Bedroom" io3d-uuid="bedroom2" position="0 2 -5" rotation="-22.5 180 0"></a-entity>
  </a-entity>
</a-scene>
```

If the transition should be immediate, you can set `move: 0` to make the movement instant instead of a flythrough:

```html
<!-- Buttons to move to each waypoint -->
<button onclick="document.getElementById('camera').components.tour.goTo('front')">Front</button>
<button onclick="document.getElementById('camera').components.tour.goTo('back')">Back</button>

<a-scene>
  <a-box color="red"></a-box>
  <a-entity id="camera" camera tour="autoStart: false; move: 0" position="0 2 5" rotation="-22.5 0 0">
    <!-- each of these waypoints will be visited in the given order -->
    <a-entity tour-waypoint="front" io3d-uuid="front" position="0 2 5" rotation="-22.5 0 0"></a-entity>
    <a-entity tour-waypoint="back" io3d-uuid="back" position="0 2 -5" rotation="-22.5 180 0"></a-entity>
  </a-entity>
</a-scene>
```