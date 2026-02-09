import React, { useEffect } from "react";
import "./userNotFound.scss";

const UserNotFound = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="userNotFound-page"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <p>User not found</p>
    </div>
  );
};

export default UserNotFound;
