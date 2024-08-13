import React, { useEffect, useState } from "react";
import newsAndInsights from "@/styles/NewsAndInsightsDetail.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    setLang(router.locale);
  }, []);
  const [lang, setLang] = useState();

  console.log(lang);
  return (
    <div className={lang == "ar" ? "rtl" : "ltr"}>
      <div
        className="image_body"
        style={{ background: `url(/images/news-and-insights.png) bottom` }}
      >
        <span className="container">
          <h1>News & Insights</h1>
        </span>
      </div>

      {/* /// */}

      <div
        className={`${newsAndInsights.news_and_insights_detail_content_body} container `}
      >
        <div
          className={`${newsAndInsights.news_and_insights_detail_path_sec}  font_playfair`}
        >
          News Insights{" "}
          <Image
            alt=""
            height={13}
            width={8}
            src="/images/path-icon.png"
            className={lang == "ar" ? "img_flip" : ""}
          />{" "}
          Category
        </div>
        <div
          className={newsAndInsights.news_and_insights_detail_content_section}
        >
          <div
            className={
              newsAndInsights.news_and_insights_detail_content_section_img
            }
          >
            {/* <img src="/images/news-insights-detail.png" /> */}
            <Image
              alt=""
              height={400}
              width={900}
              src="/images/news-insights-detail.png"
            />
          </div>
          <div className={newsAndInsights.news_and_insights_detail_content}>
            <span>
              <h2>Lorem ipsum dolor sit ame</h2>
            </span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry &apos; s standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <p>
              Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem
              IpsumLorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>

          {/* //// */}
          <div
            className={`${newsAndInsights.news_and_insights_detail_title} font_playfair`}
          >
            <h2>Related News </h2>
          </div>
          <div
            className={newsAndInsights.news_and_insights_detail_card_btn_sec}
          >
            <div
              className={
                newsAndInsights.news_and_insights_detail_card_container
              }
            >
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                dir={
                  router.locale == "ar" || router.locale == "rtl"
                    ? "rtl"
                    : "ltr"
                }
                breakpoints={{
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  850: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Link
                    href={"/newsAndInsights"}
                    className={newsAndInsights.news_and_insights_detail_card}
                  >
                    <div
                      className={
                        newsAndInsights.news_and_insights_detail_card_date
                      }
                    >
                      26-07-2024
                    </div>

                    {/* <img
                      src="/images/news-insight-1.png"
                      alt=""
                      className={
                        newsAndInsights.news_and_insights_detail_card_img
                      }
                    /> */}
                    <Image
                      height={500}
                      width={500}
                      src="/images/news-insight-1.png"
                      alt=""
                      className={
                        newsAndInsights.news_and_insights_detail_card_img
                      }
                    />
                    <div
                      className={
                        newsAndInsights.news_and_insights_detail_card_data
                      }
                    >
                      <span>News </span>
                      <div>
                        Lorem Ipsum is simply dummy text of the printing and
                        industry.{" "}
                      </div>
                      <span>
                        Read more{" "}
                        <Image
                          height={10}
                          width={5}
                          src="/images/right-arrow.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    href={"/newsAndInsights"}
                    className={newsAndInsights.news_and_insights_detail_card}
                  >
                    <div
                      className={
                        newsAndInsights.news_and_insights_detail_card_date
                      }
                    >
                      26-07-2024
                    </div>

                    <Image
                      height={500}
                      width={500}
                      src="/images/news-insight-2.png"
                      alt=""
                      className={
                        newsAndInsights.news_and_insights_detail_card_img
                      }
                    />
                    <div
                      className={
                        newsAndInsights.news_and_insights_detail_card_data
                      }
                    >
                      <span>News </span>
                      <div>
                        Lorem Ipsum is simply dummy text of the printing and
                        industry.{" "}
                      </div>
                      <span>
                        Read more{" "}
                        <Image
                          height={10}
                          width={5}
                          src="/images/right-arrow.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  {" "}
                  <Link
                    href={"/newsAndInsights"}
                    className={newsAndInsights.news_and_insights_detail_card}
                  >
                    <div
                      className={
                        newsAndInsights.news_and_insights_detail_card_date
                      }
                    >
                      26-07-2024
                    </div>

                    <Image
                      height={500}
                      width={500}
                      src="/images/news-insight-1.png"
                      alt=""
                      className={
                        newsAndInsights.news_and_insights_detail_card_img
                      }
                    />
                    <div
                      className={
                        newsAndInsights.news_and_insights_detail_card_data
                      }
                    >
                      <span>News </span>
                      <div>
                        Lorem Ipsum is simply dummy text of the printing and
                        industry.{" "}
                      </div>
                      <span>
                        Read more{" "}
                        <Image
                          height={10}
                          width={5}
                          src="/images/right-arrow.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    href={"/newsAndInsights"}
                    className={newsAndInsights.news_and_insights_detail_card}
                  >
                    <div
                      className={
                        newsAndInsights.news_and_insights_detail_card_date
                      }
                    >
                      26-07-2024
                    </div>

                    <Image
                      height={500}
                      width={500}
                      src="/images/news-insight-3.png"
                      alt=""
                      className={
                        newsAndInsights.news_and_insights_detail_card_img
                      }
                    />
                    <div
                      className={
                        newsAndInsights.news_and_insights_detail_card_data
                      }
                    >
                      <span>News </span>
                      <div>
                        Lorem Ipsum is simply dummy text of the printing and
                        industry.{" "}
                      </div>
                      <span>
                        Read more{" "}
                        <Image
                          height={10}
                          width={5}
                          src="/images/right-arrow.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    href={"/newsAndInsights"}
                    className={newsAndInsights.news_and_insights_detail_card}
                  >
                    <div
                      className={
                        newsAndInsights.news_and_insights_detail_card_date
                      }
                    >
                      26-07-2024
                    </div>

                    <Image
                      height={500}
                      width={500}
                      src="/images/news-insight-1.png"
                      alt=""
                      className={
                        newsAndInsights.news_and_insights_detail_card_img
                      }
                    />
                    <div
                      className={
                        newsAndInsights.news_and_insights_detail_card_data
                      }
                    >
                      <span>News </span>
                      <div>
                        Lorem Ipsum is simply dummy text of the printing and
                        industry.{" "}
                      </div>
                      <span>
                        Read more{" "}
                        <Image
                          height={10}
                          width={5}
                          src="/images/right-arrow.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* /// */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
