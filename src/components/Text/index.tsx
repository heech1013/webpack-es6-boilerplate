import React from "react";
import className from "classnames/bind";

import style from "./mobileDefault.module.scss";

const cx = className.bind(style);

interface propTypeText {
  text: string;
  type?: string;
}

const Text = ({ text, type }: propTypeText) => (
  <div className={cx(type)}>{text}</div>
);

Text.defaultProps = {
  type: "normal",
};

export default Text;
