import React, { useState } from "react";

import styled from "./QandA.module.scss";
import classNames from "classnames/bind";
import team from "../../components/Image/team.jpg";
import anhtan from "../../components/Image/anhtan2.jpg"
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
function QandA() {
  const cx = classNames.bind(styled);

  const [activeItemOne, setActiveItemOne] = useState(true);
  const [activeItemTwo, setActiveItemTwo] = useState(true);

  const handleActiveOne = () => {
    setActiveItemOne(!activeItemOne);
    setActiveItemTwo(true);
  };
  const handleActiveTwo = () => {
    setActiveItemTwo(!activeItemTwo);
    setActiveItemOne(true);
  };

  return (
    <div className={cx("QandA")}>
      <div className="container">
        <div className={cx("flex")}>
          <div className={cx("content")}>
            <div className={cx("QandA-content")}>
              <h2>FAQs</h2>
              <p className={cx("QandA-content-p")}>
                IT-Global xin phép giải đáp một số thắc mắc chung của Quý khách.
              </p>

              <div className={cx("list-QandA")}>
                <div className={cx("card")}>
                  <div className={cx("title")}>
                    <h4>Quy trình phát triển phần mềm tại It-Global</h4>
                    <AddTwoToneIcon
                      className={cx("icon")}
                      onClick={() => handleActiveOne()}
                    />
                  </div>
                  <div
                    className={cx(activeItemOne ? "listHiden" : "listActive")}
                  >
                    <p>1. Lấy yêu cầu từ khách hàng</p>
                    <p>2. Phân tích - thiết kế hệ thống</p>
                    <p>3. Nhận phản hồi từ khách hàng</p>
                    <p>4. Phát triển hệ thống</p>
                    <p>5. Nhận phản hồi từ khách hàng</p>
                    <p>6. Hoàn thiện hệ thống</p>
                    <p>7. Bảo trì hệ thống.</p>
                  </div>
                </div>
                <div className={cx("card")}>
                  <div className={cx("title")}>
                    <h4>Các công nghệ được IT-Global sử dụng ?</h4>
                    <AddTwoToneIcon
                      className={cx("icon")}
                      onClick={() => handleActiveTwo()}
                    />
                  </div>
                  <div
                    className={cx(
                      activeItemTwo ? "listHiden" : "listActiveTwo"
                    )}
                  >
                    <p>
                      1. Thiết kế website: HTML, CSS, JS, Laravel, Reactjs,
                      Vuejs, Nodejs, Angular,..
                    </p>
                    <p>
                      2. Lập trình ứng dụng di động: Java, React Native,
                      Fluter,..
                    </p>
                    <p>
                      3. Lập trình phần mềm ứng dụng Desktop: .Net Framework
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx("maxim")}>
                <p>
                  "Chúng tôi luôn nỗ lực hết sức để mang lại những trải nghiệm
                  hoàn hảo, hiệu quả trong công việc cho Khách hàng với một chi
                  phí tối ưu."
                </p>
              </div>

              <div className={cx("anhtan")}>
                <div className={cx("header")}>
                  <img src={anhtan} alt="" />
                  <div className={cx("user")}>
                    <h6>Nguyễn Minh Tân</h6>
                    <p>Founder, CEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("img")}>
              <img src={team} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QandA;
