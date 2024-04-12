import React from "react";
import cn from "classnames";
import FormLabel from "./FormLabel";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export interface FormGroupProps extends TablerComponentProps<"label"> {
  label?: React.ReactNode;
  isRequired?: boolean;
  /**
   * @deprecated
   */
  inputProps?: any;
}

function FormGroup({
  className,
  children,
  label,
  isRequired,
  ...rest
}: FormGroupProps) {
  const classes = cn("form-group", className);
  return (
    <El.Div className={classes} {...rest}>
      {!label ? null : typeof label === "string" ? (
        <FormLabel>
          {label}
          {isRequired && <span className="form-required">*</span>}
        </FormLabel>
      ) : (
        label
      )}
      {children}
    </El.Div>
  );
}

export default FormGroup;
