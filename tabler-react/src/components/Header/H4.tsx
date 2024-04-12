import React from "react";
import Header, { HeaderProps } from "./Header";

export interface H4Props extends HeaderProps {}

/**
 * A Header component rendered as a h4 HTML element with a margin below
 */
function H4({ children, as, mt = 0, mb = 4, size = 4, ...props }: H4Props) {
  return (
    <Header as={as || "h4"} size={size} mt={mt} mb={mb} {...props}>
      {children}
    </Header>
  );
}

export default H4;
