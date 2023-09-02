import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./UserCard.module.css";

export function UserCard({
  as: _Component = _Builtin.Block,
  userCardThumbnail = "https://uploads-ssl.webflow.com/64efda0f068f608526d6a4c1/64f22ba6753d8def9271d6e3_user-card__thumbnail.png",
  cardTitleText = "Mary Costler",
  cardEmail = "mary@rmail.com",
  cardTag = "Top Developer",

  buttonSmallLink = {
    href: "#",
  },

  buttonLabelText = "Hire",

  buttonSmallSecondaryLink = {
    href: "#",
  },

  buttonLabelSecondaryText = "Visit Profile",
}) {
  return (
    <_Component className={_utils.cx(_styles, "user-card__wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "user-card__header")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "user-card__thumbnail-wrapper")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "user-card__thumbnail")}
            loading="lazy"
            width={50}
            height={52}
            src={userCardThumbnail}
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "vectors-wrapper")}
            loading="lazy"
            width={20}
            height={20}
            src="https://uploads-ssl.webflow.com/64efda0f068f608526d6a4c1/64f22ba78ae6c7f97b2facdf_Vectors-Wrapper.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "", "user-card__header")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "card__title")}
            tag="div"
          >
            {cardTitleText}
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "text")} tag="div">
            {cardEmail}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "user-card__tag--featured")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "card__tag-title")}
              tag="div"
            >
              {cardTag}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "button__group")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "button-small")}
          button={false}
          options={buttonSmallLink}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "button-label")}
            tag="div"
          >
            {buttonLabelText}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "button-small--secondary")}
          button={false}
          options={buttonSmallSecondaryLink}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "button-label--secondary")}
            tag="div"
          >
            {buttonLabelSecondaryText}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
