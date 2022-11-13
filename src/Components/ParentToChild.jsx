import React from "react";
import "./ParentToChild.css";

function ParentToChild(props) {
  
  return (
    <div className="main">
      <div className="cards" style={{ backgroundColor: props.hashcode }}>
        <div className="title">
          <h6>{props.title}</h6>
          <p>{props.color}</p>
        </div>
      </div>

    </div>
  );

  
}

export default ParentToChild;