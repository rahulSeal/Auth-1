import React, { useEffect } from "react";
import "./emailExists.scss";

const EmailExits = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="emailExists-page"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <p>Account with this email is already exist</p>
    </div>
  );
};

export default EmailExits;
