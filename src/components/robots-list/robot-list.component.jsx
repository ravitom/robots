import React from "react";
import "./robot-list-style.css";
import { Robots } from "../robots/robot.component";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.robots.map(robot => (
        <Robots robot={robot}></Robots>
      ))}
    </div>
  );
};
