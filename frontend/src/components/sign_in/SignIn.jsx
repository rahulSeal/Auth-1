import axios from "axios";
import React from "react";
import "./signin.scss";

const SignIn = ({ onClose, onSuccess, onError, onEmpty }) => {
  function register(e) {
    e.preventDefault();

    const { name, email, password } = e.target.elements;

    if ((!name.value, !email.value, !password.value)) {
      return onEmpty();
    } else {
      axios
        .post("https://auth-1-l3ng.onrender.com/api/auth/register", {
          name: name.value,
          email: email.value,
          password: password.value,
        })
        .then((res) => {
          onClose();
          onSuccess();
        })
        .catch(() => {
          onError();
        });
    }
  }

  return (
    <div className="sign-back" onClick={onClose}>
      <div className="sign-form-back" onClick={(e) => e.stopPropagation()}>
        <form className="signin-form" onSubmit={register}>
          <input name="name" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email Address" />
          <input
            name="password"
            type="text"
            placeholder="Create New Password"
          />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
