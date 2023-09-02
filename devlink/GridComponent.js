import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GridComponent.module.css";

export function GridComponent({ as: _Component = _Builtin.Block, children }) {
  return (
    <_Component className={_utils.cx(_styles, "style-guide_grid")} tag="div">
      {children}
    </_Component>
  );
}
