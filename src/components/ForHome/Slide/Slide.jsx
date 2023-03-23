import React from "react";
import styled from './Slide.module.scss'
import classNames from 'classnames/bind';
import img from "../../Image/testimonialgraphics.png";
import user from "../../Image/user1.jpg";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SimpleSlider from "./slick";
function Slide() {

    const cx = classNames.bind(styled)
    return ( 
        <div className={cx('slide')}>
            <div className="container">
                <div className={cx('content')}>
                    <img src={img} alt="" />
                    <div className={cx('slide-content')}>
                        <h2>Tâm Tư Khách Hàng</h2>
                        <div><SimpleSlider/></div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Slide;
