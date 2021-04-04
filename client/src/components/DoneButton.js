import React from "react";

function DoneButton(props) {
  return (
    <button onClick={() => props.changeDone()} className="markbutton">
      Mark
    </button>
  );
}

export default DoneButton;
