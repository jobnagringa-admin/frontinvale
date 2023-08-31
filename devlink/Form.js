import React from "react";
import * as _Builtin from "./_Builtin";
import { FormHeader } from "./FormHeader";
import { InputField } from "./InputField";
import { Button } from "./Button";
import * as _utils from "./utils";
import _styles from "./Form.module.css";

export function Form({
  as: _Component = _Builtin.Block,
  textMediumText = "Cross your fingers. This is gonna be a live coding presentation that I’ve never tested before.",
  sectionHeaderHeadTextHeadingH2Text = "Teste para o Front in Vale",
}) {
  return (
    <_Component className={_utils.cx(_styles, "cta__wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "section-header_wrapper")}
        tag="div"
      >
        <FormHeader textHeadingH2Text={sectionHeaderHeadTextHeadingH2Text} />
        <_Builtin.Block
          className={_utils.cx(_styles, "text---medium")}
          tag="div"
        >
          {textMediumText}
        </_Builtin.Block>
        <_Builtin.FormWrapper className={_utils.cx(_styles, "form-wrapper")}>
          <_Builtin.FormForm
            className={_utils.cx(_styles, "form")}
            name="webflow-form"
            data-name="Webflow Form"
            method="get"
            id="webflow-form"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "input-wrapper")}
              tag="div"
            >
              <InputField />
            </_Builtin.Block>
            <Button />
          </_Builtin.FormForm>
          <_Builtin.FormSuccessMessage>
            <_Builtin.Block tag="div">
              {"Thank you! Your submission has been received!"}
            </_Builtin.Block>
          </_Builtin.FormSuccessMessage>
          <_Builtin.FormErrorMessage>
            <_Builtin.Block tag="div">
              {"Oops! Something went wrong while submitting the form."}
            </_Builtin.Block>
          </_Builtin.FormErrorMessage>
        </_Builtin.FormWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
