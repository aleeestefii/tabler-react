import * as React from "react";

import { storiesOf } from "@storybook/react";

import ForgotPasswordPage from ".";
import examples from "./ForgotPasswordPage.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Page Templates/ForgotPasswordPage", module);

stories.add(
  "Example",
  () => {
    return <ForgotPasswordPage />;
  },
  {
    notes: { markdown: examples },
  }
);
