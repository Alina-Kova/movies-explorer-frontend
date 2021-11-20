import React from "react";
import { FormValidation } from "../../utils/FormValidation";
import { AuthorizationForm } from "../AuthorizationForm/AuthorizationForm";
import { Input } from "../Input/Input";
import { Authorization } from "../Authorization/Authorization";

export const Login = (props) => {
	const { handleLogin } = props;

	const emailField = FormValidation();
	const passwordField = FormValidation();

	const handleSubmit = (e) => {
		e.preventDefault();
		handleLogin(emailField.value, passwordField.value);
	};

	return (
		<Authorization
			authorizationTitle="Рады видеть!"
			linkHighlightedText="Регистрация"
			linkText="Ещё не зарегистрированы?"
			linkAddress="/signup"
			hasLogo={true}
		>
			<AuthorizationForm
				formName="login"
				submitButtonText="Войти"
				isFormValid={emailField.isValid && passwordField.isValid}
				handleSubmit={handleSubmit}
			>
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
