import * as React from "react";

import FormCard from "../../../forms/FormCard";
import FormTextInput from "../../../forms/FormTextInput";
import StandaloneFormPage from "../../StandaloneFormPage";

import withTouchedErrors from "../../../helpers/withTouchedErrors";

import defaultStrings from "./LoginPage.strings";
import { stringTypes } from "./LoginPage.strings";
import { HTMLElementProps } from "../../../types";

type fieldTypes = {
  email?: string;
  password?: string;
};

type touchedTypes = {
  email?: boolean;
  password?: boolean;
};

interface Props
  extends Omit<HTMLElementProps<HTMLFormElement>, "onChange" | "onBlur">,
    Pick<HTMLElementProps<HTMLInputElement>, "onChange" | "onBlur"> {
  strings?: stringTypes;
  action?: string;
  method?: string;
  values?: fieldTypes;
  errors?: fieldTypes;
  touched?: touchedTypes;
  logoUrl?: string;
}

/**
 * A login page
 * Can be easily wrapped with form libraries like formik and redux-form
 */
function LoginPage(props: Props) {
  const {
    action,
    method,
    onSubmit,
    onChange,
    onBlur,
    values,
    strings = {} as stringTypes,
    errors,
    logoUrl,
  } = props;

  return (
    <StandaloneFormPage imageURL={logoUrl}>
      <FormCard
        buttonText={strings.buttonText || defaultStrings.buttonText}
        title={strings.title || defaultStrings.title}
        onSubmit={onSubmit}
        action={action}
        method={method}
      >
        <FormTextInput
          name="email"
          label={strings.emailLabel || defaultStrings.emailLabel}
          placeholder={
            strings.emailPlaceholder || defaultStrings.emailPlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.email}
          error={errors && errors.email}
        />
        <FormTextInput
          name="password"
          type="password"
          label={strings.passwordLabel || defaultStrings.passwordLabel}
          placeholder={
            strings.passwordPlaceholder || defaultStrings.passwordPlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.password}
          error={errors && errors.password}
        />
      </FormCard>
    </StandaloneFormPage>
  );
}

const LoginPageWithTouchedErrors: React.ComponentType<Props> = withTouchedErrors(
  ["email", "password"]
)(LoginPage);

export default LoginPageWithTouchedErrors;
