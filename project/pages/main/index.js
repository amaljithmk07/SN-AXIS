import React, { useRef } from "react";
import style from "./main.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// https://www.figma.com/design/BD28KjVfn1vEU7fBmPhFyx/SN-axis-Option-(Copy)?node-id=0-1&t=qiyOIPo6Uk5loiVn-0

const Main = () => {
  const newsAndInsightScroll = useRef();
  const scroll = (direction) => {
    console.log(direction);
    if (newsAndInsightScroll.current) {
      newsAndInsightScroll.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={style.main_container}>
      {/* //discover legacy// */}

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className={style.main_discovery_legacy_section}>
            <img src="/images/discover-legacy-background.png" />
            <div className={style.main_discovery_legacy_title_sec}>
              <div
                className={`${style.main_discovery_legacy_title} font_playfair`}
              >
                Discover a Legacy of Financial Insight
              </div>
              <div className={style.main_discovery_legacy_sub_title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent dictum tincidunt eros id ullamcorper. Nunc pretium
                dolor vitae laoreet hendrerit. Lorem ipsum dolor sit amet,
                consectetur adipiscing.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.main_discovery_legacy_section}>
            <img src="/images/discover-legacy-background.png" />
            <div className={style.main_discovery_legacy_title_sec}>
              <div
                className={`${style.main_discovery_legacy_title} font_playfair`}
              >
                Discover a Legacy of Financial Insight
              </div>
              <div className={style.main_discovery_legacy_sub_title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent dictum tincidunt eros id ullamcorper. Nunc pretium
                dolor vitae laoreet hendrerit. Lorem ipsum dolor sit amet,
                consectetur adipiscing.
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* //Pioneer excellence// */}

      <div className={style.main_pioneering_excellence_section}>
        <div
          className={`${style.main_pioneering_excellence_title} font_playfair`}
        >
          Pioneering <span style={{ color: "#B29758" }}> Excellence</span>{" "}
          Together
        </div>
        <div className={style.main_pioneering_excellence_paragraph}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dictum tincidunt eros id ullamcorper. Nunc pretium dolor vitae
            laoreet hendrerit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. tincidunt vitae nisi. Praesent dignissim, nibh sed
            malesuada laoreet, tortor arcu pharetra felis, eu imperdiet est
            massa at diam.
          </p>
          <p>
            Aliquam faucibus, orci sed faucibus aliquet, metus turpis dapibus
            arcu, a varius nisi erat at elit. Sed in accumsan dolor. Nullam
            tristique, neque sed facilisis varius, lorem tellus efficitur nis..
          </p>
        </div>
      </div>
      {/* //Area Of Focus Section/ */}
      <div className={style.main_area_of_focus_section}>
        <div
          className={`${style.main_area_of_focus_title_sec} font_playfair`}
        >
          Area <br /> Of Focus
        </div>

        <div className={style.main_area_of_focus_card_sec}>
          <div className={style.main_area_of_focus_card_body}>
            <img
              src="/images/img-1.png"
              alt=""
              className={style.main_area_of_focus_card_img}
            />
            <div
              className={`${style.main_area_of_focus_card_title}  font_playfair`}
            >
              <div>Wealth Management</div>
              <button className={style.main_area_of_focus_card_arrow_btn}>
                <img
                  src="/images/right-arrow.png"
                  alt=""
                  className={style.right_arrow_icon}
                />
              </button>{" "}
            </div>
          </div>
          <div className={style.main_area_of_focus_card_body}>
            <img
              src="/images/img-2.png"
              alt=""
              className={style.main_area_of_focus_card_img}
            />
            <div
              className={`${style.main_area_of_focus_card_title}  font_playfair`}
            >
              {" "}
              <div>Wealth Management</div>
              <button className={style.main_area_of_focus_card_arrow_btn}>
                <img
                  src="/images/right-arrow.png"
                  alt=""
                  className={style.right_arrow_icon}
                />
              </button>{" "}
            </div>
          </div>
          <div className={style.main_area_of_focus_card_body}>
            <img
              src="/images/img-3.png"
              alt=""
              className={style.main_area_of_focus_card_img}
            />
            <div
              className={`${style.main_area_of_focus_card_title}  font_playfair`}
            >
              {" "}
              <div>Wealth Management</div>
              <button className={style.main_area_of_focus_card_arrow_btn}>
                <img
                  src="/images/right-arrow.png"
                  alt=""
                  className={style.right_arrow_icon}
                />
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* //News and insights// */}
      <div className={style.main_news_and_insight_section}>
        <div
          className={`${style.main_news_and_insight_title} font_playfair`}
        >
          {" "}
          News & <br />
          Insights
        </div>
        <div className={style.main_news_and_insight_card_btn_sec}>
          <div
            className={style.main_news_and_insight_card_container}
            ref={newsAndInsightScroll}
          >
            <button
              className={style.main_news_and_insight_card_previous_btn}
              onClick={() => scroll("left")}
            >
              <img
                src="/images/right-arrow.png"
                alt=""
                className={style.right_arrow_icon}
              />
            </button>
            <button
              className={style.main_news_and_insight_card_next_btn}
              onClick={() => scroll("right")}
            >
              <img
                src="/images/right-arrow.png"
                alt=""
                className={style.right_arrow_icon}
              />
            </button>

            <div className={style.main_news_and_insight_card}>
              <div className={style.main_news_and_insight_card_date}>
                26-07-2024
              </div>

              <img
                src="/images/news-insight-1.png"
                alt=""
                className={style.main_news_and_insight_card_img}
              />
              <div className={style.main_news_and_insight_card_news}>News </div>
              <div className={style.main_news_and_insight_card_paragraph}>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
              <div className={style.main_news_and_insight_card_read_more}>
                Read more <img src="/images/right-arrow.png" alt="" />
              </div>
            </div>
            <div className={style.main_news_and_insight_card}>
              <div className={style.main_news_and_insight_card_date}>
                26-07-2024
              </div>

              <img
                src="/images/news-insight-2.png"
                alt=""
                className={style.main_news_and_insight_card_img}
              />
              <div className={style.main_news_and_insight_card_news}>News </div>
              <div className={style.main_news_and_insight_card_paragraph}>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
              <div className={style.main_news_and_insight_card_read_more}>
                Read more <img src="/images/right-arrow.png" alt="" />
              </div>
            </div>
            <div className={style.main_news_and_insight_card}>
              <div className={style.main_news_and_insight_card_date}>
                26-07-2024
              </div>

              <img
                src="/images/news-insight-3.png"
                alt=""
                className={style.main_news_and_insight_card_img}
              />
              <div className={style.main_news_and_insight_card_news}>News </div>
              <div className={style.main_news_and_insight_card_paragraph}>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
              <div className={style.main_news_and_insight_card_read_more}>
                Read more <img src="/images/right-arrow.png" alt="" />
              </div>
            </div>
            <div className={style.main_news_and_insight_card}>
              <div className={style.main_news_and_insight_card_date}>
                26-07-2024
              </div>

              <img
                src="/images/news-insight-1.png"
                alt=""
                className={style.main_news_and_insight_card_img}
              />
              <div className={style.main_news_and_insight_card_news}>News </div>
              <div className={style.main_news_and_insight_card_paragraph}>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
              <div className={style.main_news_and_insight_card_read_more}>
                Read more <img src="/images/right-arrow.png" alt="" />
              </div>
            </div>
          </div>
          <button className={style.main_news_and_insight_btn}>
            <div className={style.main_news_and_insight_btn_background}></div>
            <span> View All News</span>
            <img src="/images/right-arrow.png" alt="" />
          </button>
          {/* /// */}
        </div>
      </div>
      {/* //// */}
      <div className={style.main_choose_the_right_investment_section}>
        <div className={style.main_choose_the_right_investment_title_sec}>
          <div
            className={`${style.main_choose_the_right_investment_title}  font_playfair`}
          >
            Choose the Right <br /> Investment Approach
          </div>
          <div className={style.main_choose_the_right_investment_paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent{" "}
            <br />
            dictum tincidunt eros id ullamcorper.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
