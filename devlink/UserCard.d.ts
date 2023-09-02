import * as React from "react";
import * as Types from "./types";

declare function UserCard(props: {
  as?: React.ElementType;
  userCardThumbnail?: Types.Asset.Image;
  cardTitleText?: React.ReactNode;
  cardEmail?: React.ReactNode;
  cardTag?: React.ReactNode;
  buttonSmallLink?: Types.Basic.Link;
  buttonLabelText?: React.ReactNode;
  buttonSmallSecondaryLink?: Types.Basic.Link;
  buttonLabelSecondaryText?: React.ReactNode;
}): React.JSX.Element;
