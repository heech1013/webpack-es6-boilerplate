import React from "react";
import classNames from "classnames/bind";

import Text from "./Text";
import styles from "../scss/Header.module.scss";

const cx = classNames.bind(styles);

const Header = () => (
  <div className={cx("container")}>
    <div className={cx("profile")} />
    <div className={cx("logoWrapper")}>
      <Text text="힙팡" type="logo" />
    </div>
  </div>
);

export default Header;
