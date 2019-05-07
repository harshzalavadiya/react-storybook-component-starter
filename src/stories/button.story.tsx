import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import Button from "..";

const options = ["red", "blue", "yellow"];

storiesOf("Button", module).add(
  "with text",
  () => (
    <Button
      color={select("Color", options, options[0])}
      onClick={action("clicked")}
    >
      {text("Label", "Hello Storybook")}
    </Button>
  ),
  { info: { inline: false } }
);
