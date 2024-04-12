import React, { forwardRef } from "react";
import cn from "classnames";
import Icon from "../Icon";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";
import NavLinkTitle from "./NavLinkTitle";

export type NavLinkProps<
  As extends React.ElementType = "a"
> = TablerComponentProps<
  As,
  {
    /**
     * @deprecated use 'as'
     */
    RootComponent?: React.ElementType;
    active?: boolean;
    icon?: string;
    to?: string;
    hasSubNav?: boolean;
    rootRef?: any;
    useExact?: boolean;
    title?: React.ReactNode;
    collapsed?: boolean;
    isToggle?: boolean;
    [key: string]: any;
  }
>;

export const NavLink = forwardRef(function (
  {
    children,
    className,
    RootComponent,
    as,
    icon,
    active = false,
    hasSubNav,
    rootRef,
    title,
    collapsed,
    isToggle,
    ...props
  }: NavLinkProps,
  ref: React.Ref<any>
) {
  const classes = cn(
    {
      "nav-link": true,
      active: active,
      collapse: isToggle && collapsed,
      show: isToggle && collapsed,
    },
    className
  );

  const Component = RootComponent || as || El.A;

  return (
    <Component
      className={classes}
      ref={rootRef || ref}
      data-toggle={isToggle ? "collapse" : undefined}
      aria-expanded={isToggle ? !collapsed : undefined}
      {...props}
    >
      {icon && (
        <React.Fragment>
          <Icon name={icon} />{" "}
        </React.Fragment>
      )}
      {title && <NavLinkTitle>{title}</NavLinkTitle>}
      {children}
    </Component>
  );
});

export default NavLink;
