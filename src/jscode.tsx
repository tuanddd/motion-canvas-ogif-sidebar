import { Code, LezerHighlighter, withDefaults } from "@motion-canvas/2d";
import { parser } from "@lezer/javascript";

const JsHighlighter = new LezerHighlighter(
  parser.configure({
    dialect: "ts",
  })
);

const JsCode = withDefaults(Code, {
  highlighter: JsHighlighter,
});

export default JsCode;
