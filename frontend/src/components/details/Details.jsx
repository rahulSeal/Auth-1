import React, { useEffect } from "react";
import "./details.scss";

const Details = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="details-page">
      <p>Please enter your details</p>
    </div>
  );
};

export default Details;
