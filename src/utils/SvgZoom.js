import * as d3 from "d3";

/**
 * Zoom for the svg.
 */
export default class SvgZoom {
  static zoom() {
    var svg = d3.select("svg");

    svg.call(
      d3.zoom().scaleExtent([1, 2]).on("zoom", function (event) {
        svg.attr("transform", event.transform);
      })
    );
  }
}
