import * as React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

export type TableColProps<
  As extends React.ElementType = "td"
> = TablerComponentProps<
  As,
  {
    alignContent?: "left" | "center" | "right";
  }
>;

function TableCol({
  className,
  children,
  alignContent,
  ...rest
}: TableColProps) {
  const classes = cn({ [`text-${alignContent}`]: alignContent }, className);
  return (
    <El.Td className={classes} {...rest}>
      {children}
    </El.Td>
  );
}

export default TableCol;
