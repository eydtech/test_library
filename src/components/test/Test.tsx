import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Test = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Test;
