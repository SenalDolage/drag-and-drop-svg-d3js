import * as d3 from "d3";

/**
 * Delete a nodes.
 * Each time this is called we can delete a particular element from Svg
 */
export default class SvgDeleteDoor {
  static remove(doorId) {
    d3.select("svg g.node").attr("door-id", { doorId }).remove();
  }
}
