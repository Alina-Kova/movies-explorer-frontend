import React from "react";
import { Link } from "react-router-dom";
import './AuthorizationForm.css';

export const AuthorizationForm = () => {
    return (
        <Link to="/profile" className="authorization-link">
            Аккаунт
            <div className="authorization-link__icon" />
        </Link>
    );
}
