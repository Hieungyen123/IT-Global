import React from "react";
import styled from './Introduce.module.scss'
import classNames from 'classnames/bind';

function Introduce() {
    const cx = classNames.bind(styled)
    return (  
        <div className={cx('introduce')}>
            <div className="container">
                    <div>
                        <div className={cx("title")}>
                            <h2>Giới Thiệu Công Ty Chúng Tôi</h2>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('none-flex')}>
                                <div className={cx('none')}></div>
                                <div className={cx('item-introduce')}>
                                    <div className={cx('item-introduce-content')}>
                                        <h4>IT-Global Lĩnh vực về công nghệ thông tin</h4>
                                        <div className={cx('item-introduce-p')}>
                                            <p>
                                                Chúng tôi tin rằng mỗi khách hàng là đối tác của chúng tôi và chúng tôi hợp tác với bạn để cung cấp dịch vụ CNTT chất lượng, chi phí hợp lý. 
                                                Đội ngũ chuyên gia CNTT thân thiện, giàu kinh nghiệm và đáng tin cậy của chúng tôi sẽ đến tận nơi, gọi điện, gửi email hoặc nhắn tin để hổ trợ khách hàng. 
                                                Chúng tôi luôn hổ trợ phía sau bạn để đảm bảo hiệu quả trong hoạt động của các công cụ và hệ thống của bạn nhằm đạt được mức năng suất cao nhất. 
                                            </p> 
                                            <br/>
                                            <p>
                                                Sứ mệnh của chúng tôi là mang đến nền tảng vận hành số hóa doanh nghiệp. 
                                                Đồng hành cùng doanh nghiệp trên con đường đưa Việt Nam trở thành nền kinh tế dựa trên khoa học kỹ thuật.
                                            </p>
                                            <br/>
                                            <p>
                                                Hoạt động với phương châm đặt lợi ích khách hàng trên hết. 
                                                Chúng tôi có một khát khao cháy bỏng là làm cho doanh nghiệp hoạt động hiệu quả hơn, nhanh chóng hơn
                                            </p>
                                            <br/>
                                            <p>
                                                Đội ngũ nhân viên làm việc say mê, yêu thích công nghệ và luôn hướng đến cái mới trong mọi công việc. 
                                                Luôn luôn hết mình với lý tưởng của lãnh đạo.
                                            </p>
        
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className={cx('item-infor')}>
                                <div className={cx('item-infor-content')}>
                                    <h4>THÔNG TIN LIÊN HỆ IT-GLOBAL</h4>
                                        <div className={cx('item-infor-content-p')}>
                                            <p>
                                                <b> - Trụ sở:</b> <span>2/1/15 đường 40, F Hiệp Bình Chánh, Tp. Thủ Đức</span>
                                            </p> <br />
                                            <p>
                                                <b> - Điện thoại:</b> <span>0987.613.161 to Mr.Tân</span>
                                            </p> <br />
                                            <p>
                                                <b> - Email:</b> <span>info@it-global.net</span>
                                            </p> 
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    );
}

export default Introduce;
