import * as d3 from "d3";

/**
 * Update a node.
 * Each time this is called we can update a particular element's location from Svg
 */
export default class SvgUpdateDoorLocation {
    static update() {
        //used to capture drag position
        var start_x, start_y;
        var current_scale, current_scale_string;

        //create drag handler with d3.drag()
        var drag_handler = d3
            .drag()
            .on("start", (event, d) => drag_start(event, d))
            .on("drag", (event, d) => drag_drag(event, d));

        var customNodes = d3.selectAll("svg g.node");

        function drag_start(event, d) {
            // get starting location of the drag
            start_x = +event.x;
            start_y = +event.y;
        }

        function drag_drag(event, d) {
            //Get the current scale of the door<g>
            //case where we haven't scaled the door<g> yet

            if (
                document
                    .querySelector(`svg g[door-id=${d.name}]`)
                    .getAttribute("transform") === null
            ) {
                current_scale = 1;
            }
            //case where we have transformed the door<g>
            else {
                current_scale_string = document
                    .querySelector(`svg g[door-id=${d.name}]`)
                    .getAttribute("transform")
                    .split(" ")[1];
                current_scale = +current_scale_string.substring(
                    6,
                    current_scale_string.length - 1
                );
                console.log(current_scale);
            }
            d3.select(`svg g[door-id=${d.name}]`).attr(
                "transform",
                (d) =>
                    "translate(" +
                    (d.x = start_x + (event.x - start_x) / current_scale) +
                    "," +
                    (d.y = start_y + (event.y - start_y) / current_scale) +
                    ") scale(1)"
            );
        }

        //apply the drag_handler to our customNodes
        drag_handler(customNodes);
    }
}
