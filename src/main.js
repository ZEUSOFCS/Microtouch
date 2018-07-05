// Resources: https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events

// Detect touch screen devices
if ("ontouchstart" in document.documentElement) {
  // Loop through document for .touch classes
  document.querySelectorAll(".touch").forEach(function(element) {
    element.addEventListener("touchstart", process_touchstart, false);

    // Touchstart handler
    function process_touchstart(e) {
      // Use the event's data to call out to the appropriate gesture handlers
      switch (e.touches.length) {
        case 1:
          touch_supported(e);
          break;
        case 2:
          touch_supported(e);
          break;
        case 3:
          touch_supported(e);
          break;
        default:
          gesture_not_supported(e);
          break;
      }
    }
  });

  /**
   * Customized gestures that are not supported
   *
   * @description this function triggers when user touches are
   *
   **/
  function gesture_not_supported(e) {
    console.log("Gesture is not supported 😞");
  }

  /**
   * TODO: Add New Features
   * Modifies class selectors
   *
   * @description: this function adds touch support on touch suppported devices
   *
   **/
  function touch_supported(e) {
     // Do something after the element is touched
  }
}
