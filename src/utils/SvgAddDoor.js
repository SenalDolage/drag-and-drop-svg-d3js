import * as d3 from "d3";

/**
 * Draw the nodes.
 * Each time this is called we only draw the added nodes since we are using "enter" only
 */
export default class SvgAddDoor {
  static draw(nodes) {
    const newGroup = d3
      .select("svg")
      .selectAll()
      .data(nodes, (d) => d.id)
      .enter()
      .append("g");

    // Draw a group node that will contain the door
    newGroup
      .attr("class", "node")
      .attr("transform", (d) => "translate(" + d.x + "," + d.y + ") scale(1)")
      .attr("door-id", (d) => d.name);

    // Append the circle
    newGroup
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 10)
      .attr("fill", (d) => d.color);
  }
}
