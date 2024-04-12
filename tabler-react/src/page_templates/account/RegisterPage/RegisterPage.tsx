import * as React from "react";

import FormCard from "../../../forms/FormCard";
import FormCheckboxInput from "../../../forms/FormCheckboxInput";
import FormTextInput from "../../../forms/FormTextInput";
import StandaloneFormPage from "../../StandaloneFormPage";

import withTouchedErrors from "../../../helpers/withTouchedErrors";

import defaultStrings from "./RegisterPage.strings";
import { stringTypes } from "./RegisterPage.strings";
import { HTMLElementProps } from "../../../types";

type fieldTypes = {
  name?: string;
  email?: string;
  password?: string;
  terms?: string;
};

type touchedTypes = {
  name?: boolean;
  email?: boolean;
  password?: boolean;
  terms?: boolean;
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
 * A register page
 * Can be easily wrapped with form libraries like formik and redux-form
 */
function RegisterPage(props: Props) {
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
          name="name"
          label={strings.nameLabel || defaultStrings.nameLabel}
          placeholder={
            strings.namePlaceholder || defaultStrings.namePlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.name}
          error={errors && errors.name}
        />
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
        <FormCheckboxInput
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.terms}
          name="terms"
          label={strings.termsLabel || defaultStrings.termsLabel}
        />
      </FormCard>
    </StandaloneFormPage>
  );
}

const RegisterPageWithTouchedErrors: React.ComponentType<
  Props
> = withTouchedErrors(["name", "email", "password", "terms"])(RegisterPage);

export default RegisterPageWithTouchedErrors;
