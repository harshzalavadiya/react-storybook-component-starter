import * as React from "react";
import { ColorProperty } from "csstype";

export interface IProps {
  color: ColorProperty;
  style?: React.CSSProperties;
  onClick: () => void;
  children: React.ReactNode;
}

export function Button(props: IProps) {
  return (
    <button
      style={{
        backgroundColor: props.color
      }}
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
}
