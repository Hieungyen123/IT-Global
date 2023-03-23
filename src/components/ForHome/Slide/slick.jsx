import React from "react";
import styled from "./Slide.module.scss";
import classNames from "classnames/bind";
import user from "../../Image/user1.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const cx = classNames.bind(styled);


export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className={cx("user-content")}>
            <div className={cx("header")}>
              <img src={user} alt="" />
              <div className={cx("user")}>
                <h6>N.D.Tuyến</h6>
                <p>descripsion</p>
              </div>
            </div>
            <p className={cx("description")}>
              “There are many variations of passages of Lorem Ipsum available in
              some form by injected humour. There are many variations of
              passages of lorem ipsum available.”
            </p>
            <div className={cx("icon")}>
              <FacebookOutlinedIcon />
              <p> https://t.me/s/christina_b </p>
            </div>
          </div>
          <div className={cx("user-content")}>
            <div className={cx("header")}>
              <img src={user} alt="" />
              <div className={cx("user")}>
                <h6>N.D.Tuyến</h6>
                <p>descripsion</p>
              </div>
            </div>
            <p className={cx("description")}>
              “There are many variations of passages of Lorem Ipsum available in
              some form by injected humour. There are many variations of
              passages of lorem ipsum available.”
            </p>
            <div className={cx("icon")}>
              <FacebookOutlinedIcon />
              <p>https://t.me/s/christina_b</p>
            </div>
          </div>
          <div className={cx("user-content")}>
            <div className={cx("header")}>
              <img src={user} alt="" />
              <div className={cx("user")}>
                <h6>N.D.Tuyến</h6>
                <p>descripsion</p>
              </div>
            </div>
            <p className={cx("description")}>
              “There are many variations of passages of Lorem Ipsum available in
              some form by injected humour. There are many variations of
              passages of lorem ipsum available.”
            </p>
            <div className={cx("icon")}>
              <FacebookOutlinedIcon />
              <p>https://t.me/s/christina_b</p>
            </div>
          </div>
          <div className={cx("user-content")}>
            <div className={cx("header")}>
              <img src={user} alt="" />
              <div className={cx("user")}>
                <h6>N.D.Tuyến</h6>
                <p>descripsion</p>
              </div>
            </div>
            <p className={cx("description")}>
              “There are many variations of passages of Lorem Ipsum available in
              some form by injected humour. There are many variations of
              passages of lorem ipsum available.”
            </p>
            <div className={cx("icon")}>
              <FacebookOutlinedIcon />
              <p>https://t.me/s/christina_b</p>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}
