import * as React from "react";
import cn from "classnames";
import { HeaderProps } from "../Header/Header";
import El from "../El/El";

export interface CardTitleProps extends HeaderProps {}

function CardTitle({
  className,
  children,
  RootComponent,
  as,
  ...rest
}: CardTitleProps) {
  const classes = cn("card-title", className);
  const Component = RootComponent || as || El.H3;
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

export default CardTitle;
