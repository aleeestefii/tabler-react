// @flow

import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";

import { Reference } from "react-popper";
import { ReferenceChildrenProps } from "react-popper";
import DropdownContext from "./DropdownContext";
import { colors } from "../../colors";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export type DropdownTriggerProps<
  As extends React.ElementType = "div"
> = TablerComponentProps<
  As,
  {
    /**
     * Display an arrow alongside the trigger content
     */
    toggle?: boolean;
    /**
     * The value to be displayed within the trigger if children is not included
     */
    value?: string;
    /**
     * The background color for a Button trigger
     */
    color?: colors;
    /**
     * An Icon displayed to the left of the trigger content
     */
    icon?: string;
    /**
     * Is this trigger being used as a NavLink
     */
    isNavLink?: boolean;
    /**
     * Is this trigger beind used as a Card.Header option
     */
    isOption?: boolean;
  }
>;

/**
 * Provides the trigger element for a Dropdown
 */
function DropdownTrigger<As extends React.ElementType = typeof El.Button>({
  className,
  toggle = true,
  value,
  children,
  icon,
  isNavLink,
  isOption,
  as,
  ...rest
}: DropdownTriggerProps<As>) {
  const [isOpen, setIsOpen] = React.useContext(DropdownContext);

  const Component = as || El.Button;
  const classes = cn(
    {
      "dropdown-toggle": toggle,
      "nav-link": isNavLink,
      "btn-option": isOption,
    },
    className
  );

  const childrenFragment = (
    <React.Fragment>
      {icon && (
        <React.Fragment>
          <Icon name={icon} />{" "}
        </React.Fragment>
      )}
      {value}
      {children}
    </React.Fragment>
  );

  return (
    <Reference>
      {({ ref }: ReferenceChildrenProps) => (
        <Component
          className={classes}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          ref={ref}
          {...rest}
        >
          {childrenFragment}
        </Component>
      )}
    </Reference>
  );
}

/** @component */
export default DropdownTrigger;
