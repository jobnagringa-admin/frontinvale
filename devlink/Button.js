import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Button.module.css";

export function Button({ as: _Component = _Builtin.FormButton }) {
  return (
    <_Component
      className={_utils.cx(_styles, "form-button")}
      type="submit"
      value="Send message"
      data-wait="Please wait..."
    />
  );
}
