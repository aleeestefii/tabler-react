import * as React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import { colors } from "../../colors";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface ProgressBarProps
  extends TablerComponentProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  color?: colors;
  width?: number;
}

function ProgressBar({
  className,
  color,
  width = 0,
  style,
  ...rest
}: ProgressBarProps) {
  const classes = cn(`progress-bar`, { [`bg-${color}`]: !!color }, className);
  return (
    <El.Div
      className={classes}
      style={{ width: `${width}%`, ...style }}
      {...rest}
    />
  );
}

export default ProgressBar;
