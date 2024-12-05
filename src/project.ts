import { makeProject } from "@motion-canvas/core";
import index from "./scenes/index?scene";
import { Code, LezerHighlighter } from "@motion-canvas/2d";
import { parser } from "@lezer/javascript";

Code.defaultHighlighter = new LezerHighlighter(parser);

export default makeProject({
  scenes: [index],
});
