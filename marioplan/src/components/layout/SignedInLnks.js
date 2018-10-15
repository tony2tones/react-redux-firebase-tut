import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/" />
      </li>
      <li>
        <NavLink to="/" />
      </li>
      <li>
        <NavLink to="/" />
      </li>
      <li>
        <NavLink to="/" />
      </li>
    </ul>
  );
};

export default SignedInLinks;
