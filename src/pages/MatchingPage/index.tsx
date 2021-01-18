import React from "react";
import classNames from "classnames/bind";
import { Button } from "semantic-ui-react";

import Text from "../../components/Text";
import styles from "./mobileDefault.module.scss";

const cx = classNames.bind(styles);

const Matching = () => (
  <div className={cx("container")}>
    <div className={cx("header")}>
      <div className={cx("profileWrapper")}>
        <Button circular icon="user outline" size="large" />
      </div>
      <div className={cx("logoWrapper")}>
        <Text text="힙팡" type="logo" />
      </div>
      <div className={cx("helpWrapper")}>
        <Button circular icon="question" size="large" />
      </div>
    </div>
  </div>
);

export default Matching;
