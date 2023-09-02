import * as React from "react";
import * as Types from "./types";

declare function GridComponent(props: {
  as?: React.ElementType;
  children?: Types.Devlink.Slot;
}): React.JSX.Element;
