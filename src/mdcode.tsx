import { Code, LezerHighlighter, withDefaults } from "@motion-canvas/2d";
import { parser } from "@lezer/markdown";

const MdHighlighter = new LezerHighlighter(parser);

const MdCode = withDefaults(Code, {
  highlighter: MdHighlighter,
});

export default MdCode;
