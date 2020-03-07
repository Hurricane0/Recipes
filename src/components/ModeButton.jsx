import React from "react";
import s from "./ModeButton.module.css";

export default ({ toggleMode, mode }) => (
  <div
    onClick={toggleMode}
    className={`${s.button_container} ${mode ? s.light : s.dark}`}
  >
    <img
      height="40px"
      src={`${
        mode
          ? "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/OOjs_UI_icon_sun-ltr.svg/1024px-OOjs_UI_icon_sun-ltr.svg.png"
          : "https://static.thenounproject.com/png/765894-200.png"
      }`}
      alt="mode"
    />
  </div>
);
