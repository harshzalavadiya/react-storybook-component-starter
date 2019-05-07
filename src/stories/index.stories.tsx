import centered from "@storybook/addon-centered/react";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import viewport from "@storybook/addon-viewport";
import { addDecorator, addParameters } from "@storybook/react";

addDecorator(centered);
addDecorator(withKnobs);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addParameters({ viewport });
addParameters({
  backgrounds: [
    {
      name: "Grey",
      value: "#f9f9f9"
    },
    {
      name: "White",
      value: "#ffffff",
      default: true
    }
  ]
});

const req = require.context("./", true, /.story.tsx$/);

req.keys().forEach(filename => req(filename));
