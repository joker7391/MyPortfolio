import React from "react";
import EllipsisText from "react-ellipsis-text";

function Ellipsis({ text }) {
  return (
    <div>
      {text.length < 500 ? (
        <p>{text}</p>
      ) : (
        <EllipsisText text={text} length={400} />
      )}
    </div>
  );
}

export default Ellipsis;
