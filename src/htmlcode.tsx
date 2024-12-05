import { Code, LezerHighlighter, withDefaults } from "@motion-canvas/2d";
import { parser } from "@lezer/html";

const HtmlHighlighter = new LezerHighlighter(parser);

const HtmlCode = withDefaults(Code, {
  highlighter: HtmlHighlighter,
});

export default HtmlCode;
