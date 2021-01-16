import React from "react";
import classNames from "classnames/bind";

import styles from "../scss/Header.module.scss";

const cx = classNames.bind(styles);

const Header = () => <div className={cx("container")}>Header</div>;

export default Header;
