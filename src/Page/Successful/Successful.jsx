import React from "react";
import styled from './Successful.module.scss'
import classNames from 'classnames/bind';
import camera from '../../components/Image/camera.jpg'
import hosodientu from '../../components/Image/hosodientu.jpg'
import thuexe from '../../components/Image/thuexe.png'
import store from '../../components/Image/store.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Successful() {

    const cx = classNames.bind(styled)


    return (  
        <div className={cx('successfull')}>
            <div className="container">
                <div className={cx('width')}>
                    <div className={cx('title')}>
                        <h2>Dự án thành công</h2>
                        <p>Đây là những dự án mà IT-Global đã hoàn thành và thành công.</p>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('item')}>
                            <img src={camera} alt="err" className={cx('image')} />
                            <div className={cx('successfull-content-p')}>
                                <h5>Camera Phương Nghi</h5>
                                <p>
                                    Có các sản phẩm và giải pháp của Camera Phương Nghi thì thiệc giám sát của quý khách sẽ được tối ưu hơn, 
                                    có thể giám sát từ xa từ nhiều nơi với nhiều chức năng khác nhau.
                                </p>
                            </div>
                            <div>
                                <div  className={cx('more')}>
                                    <div>xem thêm </div>
                                    <ArrowRightAltIcon className={cx('icon')}/>
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={hosodientu} alt="err" className={cx('image')} />
                            <div className={cx('successfull-content-p')}>
                                <h5>Hồ sơ điện tử</h5>
                                <p>
                                    Hồ sơ điện tử sinh viên là website có thể đăng ký kế hoạch học tập, đăng ký môn học và quản lý điểm học tập
                                    cũng như lịch học của sinh viên.
                                </p>
                            </div>
                            <div>
                                <div className={cx('more')}>
                                    <div>xem thêm </div>
                                    <ArrowRightAltIcon className={cx('icon')}/>
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={thuexe} alt="err" className={cx('image')} />
                            <div className={cx('successfull-content-p')}>
                                <h5>Thuê xe miền Nam</h5>
                                <p> 
                                    Thuexemiennam là đơn vị tiên phong cung cấp các dịch vụ thuê xe mang lại trải nghiệm tốt nhất cho khách hàng
                                    khi ngồi trên xe.                       
                                </p>
                            </div>
                            <div>
                                <div  className={cx('more')}>
                                    <div>xem thêm </div>
                                    <ArrowRightAltIcon className={cx('icon')}/>
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={store} alt="err" className={cx('image')} />
                            <div className={cx('successfull-content-p')}>
                                <h5>Hiếu táo store</h5>
                                <p>
                                    Hiếu Táo là cửa hàng bán lẻ chuyên về các dòng sản phẩm của Apple. Chúng tôi luôn mang cho bạn những dòng
                                    sản phẩm chất lượng nhất.
                                </p>
                            </div>
                            <div>
                                <div  className={cx('more')}>
                                    <div>xem thêm </div>
                                    <ArrowRightAltIcon className={cx('icon')}/>
                                </div>
                            </div>
                        </div>


                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Successful;