import React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El";

export interface TimelineItemTitleProps extends TablerComponentProps {
  children?: React.ReactNode;
  active?: boolean;
}

function TimelineItemTitle({
  children,
  className,
  active,
  ...rest
}: TimelineItemTitleProps) {
  const _className = cn("list-timeline-title", {}, className);
  return (
    <El.P className={_className} {...rest}>
      {active ? <strong>{children}</strong> : children}
    </El.P>
  );
}

export default TimelineItemTitle;
