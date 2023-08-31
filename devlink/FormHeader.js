import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormHeader.module.css";

export function FormHeader({
  as: _Component = _Builtin.Block,
  textHeadingH2Text = "Teste para o Front in Vale",
}) {
  return (
    <_Component className={_utils.cx(_styles, "section-header_head")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "vectors-wrapper")}
        loading="lazy"
        width={180}
        height={25}
        src="https://uploads-ssl.webflow.com/64efda0f068f608526d6a4c1/64efdde0c132a6d5a98b83ef_Vectors-Wrapper.svg"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "text-heading-h2")}
        tag="div"
      >
        {textHeadingH2Text}
      </_Builtin.Block>
    </_Component>
  );
}
