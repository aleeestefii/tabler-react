import * as React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface CardMapProps
  extends TablerComponentProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  placeholder?: string;
}

function CardMap({ className, children, placeholder, ...rest }: CardMapProps) {
  const classes = cn(
    "card-map",
    { "card-map-placeholder": placeholder },
    className
  );
  return (
    <El.Div
      className={classes}
      style={placeholder ? { backgroundImage: `url(${placeholder})` } : {}}
      {...rest}
    >
      {children}
    </El.Div>
  );
}

export default CardMap;
