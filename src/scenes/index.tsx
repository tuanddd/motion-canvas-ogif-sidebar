import {
  CODE,
  Code,
  Img,
  Rect,
  Txt,
  lines,
  makeScene2D,
} from "@motion-canvas/2d";
import MdCode from "../mdcode";
import {
  DEFAULT,
  JumpSpring,
  all,
  beginSlide,
  chain,
  createRef,
  sequence,
  spring,
  waitFor,
} from "@motion-canvas/core";
import JsCode from "../jscode";
import HtmlCode from "../htmlcode";
import approach2img from "../approach2.png";
import approach2_2img from "../approach2_2.png";
import gem from "../gem.png";
import tree from "../tree.png";
import dfCute from "../df-cute.png";

function pause(count: number) {
  return beginSlide("ogif" + count);
}

export default makeScene2D(function* (view) {
  const stickerRef = createRef<Img>();
  view.add(<Img src={dfCute} ref={stickerRef} />);
  view.add(
    <Img opacity={0.125} src={tree} position={[750, 200]} width={600} />
  );
  view.add(
    <Rect layout alignItems="center" columnGap={10} position={[870, 510]}>
      <Img src={gem} width={40} opacity={0.7} />
      <Txt fill="#cecece" fontSize={24}>
        OGIF #4
      </Txt>
    </Rect>
  );
  const toc = createRef<Code>();
  view.add(<MdCode ref={toc} fontSize={72} />);

  let count = 1;

  yield* pause(count);

  yield* all(
    /* spring(JumpSpring, 1, 0.9, (scale) => stickerRef().scale(scale)), */
    /* spring(JumpSpring, 0.9, 1.1, (scale) => stickerRef().scale(scale)), */
    /* spring(JumpSpring, 0, 5, (rotate) => stickerRef().rotation(rotate)), */
    stickerRef().opacity(0, 0.25)
  );

  yield* toc().code(
    `\
- [ ] What`,
    0.5
  );

  yield* pause(count);

  yield* toc().code(
    `\
- [ ] What
- [ ] How`,
    0.5
  );

  yield* pause(count);

  yield* toc().code(
    `\
- [ ] What
- [ ] How
- [ ] QnA`,
    0.5
  );
  count++;

  yield* pause(count);
  yield* all(
    toc().code("[ ] What", 0.5),
    toc().position([-800, -450], 0.75),
    toc().fontSize(48, 0.75)
  );

  const problems = createRef<Code>();

  view.add(<MdCode ref={problems} fontSize={50} position={[-150, 0]} />);

  yield* pause(count);
  yield* chain(
    problems().code.append(
      "- Given a data and its structure, render a sidebar",
      0.75
    ),
    pause(count),
    problems().code.append("\n- Level of nesting is dynamic", 0.5)
  );

  yield* pause(count);
  yield* problems().selection(
    problems().findAllRanges(
      "- Given a data and its structure, render a sidebar"
    ),
    0.5
  );

  yield* all(
    problems().code("- Given a data and its structure, render a sidebar", 0.5),
    pause(count),
    problems().position.y(-300, 0.5)
  );

  const dataShape = createRef<Code>();

  view.add(
    <JsCode
      ref={dataShape}
      code={CODE``}
      fontSize={42}
      position={[-350, 150]}
    />
  );

  const fileName = Code.createSignal(CODE`File`);
  const dataName = Code.createSignal(CODE`Data`);
  const keyName = Code.createSignal(CODE`key`);

  yield* dataShape().code(
    CODE`\
type ${dataName} {
  file_paths: Array<${fileName}>
  next_path: {
    [${keyName}: string]: ${dataName}
  }
}

type ${fileName} {
  // "/changelog/2-ogif-office-hours-0412"
  file_path: string 

  // "OGIF Office Hours #2: Devbox..."
  title: string 
}`,
    0.5
  );

  yield* pause(count);
  yield* dataShape().selection(dataShape().findFirstRange("Array<File>"), 0.5);
  yield* pause(count);
  yield* dataShape().selection(lines(6, 13), 0.5);

  yield* pause(count);
  yield* fileName("ListItem", 0.5);
  yield* pause(count);

  yield* sequence(
    1,
    dataShape().selection(DEFAULT, 0.5),
    dataShape().selection(lines(2, 4), 0.5)
  );

  yield* pause(count);

  yield* sequence(
    1,
    all(keyName("subList", 0.5), dataName("List", 0.5)),
    dataShape().selection(DEFAULT, 0.75)
  );

  yield* pause(count);

  yield* all(
    dataShape().opacity(0, 0.5),
    problems().code.append("\n- Level of nesting is dynamic", 0.5),
    problems().position([-150, 0], 0.5),
    problems().selection(DEFAULT, 0.5)
  );

  yield* pause(count);

  yield* chain(
    all(
      problems().opacity(0, 0.75),
      toc().code(`- [ ] What`, 0.75),
      toc().position([0, 0], 0.75),
      toc().fontSize(72, 0.75)
    ),
    toc().code(
      `- [ ] What
- [ ] How
- [ ] QnA`,
      1
    ),
    toc().code(
      `- [x] What
- [ ] How
- [ ] QnA`,
      0.5
    )
  );

  count++;

  yield* pause(count);

  yield* all(
    toc().code("[ ] How", 0.5),
    toc().position([-810, -450], 0.75),
    toc().fontSize(48, 0.75)
  );
  /**/
  /*   const approaches = createRef<Code>(); */
  /*   view.add(<MdCode ref={approaches} fontSize={86} />); */
  /**/
  /*   yield* approaches().code( */
  /*     `\ */
  /* - ❓ */
  /* - ❓ */
  /* - ❓`, */
  /*     0.5 */
  /*   ); */
  /**/
  /*   yield* pause(count); */
  /**/
  /*   yield* approaches().code( */
  /*     `\ */
  /* - 🤔 alpine-component */
  /* - ❓ */
  /* - ❓`, */
  /*     0.5 */
  /*   ); */
  /**/
  /*   count++; */
  /**/
  /*   yield* pause(count); */
  /**/
  /*   yield* approaches().opacity(0, 0.25); */
  /**/
  /*   const approach1 = createRef<Code>(); */
  /**/
  /*   view.add(<HtmlCode ref={approach1} fontSize={50} />); */
  /**/
  /*   yield* approach1().code( */
  /*     ` */
  /* <template id="person"> */
  /*   ...content */
  /* </template> */
  /**/
  /* <template x-for="person in people"> */
  /**/
  /*     <x-component  */
  /*       template="person"  */
  /*       x-data="{ item: person }"> */
  /*     </x-component> */
  /**/
  /* </template>`, */
  /*     0.5 */
  /*   ); */
  /**/
  /*   yield* pause(count); */
  /**/
  /*   yield* approach1().selection(lines(1, 3), 0.25); */
  /**/
  /*   yield* pause(count); */
  /**/
  /*   yield* approach1().selection(lines(4, 12), 0.5); */
  /**/
  /*   yield* waitFor(0.5); */
  /**/
  /*   yield* approach1().selection(lines(6, 10), 0.5); */
  /**/
  /*   yield* pause(count); */
  /**/
  /*   yield* chain(approach1().opacity(0, 0.25), approaches().opacity(1, 0.25)); */
  /**/
  /*   approach1().remove(); */
  /**/
  /*   yield* approaches().code( */
  /*     `\ */
  /* - ❌ alpine-component */
  /* - ❓ */
  /* - ❓`, */
  /*     0.5 */
  /*   ); */
  /**/
  /*   yield* pause(count); */
  /**/
  /*   yield* all( */
  /*     approaches().code( */
  /*       `\ */
  /* - ❌ alpine-component */
  /* - 🤔 javascript */
  /* - ❓`, */
  /*       0.5 */
  /*     ), */
  /*     approaches().selection(lines(1), 0.5) */
  /*   ); */
  /**/
  /*   count++; */
  /**/
  /*   const approach2imgRef = createRef<Img>(); */
  /*   const approach2_2imgRef = createRef<Img>(); */
  /**/
  /*   view.add( */
  /*     <Img */
  /*       ref={approach2imgRef} */
  /*       src={approach2img} */
  /*       opacity={0} */
  /*       scale={2} */
  /*       position={[200, 0]} */
  /*     /> */
  /*   ); */
  /**/
  /*   view.add( */
  /*     <Img */
  /*       ref={approach2_2imgRef} */
  /*       src={approach2_2img} */
  /*       opacity={0} */
  /*       scale={0.65} */
  /*       position={[-200, 50]} */
  /*     /> */
  /*   ); */
  /**/
  /*   yield* pause(count); */
  /**/
  /*   yield* chain( */
  /*     approaches().opacity(0, 0.25), */
  /*     all( */
  /*       approach2_2imgRef().opacity(1, 0.25), */
  /*       approach2_2imgRef().position.x(-400, 0.25) */
  /*     ) */
  /*   ); */
  /**/
  /*   yield* pause(count); */
  /**/
  /*   yield* all( */
  /*     approach2imgRef().opacity(1, 0.25), */
  /*     approach2imgRef().position.x(400, 0.25) */
  /*   ); */
  /**/
  /*   yield* pause(count); */
  /**/
  /*   approaches().selection(DEFAULT); */
  /**/
  /*   yield* chain( */
  /*     all( */
  /*       approach2imgRef().opacity(0, 0.25), */
  /*       approach2_2imgRef().opacity(0, 0.25) */
  /*     ), */
  /*     approaches().opacity(1, 0.25) */
  /*   ); */
  /**/
  /*   approach2imgRef().remove(); */
  /*   approach2_2imgRef().remove(); */
  /**/
  /*   yield* approaches().code( */
  /*     `\ */
  /* - ❌ alpine-component */
  /* - ❌ javascript */
  /* - ❓`, */
  /*     0.5 */
  /*   ); */
  /**/
  /*   yield* pause(count); */
  /**/
  /*   yield* all( */
  /*     approaches().code( */
  /*       `\ */
  /* - ❌ alpine-component */
  /* - ❌ javascript */
  /* - 🤔 x-html`, */
  /*       0.5 */
  /*     ), */
  /*     approaches().selection(lines(2), 0.5) */
  /*   ); */
  /**/
  /*   count++; */
  /**/
  /*   yield* pause(count); */
  /**/
  /*   yield* approaches().opacity(0, 0.25); */

  const approach3 = createRef<Code>();

  view.add(<HtmlCode ref={approach3} fontSize={30} />);

  yield* approach3().code(
    `\
<template 
  x-data="{ 
    foo() { 
      return '<span>bar</span>'
    } 
  }"
>
</template>`,
    0.5
  );

  yield* pause(count);

  yield* approach3().code(
    `\
<template 
  x-data="{ 
    foo() { 
      return '<span>bar</span>'
    } 
  }"
  x-html="foo()"
>
</template>`,
    0.5
  );

  yield* pause(count);

  yield* approach3().code(
    `\
<template 
  x-data="{ 
    foo() { 
      return '<span>bar</span>'
    } 
  }"
  x-html="foo()"
>
  <span>bar</span>
</template>`,
    0.5
  );

  yield* pause(count);

  yield* approach3().code(
    `\
<template 
  x-data="{ 
    foo() { 
      return '<span>bar</span>'
    } 
  }"
  x-html="foo()"
>
</template>`,
    0.5
  );

  yield* pause(count);

  yield* approach3().code(
    `\
<template 
  x-data="{ 
    foo() { 
      return '<span x-html='foo()'>bar</span>'
    } 
  }"
  x-html="foo()"
>
</template>`,
    0.5
  );

  yield* pause(count);

  yield* approach3().code(
    `\
<details>
  <summary>Home</summary>
</details>`,
    0.5
  );

  yield* pause(count);

  yield* approach3().code(
    `\
<details>
  <summary>Home</summary>
  <template x-data="..." x-for="(menu, value) in sidebarItems">
    <details x-html="render(menu, value)"></details>
  </template>
</details>`,
    0.5
  );

  yield* pause(count);

  const approach3_js = createRef<Code>();
  view.add(<JsCode ref={approach3_js} fontSize={30} />);

  yield* all(
    approach3().opacity(0, 0.25),
    approach3_js().code(
      `\
function render(menu, value) {
}`,
      0.5
    )
  );

  yield* pause(count);

  yield* approach3_js().code(
    `\
function render(menu, value) {
  let html = \`<summary>\${menu}</summary>\`
}`,
    0.25
  );

  yield* pause(count);

  yield* approach3_js().code(
    `\
function render(menu, value) {
  let html = \`<summary>\${menu}</summary>\`
  const hasChildList = Object.keys(value.next_path).length > 0
}`,
    0.25
  );

  yield* pause(count);

  yield* approach3_js().code(
    `\
function render(menu, value) {
  let html = \`<summary>\${menu}</summary>\`
  const hasChildList = Object.keys(value.next_path).length > 0
  const hasFilePaths = value.file_paths.length > 0
}`,
    0.25
  );

  yield* pause(count);

  yield* approach3_js().code(
    `\
function render(menu, value) {
  const hasChildList = Object.keys(value.next_path).length > 0
  const hasFilePaths = value.file_paths.length > 0

  if(hasChildList) html += \`
    <template x-for="(cMenu, cValue) in value.next_path">
      <details x-html="render(cMenu, cValue)"></details>
    </template>\`
}`,
    0.25
  );

  yield* pause(count);

  yield* approach3_js().code(
    `\
function render(menu, value) {
  const hasFilePaths = value.file_paths.length > 0

  if(hasChildList) html += \`
    <template x-for="(cMenu, cValue) in value.next_path">
      <details x-html="render(cMenu, cValue)"></details>
    </template>\`

  if(hasFilePaths) html += \`
    <ul>
      <li>...</li>
      <li>...</li>
    </ul>\`
}`,
    0.25
  );

  yield* pause(count);

  yield* approach3_js().code(
    `\
function render(menu, value) {
  if(hasChildList) html += \`
    <template x-for="(cMenu, cValue) in value.next_path">
      <details x-html="render(cMenu, cValue)"></details>
    </template>\`

  if(hasFilePaths) html += \`
    <ul>
      <li>...</li>
      <li>...</li>
    </ul>\`

  return html
}`,
    0.25
  );

  yield* pause(count);

  yield* approach3_js().selection(lines(1, 5), 0.25);

  yield* pause(count);

  yield* approach3_js().selection(lines(6, 10), 0.25);

  yield* pause(count);

  yield* sequence(
    0.75,
    approach3_js().selection(DEFAULT, 0.25),
    approach3_js().opacity(0, 0.25),
    approach3().opacity(1, 0.25),
    approach3().opacity(0, 0.25)
    /* approaches().opacity(1, 0.25) */
  );

  /*   yield* approaches().code( */
  /*     `\ */
  /* - ❌ alpine-component */
  /* - ❌ javascript */
  /* - ✅ x-html`, */
  /*     0.5 */
  /*   ); */

  count++;

  yield* pause(count);

  yield* all(
    /* approaches().opacity(0, 0.25), */
    chain(
      all(toc().position([0, 0], 0.75), toc().fontSize(72, 0.75)),
      toc().code(
        `- [x] What
- [ ] How
- [ ] QnA`,
        1
      ),
      toc().code(
        `- [x] What
- [x] How
- [ ] QnA`,
        0.5
      )
    )
  );

  yield* pause(count);

  yield* all(
    toc().code("[ ] QnA", 0.5),
    toc().position([-800, -450], 0.75),
    toc().fontSize(48, 0.75)
  );

  yield* pause(count);
});
