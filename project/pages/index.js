import React, { useEffect, useState } from "react";
import style from "@/styles/Home.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// console.log(router);

// https://www.figma.com/design/BD28KjVfn1vEU7fBmPhFyx/SN-axis-Option-(Copy)?node-id=0-1&t=qiyOIPo6Uk5loiVn-0

export default function page() {
  const router = useRouter();
  useEffect(() => {
    setLang(router.locale);
  }, []);
  const [lang, setLang] = useState();

  console.log(lang);
  return (
    <>
      <div
        className={`${style.main_container} ${lang == "ar" ? "rtl" : "ltr"}`}
      >
        {/* //discover legacy// */}

        <Swiper
          // dir={lang === "en" ? "ltr" : "rtl"}
          // dir="rtl"
          pagination={true}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide
            style={{
              background:
                "url(/images/discover-legacy-background.png) center top",
              backgroundSize: "cover",
            }}
          >
            <div className={`${style.main_discovery_legacy_section} container`}>
              <div className={style.main_discovery_legacy_title_sec}>
                <div className={`${style.main_discovery_legacy_title}`}>
                  <h1>Discover A Legacy Of Financial Insight</h1>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent dictum tincidunt eros id ullamcorper. Nunc pretium
                  dolor vitae laoreet hendrerit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              background: "url(/images/news-insights-detail.png) center top",
              backgroundSize: "cover",
            }}
          >
            <div className={`${style.main_discovery_legacy_section} container`}>
              <div className={style.main_discovery_legacy_title_sec}>
                <div className={`${style.main_discovery_legacy_title}`}>
                  <h1>Discover a Supremacy of Financial Insight</h1>
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
            className={`${style.main_pioneering_excellence_container} container`}
          >
            <div
              className={`${style.main_pioneering_excellence_title} font_playfair`}
            >
              <h2>
                Pioneering &nbsp;{" "}
                <span style={{ color: "#B29758" }}> Excellence</span> Together
              </h2>
            </div>
            <div className={style.main_pioneering_excellence_paragraph}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent dictum tincidunt eros id ullamcorper. Nunc pretium
                dolor vitae laoreet hendrerit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. tincidunt vitae nisi. Praesent
                dignissim, nibh sed malesuada laoreet, tortor arcu pharetra
                felis, eu imperdiet est massa at diam.
              </p>
              <p>
                Aliquam faucibus, orci sed faucibus aliquet, metus turpis
                dapibus arcu, a varius nisi erat at elit. Sed in accumsan dolor.
                Nullam tristique, neque sed facilisis varius, lorem tellus
                efficitur nis..
              </p>
            </div>
          </div>
        </div>
        {/* //Area Of Focus Section/ */}
        <div className={style.main_area_of_focus_section}>
          <div
            className={`${style.main_area_of_focus_title_sec} font_playfair container`}
          >
            <h2>
              Area <br /> Of Focus
            </h2>
          </div>

          <div className={style.main_area_of_focus_card_sec}>
            <div className={style.main_area_of_focus_card_body}>
              {/* <img
                src="/images/img-1.png"
                alt=""
                className={style.main_area_of_focus_card_img}
              /> */}

              <Image
                src="/images/img-1.png"
                alt="Description of the image"
                height={638}
                className={`img_res `}
                width={638}
                objectFit="cover"
              />
              <div
                className={`${style.main_area_of_focus_card_title}  font_playfair`}
              >
                <div>Wealth Management</div>
                <Link
                  href={"/wealth"}
                  className={style.main_area_of_focus_card_arrow_btn}
                >
                  <div className={style.right_arrow_icon}>
                    <Image
                      src="/images/right-arrow.png"
                      alt="Right Arrow image"
                      height={16}
                      width={20}
                      className={`img_res ${lang == "ar" ? "img_flip" : ""}`}
                    />
                  </div>
                </Link>{" "}
              </div>
            </div>
            <div className={style.main_area_of_focus_card_body}>
              {/* <img
                src="/images/img-2.png"
                alt=""
                className={style.main_area_of_focus_card_img}
              /> */}
              <Image
                src="/images/img-2.png"
                alt="Description of the image"
                height={638}
                className="img_res"
                width={638}
                objectFit="cover"
              />
              <div
                className={`${style.main_area_of_focus_card_title}  font_playfair`}
              >
                {" "}
                <div>Banking Services</div>
                <Link
                  href={"/banking"}
                  className={style.main_area_of_focus_card_arrow_btn}
                >
                  <div className={style.right_arrow_icon}>
                    <Image
                      src="/images/right-arrow.png"
                      alt="Right Arrow image"
                      height={16}
                      width={20}
                      className={`img_res ${lang == "ar" ? "img_flip" : ""}`}
                    />
                  </div>
                </Link>{" "}
              </div>
            </div>
            <div className={style.main_area_of_focus_card_body}>
              {/* <img
                src="/images/img-3.png"
                alt=""
                className={style.main_area_of_focus_card_img}
              /> */}
              <Image
                src="/images/img-3.png"
                alt="Description of the image"
                height={638}
                className="img_res"
                width={638}
                objectFit="cover"
              />
              <div
                className={`${style.main_area_of_focus_card_title}  font_playfair`}
              >
                {" "}
                <div>Philanthropy</div>
                <Link
                  href={"/philanthropy"}
                  className={style.main_area_of_focus_card_arrow_btn}
                >
                  <div className={style.right_arrow_icon}>
                    <Image
                      src="/images/right-arrow.png"
                      alt="Right Arrow image"
                      height={16}
                      width={20}
                      className={`img_res ${lang == "ar" ? "img_flip" : ""}`}
                    />
                  </div>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* //News and insights// */}
        <div className={style.main_news_and_insight_section}>
          <div
            className={`${style.main_news_and_insight_container_section} container`}
          >
            <div
              className={`${style.main_news_and_insight_title} font_playfair`}
            >
              <h2>
                News & <br />
                Insights
              </h2>{" "}
            </div>
            <div className={style.main_news_and_insight_card_btn_sec}>
              <div className={style.main_news_and_insight_card_container}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  // dir="rtl"
                  // dir={`${lang == "ar" ? "rtl" : ""}`}
                  // navigation={true}
                  navigation={{
                    prevEl: "#next_btn",
                    nextEl: "#previous_btn",
                  }}
                  breakpoints={{
                    550: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },

                    900: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className={style.main_news_and_insight_card}>
                      <div className={style.main_news_and_insight_card_date}>
                        26-07-2024
                      </div>

                      {/* <img
                        src="/images/news-insight-1.png"
                        alt=""
                        className={style.main_news_and_insight_card_img}
                      /> */}
                      <Image
                        src="/images/news-insight-2.png"
                        alt="news"
                        height={900}
                        width={900}
                        className={`${style.main_news_and_insight_card_img} img_res `}
                      />
                      <div className={style.main_news_and_insight_card_data}>
                        <div>News </div>
                        <div>
                          Lorem Ipsum is simply dummy text of the printing and
                          industry.{" "}
                        </div>
                        <div>
                          Read more{" "}
                          <Image
                            height={12}
                            width={12}
                            src="/images/right-arrow.png"
                            alt=""
                            className={` ${lang == "ar" ? "img_flip" : ""}`}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={style.main_news_and_insight_card}>
                      <div className={style.main_news_and_insight_card_date}>
                        26-07-2024
                      </div>

                      <Image
                        alt="news"
                        height={900}
                        width={900}
                        src="/images/news-insight-3.png"
                        className={style.main_news_and_insight_card_img}
                      />
                      <div className={style.main_news_and_insight_card_data}>
                        <div>News </div>
                        <div>
                          Lorem Ipsum is simply dummy text of the printing and
                          industry.{" "}
                        </div>
                        <div>
                          Read more{" "}
                          <Image
                            height={12}
                            width={12}
                            src="/images/right-arrow.png"
                            alt=""
                            className={` ${lang == "ar" ? "img_flip" : ""}`}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={style.main_news_and_insight_card}>
                      <div className={style.main_news_and_insight_card_date}>
                        26-07-2024
                      </div>

                      <Image
                        alt="news"
                        height={900}
                        width={900}
                        src="/images/news-insight-1.png"
                        className={style.main_news_and_insight_card_img}
                      />
                      <div className={style.main_news_and_insight_card_data}>
                        <div>News </div>
                        <div>
                          Lorem Ipsum is simply dummy text of the printing and
                          industry.{" "}
                        </div>
                        <div>
                          Read more{" "}
                          <Image
                            height={12}
                            width={12}
                            src="/images/right-arrow.png"
                            alt=""
                            className={` ${lang == "ar" ? "img_flip" : ""}`}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={style.main_news_and_insight_card}>
                      <div className={style.main_news_and_insight_card_date}>
                        26-07-2024
                      </div>

                      <Image
                        alt="news"
                        height={900}
                        width={900}
                        src="/images/news-insight-2.png"
                        className={style.main_news_and_insight_card_img}
                      />
                      <div className={style.main_news_and_insight_card_data}>
                        <div>News </div>
                        <div>
                          Lorem Ipsum is simply dummy text of the printing and
                          industry.{" "}
                        </div>
                        <div>
                          Read more{" "}
                          <Image
                            height={12}
                            width={12}
                            src="/images/right-arrow.png"
                            alt=""
                            className={` ${lang == "ar" ? "img_flip" : ""}`}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={style.main_news_and_insight_card}>
                      <div className={style.main_news_and_insight_card_date}>
                        26-07-2024
                      </div>

                      <Image
                        alt="news"
                        height={900}
                        width={900}
                        src="/images/news-insight-3.png"
                        className={style.main_news_and_insight_card_img}
                      />
                      <div className={style.main_news_and_insight_card_data}>
                        <div>News </div>
                        <div>
                          Lorem Ipsum is simply dummy text of the printing and
                          industry.{" "}
                        </div>
                        <div>
                          Read more{" "}
                          <Image
                            height={12}
                            width={12}
                            src="/images/right-arrow.png"
                            alt=""
                            className={` ${lang == "ar" ? "img_flip" : ""}`}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={style.main_news_and_insight_card}>
                      <div className={style.main_news_and_insight_card_date}>
                        26-07-2024
                      </div>

                      <Image
                        alt="news"
                        height={900}
                        width={900}
                        src="/images/news-insight-1.png"
                        className={style.main_news_and_insight_card_img}
                      />
                      <div className={style.main_news_and_insight_card_data}>
                        <div>News </div>
                        <div>
                          Lorem Ipsum is simply dummy text of the printing and
                          industry.{" "}
                        </div>
                        <div>
                          Read more{" "}
                          <Image
                            height={12}
                            width={12}
                            src="/images/right-arrow.png"
                            alt=""
                            className={` ${lang == "ar" ? "img_flip" : ""}`}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <button
                  className={style.main_news_and_insight_card_previous_btn}
                  id="next_btn"
                >
                  <Image
                    height={20}
                    width={15}
                    src="/images/right-arrow.png"
                    alt=""
                    className={style.right_arrow_icon}
                  />
                </button>
                <button
                  className={style.main_news_and_insight_card_next_btn}
                  id="previous_btn"
                >
                  <Image
                    height={20}
                    width={15}
                    src="/images/right-arrow.png"
                    alt=""
                    className={style.right_arrow_icon}
                  />
                </button>
              </div>
              <Link
                href={"/newsAndInsights"}
                className={style.main_news_and_insight_btn}
              >
                <div
                  className={style.main_news_and_insight_btn_background}
                ></div>
                <span> VIEW ALL NEWS</span>
                <Image
                  height={15}
                  width={15}
                  src="/images/right-arrow.png"
                  alt=""
                  className={` ${lang == "ar" ? "img_flip" : ""}`}
                />
              </Link>
              {/* /// */}
            </div>
          </div>
        </div>
        {/* //// */}
        <div className={style.main_choose_the_right_investment_section}>
          <div
            className={`${style.main_choose_the_right_investment_title_sec}  container`}
          >
            <div
              className={`${style.main_choose_the_right_investment_title}  font_playfair`}
            >
              <h2>
                Choose The Right <br /> Investment Approach
              </h2>
            </div>
            <div className={style.main_choose_the_right_investment_paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent{" "}
              <br />
              dictum tincidunt eros id ullamcorper.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
