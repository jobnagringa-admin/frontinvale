import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InputField.module.css";

export function InputField({ as: _Component = _Builtin.FormTextInput }) {
  return (
    <_Component
      className={_utils.cx(_styles, "form-text-input")}
      autoFocus={false}
      maxLength={256}
      name="name-2"
      data-name="Name 2"
      placeholder="me@company.com"
      type="text"
      disabled={false}
      required={false}
      id="name-2"
    />
  );
}
