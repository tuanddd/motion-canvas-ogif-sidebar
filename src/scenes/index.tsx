import { Code, Img, Rect, Txt, makeScene2D } from "@motion-canvas/2d";
import MdCode from "../mdcode";
import { all, beginSlide, chain, createRef } from "@motion-canvas/core";
import HtmlCode from "../htmlcode";
import gem from "../gem.png";
import tree from "../tree.png";
import dfCute from "../df-cute.png";
import deluxe from "../deluxe.png";
import premium from "../premium.png";
import room from "../room.png";
import teams from "../teams.png";
import activities from "../activities.png";
import food from "../food.png";

function pause(count: number) {
  return beginSlide("ogif" + count);
}

export default makeScene2D(function* (view) {
  const stickerRef = createRef<Img>();
  const titleRef = createRef<Rect>();
  view.add(
    <Img src={dfCute} ref={stickerRef} position={[0, -120]} width={650} />
  );
  view.add(
    <Img opacity={0.125} src={tree} position={[750, 200]} width={600} />
  );
  view.add(
    <Rect
      layout
      direction="column"
      alignItems="center"
      columnGap={10}
      position={[0, 170]}
      ref={titleRef}
    >
      <Txt fill="#cecece" fontSize={50}>
        Company Trip
      </Txt>
      <Txt fill="#cecece" fontSize={70}>
        Penang
      </Txt>
      <Txt fill="#cecece" fontSize={40}>
        14 - 17 Dec
      </Txt>
    </Rect>
  );
  view.add(
    <Rect layout alignItems="center" columnGap={10} position={[840, -490]}>
      <Img src={gem} width={40} opacity={0.7} />
      <Txt fill="#cecece" fontSize={24}>
        Company Trip
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
    stickerRef().opacity(0, 0.25),
    titleRef().opacity(0, 0.25)
  );

  yield* toc().code(
    `\
[ ] Flight
[ ] Hotels
[ ] Activities
[ ] Food / Cuisine
[ ] Tips & tricks
[ ] QnA`,
    0.5
  );

  count++;

  yield* pause(count);
  yield* all(
    toc().code("[ ] Flight", 0.5),
    toc().position([-800, -450], 0.75),
    toc().fontSize(48, 0.75)
  );

  const problems = createRef<Code>();

  view.add(<MdCode ref={problems} fontSize={50} position={[-150, 0]} />);

  yield* pause(count);
  yield* chain(
    problems().code.append(
      `AirAsia
Departure: Dec 14, 13:35
AK-1503`,
      0.75
    ),
    pause(count),
    problems().code.append(
      `\n---------\nReturn: Dec 17, 12:15
AK-1502`,
      0.5
    )
  );

  yield* all(
    problems().code("- 7kg cabin baggage", 0.5),
    pause(count),
    problems().position.y(0, 0.5)
  );

  yield* all(
    problems().code.append("\n- 20kg checked baggage\n(per pax)", 0.5),
    pause(count)
  );

  yield* all(
    problems().code("- Non-HCM peeps self book flight from/to HCM", 0.5),
    pause(count),
    problems().position.y(0, 0.5)
  );

  yield* all(
    problems().code.append(
      "\n- Make an reimbursement request in Basecamp",
      0.5
    ),
    pause(count),
    problems().position.y(0, 0.5)
  );

  yield* chain(
    problems().opacity(0, 0.75),
    all(toc().fontSize(72, 0.75), toc().position([0, 0], 0.75)),
    toc().code("[ ] Hotels", 0.5)
  );

  count++;
  yield* pause(count);

  yield* all(
    toc().code("[ ] Hotels", 0.5),
    toc().position([-810, -450], 0.75),
    toc().fontSize(48, 0.75)
  );

  const approach3 = createRef<Code>();

  view.add(<HtmlCode ref={approach3} fontSize={50} />);

  yield* approach3().code(`Hompton By the Beach`, 0.5);

  yield* pause(count);

  const deluxeRef = createRef<Img>();
  view.add(
    <Img src={deluxe} ref={deluxeRef} position={[0, -120]} width={650} />
  );
  yield* all(
    approach3().position.x(-600, 0.5),
    approach3().code.append(`\n- Room for 2 (Deluxe seaview room)`, 0.5),
    all(deluxeRef().opacity(1, 0.25), deluxeRef().position([500, 0], 0.5))
  );

  yield* pause(count);

  const premiumRef = createRef<Img>();
  view.add(
    <Img src={premium} ref={premiumRef} position={[0, -120]} width={650} />
  );

  yield* all(
    deluxeRef().opacity(0, 0.25),
    approach3().position.x(-600, 0.5),
    approach3().code(
      `Hompton By the Beach\n- Room for 4 (Premium supreme suite)`,
      0.5
    ),
    all(premiumRef().opacity(1, 0.25), premiumRef().position([600, 0], 0.5))
  );

  count++;
  yield* pause(count);

  yield* all(
    deluxeRef().opacity(0, 0.5),
    premiumRef().opacity(0, 0.5),
    approach3().position.x(-200, 0.5),
    approach3().code(`- Breakfast`, 0.5)
  );

  yield* pause(count);

  yield* approach3().code.append("\n- Transport from/to airport", 0.5);

  yield* pause(count);

  const roomRef = createRef<Img>();
  view.add(
    <Img src={room} ref={roomRef} position={[0, 0]} height={800} opacity={0} />
  );
  yield* all(approach3().opacity(0, 0.5), roomRef().opacity(1, 0.5));

  yield* pause(count);

  yield* chain(
    roomRef().opacity(0, 0.75),
    all(toc().fontSize(72, 0.75), toc().position([0, 0], 0.75)),
    toc().code("[ ] Activities", 0.5)
  );

  count++;
  yield* pause(count);

  yield* all(
    toc().code("[ ] Activities", 0.5),
    toc().position([-740, -450], 0.75),
    toc().fontSize(48, 0.75)
  );

  const approach4 = createRef<Code>();

  view.add(<HtmlCode ref={approach4} fontSize={50} />);

  yield* approach4().code(
    `- There is NO "company" activity this year\n- Purely retreat for the team\n- One itinerary can't suit everyone`,
    0.5
  );

  yield* pause(count);

  const teamsRef = createRef<Img>();

  view.add(
    <Img
      src={teams}
      ref={teamsRef}
      position={[0, 0]}
      height={800}
      opacity={0}
    />
  );
  yield* approach4().code(`Split into smaller teams`, 0.5);

  yield* chain(approach4().position.y(480, 0.5), teamsRef().opacity(1, 0.5));

  yield* pause(count);
  yield* all(
    approach4().position.y(0, 0.5),
    approach4().opacity(0, 0.5),
    teamsRef().opacity(0, 0.5)
  );

  //slide 9
  const activitiesRef = createRef<Img>();

  view.add(
    <Img
      src={activities}
      ref={activitiesRef}
      position={[500, 0]}
      height={1000}
      opacity={0}
    />
  );

  yield* all(
    approach4().opacity(1, 0.5),
    approach4().position.x(-400, 0.5),
    approach4().code(
      `- Pick your favorites activity,\n  Ops team will handle the tickets\n  for you`,
      0.5
    ),
    activitiesRef().opacity(1, 0.5)
  );

  yield* pause(count);
  yield* activitiesRef().opacity(0, 0.5);

  // slide 10
  yield* all(
    approach4().opacity(1, 0.5),
    approach4().position.x(0, 0.5),
    approach4().code(`- Ops team will post a registration form next week`, 0.5)
  );

  yield* pause(count);

  yield* approach4().opacity(0, 0.5);

  // slide 11

  yield* chain(
    problems().opacity(0, 0.75),
    all(toc().fontSize(72, 0.75), toc().position([0, 0], 0.75)),
    toc().code("[ ] Food / Cuisine", 0.5)
  );

  count++;
  yield* pause(count);

  yield* all(
    toc().code("[ ] Food / Cuisine", 0.5),
    toc().position([-690, -450], 0.75),
    toc().fontSize(48, 0.75)
  );

  const approach5 = createRef<Code>();

  view.add(<HtmlCode ref={approach5} fontSize={50} />);

  const foodRef = createRef<Img>();

  view.add(
    <Img
      src={food}
      ref={foodRef}
      position={[500, 0]}
      height={1000}
      opacity={0}
    />
  );

  yield* all(
    approach5().position.x(-520, 0.5),
    approach5().code(
      `- Claim your expense at\n  the end of the company trip`,
      0.5
    ),
    foodRef().opacity(1, 0.5)
  );

  yield* pause(count);

  yield* all(approach5().opacity(0, 0.5), foodRef().opacity(0, 0.5));

  yield* chain(
    roomRef().opacity(0, 0.75),
    all(toc().fontSize(72, 0.75), toc().position([0, 0], 0.75)),
    toc().code("[ ] Tips & tricks", 0.5)
  );

  count++;
  yield* pause(count);

  yield* all(
    toc().code("[ ] Tips & tricks", 0.5),
    toc().position([-700, -450], 0.75),
    toc().fontSize(48, 0.75)
  );

  const approach6 = createRef<Code>();

  view.add(<HtmlCode ref={approach6} fontSize={50} />);

  yield* all(
    approach6().position.x(-450, 0.5),
    approach6().code(
      `- BRING YOUR PASSPORT, please\n- New passport with chip can use autogate when return`,
      0.5
    )
  );

  yield* pause(count);

  yield* all(
    approach6().code(
      `- Buy your esim\n- Scan QR to activate, no need for physical sim`,
      0.5
    )
  );

  yield* pause(count);

  yield* all(
    approach6().code(
      `- Exchange some $$\n- Can do it in airport, recommend 3-5M VND`,
      0.5
    )
  );

  yield* pause(count);

  yield* all(
    approach6().code(
      `- Weather: 22° - 28° C\n- Low amount of rain, but recommend to bring umbrella`,
      0.5
    )
  );

  yield* pause(count);

  yield* all(approach6().opacity(0, 0.5));

  yield* chain(
    roomRef().opacity(0, 0.75),
    all(toc().fontSize(72, 0.75), toc().position([0, 0], 0.75)),
    toc().code("[ ] QnA", 0.5)
  );

  count++;
  yield* pause(count);
});
