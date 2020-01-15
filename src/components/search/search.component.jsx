import React from "react";
import "./search.style.css"

export const Search = ({handleChanges,placeholder}) => {
  return <input className="search" type="search" onChange={handleChanges} placeholder={placeholder}></input>;
};
