import React from "react";

function Container({
  header, //this is used in 2 ways "Example header" from the first Container call, then again by the picture Container call
  children, //all of the duplicate "This is an example" <div>s & turtle <img>s are children, they get called in
  textPosition = "", // possible values: left, right, center
  direction = "horizontal", // possible values: vertical, horizontal
  contentPosition = "center", // possible values: left, right, center
}) {
  return (
    <div className={`container ${textPosition}`}> {/**/}
      {header ? <h2>{header}</h2> : null}

      <div className={`container-children ${direction} ${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;
