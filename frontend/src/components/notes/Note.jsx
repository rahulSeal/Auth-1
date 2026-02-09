import React, { useEffect } from "react";
import "./note.scss";

const Note = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="notes">
      <p>Notes</p>
    </div>
  );
};

export default Note;
