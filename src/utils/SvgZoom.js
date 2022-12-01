import * as d3 from "d3";

/**
 * Zoom for the svg.
 */
export default class SvgZoom {
  static zoom() {
    var svg = d3.select("svg");

    //create zoom handler
    var zoom_handler = d3.zoom().scaleExtent([1, 1.5]).on("zoom", zoom_actions);

    //specify what to do when zoom event listener is triggered
    function zoom_actions(event) {
      svg.attr("transform", event.transform);
    }

    zoom_handler(svg);
  }
}
