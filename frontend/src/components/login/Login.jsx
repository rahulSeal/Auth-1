import React, { useState } from "react";
import axios from "axios";
import "./login.scss";

const Login = ({ onError, onClose, onSuccess }) => {
  function userData(e) {
    e.preventDefault();

    const { email, password } = e.target.elements;

    if ((!email.value && !password.value)) {
      return onError();
    } else {
      axios
        .post("https://auth-1-l3ng.onrender.com/api/auth/login", {
          email: email.value,
          password: password.value,
        })
        .then((res) => {
          onClose();
          onSuccess();
        })
        .catch(() => {
          onError()
        });
    }
  }

  return (
    <div className="log-bg" onClick={onClose}>
      <div
        className="log-form-back"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form className="login-form" onSubmit={userData}>
          <input name="email" type="text" placeholder="Enter email address" />
          <input name="password" type="text" placeholder="Enter password" />
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
