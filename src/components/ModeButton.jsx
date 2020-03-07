import React from "react";
import s from "./ModeButton.module.css";
import { IconContext } from "react-icons";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

export default ({ toggleMode, mode }) => (
  <IconContext.Provider
    value={{
      color: `${mode ? "#3f3f3f" : "#757575"}`,
      className: "global-class-name",
      size: `${mode ? "25px" : "20px"}`
    }}
  >
    <div
      onClick={toggleMode}
      className={`${s.button_container} ${mode ? s.light : s.dark}`}
    >
      {mode ? <FiSun /> : <FaRegMoon />}
    </div>
  </IconContext.Provider>
);
