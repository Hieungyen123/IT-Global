import React from "react";
import styled from './DoThings.module.scss'
import classNames from 'classnames/bind';
import img1 from '../../Image/serviceimg1.png'
import img2 from '../../Image/serviceimg2.png'
import img3 from '../../Image/serviceimg3.png'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function DoThings() {

    const cx = classNames.bind(styled)

    return ( 
        <div className={cx('DoThings')}>
            <div className={cx('content')}>
                <div className={cx('tab')}>
                    <div className="container">
                        <div className={cx('flex')} >
                            <div className={cx('item')}>
                                <img src={img1} alt=""  className={cx('img')}/>
                                <div>
                                    <div className={cx('Dothing')}>
                                        <h2>Thiết kế website</h2>
                                        <div  className={cx('Dothing-content')}>
                                            <p>
                                                IT-Global với đội ngũ lập trình viên chất lượng và chuyên môn hóa cao, 
                                                là địa chỉ tin cậy cho anh chị em các ngành nghề như Marketing, 
                                                Quảng Cáo hay Thiết kế website, lập trình phần mềm… muốn out source các mảng khác nhau
                                            </p>
                                            <ul>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Giao diện đẹp, hiện đại</p> </li>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Thân thiện với các loại thiết bị</p> </li>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Đảm bảo các tiêu chuẩn SEO</p> </li>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Bảo mật dữ liệu khách hàng</p> </li>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Dễ dàng mở rộng, nâng cấp theo yêu cầu của khách hàng</p> </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <img src={img2} alt=""  className={cx('img')}/>
                                <div>
                                    <div className={cx('Dothing')}>
                                        <h2>Lập trình ứng dụng di động</h2>
                                        <div  className={cx('Dothing-content')}>
                                            <p>
                                                Lập trình ứng dung IOS/Android theo các công nghệ di động mới nhất từng thời điểm. 
                                                Đáp ứng được những yêu cầu kĩ thuật cao cấp mà website bị giới hạn. 
                                                Việc sở hữu một ứng dụng smartphone hoàn chỉnh giúp doanh nghiệp chiếm được nhiều thiện cảm trong mắt khách hàng
                                            </p>
                                            <ul>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Hoạt động trên các hệ điều hành di động (Android, iOS)</p> </li>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Giao diện chuyên nghiệp, dễ tương tác</p> </li>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Hoạt động mượt mà trên hầu hết các smartphone</p> </li>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Bảo mật dữ liệu khách hàng</p> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <img src={img3} alt=""  className={cx('img')}/>
                                <div>
                                    <div className={cx('Dothing')}>
                                        <h2>Tư vấn - Thiết kế phần mềm</h2>
                                        <div  className={cx('Dothing-content')}>
                                            <p>
                                                Tư vấn và thiết kế phần mềm chuyên biệt phục vụ nhu cầu kinh doanh và quản lý của doanh nghiệp
                                                
                                            </p>
                                            <ul>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Đa nền tảng: Desktop, Web app, Mobile app</p> </li>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Tư vấn miễn phí cho khách hàng</p> </li>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Tối ưu chi phí</p> </li>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Nâng cao hiệu năng xử lý nghiệp vụ</p> </li>
                                                <li> <CheckCircleIcon className={cx('icon')}/> <p>Dễ dàng mở rộng, nâng cấp theo yêu cầu của khách hàng</p> </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DoThings;
