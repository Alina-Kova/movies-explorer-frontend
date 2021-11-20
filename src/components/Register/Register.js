import React from "react";
import { FormValidation } from "../../utils/FormValidation";
import { AuthorizationForm } from "../AuthorizationForm/AuthorizationForm";
import { Input } from "../Input/Input";
import { Authorization } from "../Authorization/Authorization";

export const Register = (props) => {
  const { handleLogin } = props;
  const nameField = FormValidation();
  const emailField = FormValidation();
  const passwordField = FormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(nameField.value, emailField.value, passwordField.value);
  };

  return (
    <Authorization
      authorizationTitle="Добро пожаловать!"
      linkHighlightedText="Войти"
      linkText="Уже зарегистрированы?"
      linkAddress="/signin"
      hasLogo={true}
    >
      <AuthorizationForm
        formName="registration"
        submitButtonText="Зарегистрироваться"
        isFormValid={nameField.isValid && emailField.isValid && passwordField.isValid}
        handleSubmit={handleSubmit}
      >
        <Input
          field={nameField}
          labelName="Имя"
          minlength="2"
          inputName="name"
          type="text"
          required="true"
        />
        <Input
          field={emailField}
          labelName="E-mail"
          minlength="2"
          inputName="email"
          type="text"
          required="true"
        />
        <Input
          field={passwordField}
          labelName="Пароль"
          minlength="2"
          inputName="password"
          type="password"
          required="true"
        />
      </AuthorizationForm>
    </Authorization>
  );
}
