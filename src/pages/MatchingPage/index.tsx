import React, { useRef, useEffect } from "react";
import classNames from "classnames/bind";
import { Button } from "semantic-ui-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Text from "../../components/Text";
import styles from "./mobileDefault.module.scss";
import dummyImage1 from "../../assets/dummy_image_1.png";

const cx = classNames.bind(styles);

const Matching = () => {
  const imageEl = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageEl.current) {
      // @ trying several ways to set img height dynamically...
      // const imageWidth = imageEl.current.offsetWidth;
      // imageEl.current.height = imageWidth;
      // imageEl.current.style.height = `${imageWidth}px`;
      // imageEl.current.setAttribute("style", "height: 414px;");
    }
  });

  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("profileWrapper")}>
          <Button circular icon="user outline" size="large" />
        </div>
        <div className={cx("logoWrapper")}>
          <Text text="Title" type="logo" />
        </div>
        <div className={cx("helpWrapper")}>
          <Button circular icon="question" size="large" />
        </div>
      </div>

      {/* Image slider */}
      <Slider
        className={cx("slider")}
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        <img
          ref={imageEl}
          className={cx("image")}
          src={dummyImage1}
          alt="dummyImage1"
        />
        <img
          ref={imageEl}
          className={cx("image")}
          src={dummyImage1}
          alt="dummyImage2"
        />
        <img
          ref={imageEl}
          className={cx("image")}
          src={dummyImage1}
          alt="dummyImage3"
        />
        <img
          ref={imageEl}
          className={cx("image")}
          src={dummyImage1}
          alt="dummyImage4"
        />
        <img
          ref={imageEl}
          className={cx("image")}
          src={dummyImage1}
          alt="dummyImage5"
        />
      </Slider>

      {/* profile */}

      {/* footer */}
    </div>
  );
};

export default Matching;
