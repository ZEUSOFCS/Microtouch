// Resources: https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events

// Detect touch screen devices
if ("ontouchstart" in document.documentElement) {
  // Register touch event handlers
  document
    .querySelector(".touch")
    .addEventListener("touchstart", process_touchstart, false);

  // Touchstart handler
  function process_touchstart(e) {
    // Use the event's data to call out to the appropriate gesture handlers
    switch (e.touches.length) {
      case 1:
        handle_touch(e);
      case 2:
        handle_touch(e);
      case 3:
        handle_touch(e);
        break;
      default:
        gesture_not_supported(e);
        break;
    }
  }

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

  function touch_supported(e) {
    var element = document.queryAllSelector(".no-touch");
    if (element !== null) {
      //element.classList.remove("no-touch");
    }
  }
  **/
}
