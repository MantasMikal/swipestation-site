import React from "react";
import { storiesOf } from "@storybook/react";

import Zoombale from ".";

const stories = storiesOf("Core/Zoomable", module);

stories.add(
  "Info",
  () => (
    <Zoombale>
      <img src="http://img.clock.co.uk/600x600" alt="" />
    </Zoombale>
  ),
  {
    info: {
      inline: true,
      text: `
      Used to zoom anything
    `,
    },
  }
);

stories.add("Default state", () => (
  <Zoombale>
    <img src="http://img.clock.co.uk/600x600" alt="" />
  </Zoombale>
));
