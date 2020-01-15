import React from "react";
import "./robots.styles.css";

export const Robots = props => {
  return (
    <div className="card-container" key={props.robot.id}>
      <img
        src={`https://robohash.org/${props.robot.id}?set=set5&size=200x200`}
      ></img>
      <h2>{props.robot.name}</h2>
      <p>{props.robot.email}</p>
    </div>
  );
};
