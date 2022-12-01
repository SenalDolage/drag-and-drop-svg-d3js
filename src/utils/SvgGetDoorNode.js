import * as d3 from "d3";

/**
 * View node details.
 */
export default class SvgGetDoorNode {
  static viewDetails(doorName) {
    return d3.select("svg g.node").attr("door-id", { doorName });
  }
}
