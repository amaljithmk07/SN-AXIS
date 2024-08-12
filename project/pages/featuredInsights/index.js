"use client";
import React, { useRef, useState } from "react";
import featuredInsights from "./featuredInsights.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Index = () => {
  return (
    <div>
      <div className={`${featuredInsights.wealth_featured_insight_section}`}>
        <div
          className={`${featuredInsights.wealth_featured_insight_container}  container`}
        >
          <div
            className={`${featuredInsights.wealth_featured_insight_title} font_playfair`}
          >
            {" "}
            <h2>
              Featured <br />
              Insights
            </h2>
          </div>
          <div
            className={featuredInsights.wealth_featured_insight_card_btn_sec}
          >
            <div
              className={
                featuredInsights.wealth_featured_insight_card_container
              }
              // ref={newsAndInsightScroll}
            >
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                // navigation={true}
                breakpoints={{
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  760: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                navigation={{
                  nextEl: "#next_btn",
                  prevEl: "#prev_btn",
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div
                    className={featuredInsights.wealth_featured_insight_card}
                  >
                    <div
                      className={
                        featuredInsights.wealth_featured_insight_card_date
                      }
                    >
                      26-07-2024
                    </div>

                    {/* <img
                      src="/images/featured-insight-img2.png"
                      alt=""
                      className={
                        featuredInsights.wealth_featured_insight_card_img
                      }
                    /> */}
                    <Image
                      height={300}
                      width={200}
                      src="/images/featured-insight-img2.png"
                      alt=""
                      className={
                        featuredInsights.wealth_featured_insight_card_img
                      }
                    />
                    <div
                      className={
                        featuredInsights.wealth_featured_insight_card_data
                      }
                    >
                      <span>News </span>

                      <div>
                        Lorem Ipsum is simply dummy text of the printing and
                        industry.{" "}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={featuredInsights.wealth_featured_insight_card}
                  >
                    <div
                      className={
                        featuredInsights.wealth_featured_insight_card_date
                      }
                    >
                      26-07-2024
                    </div>

                    {/* <img
                      src="/images/featured-insight-img3.png"
                      alt=""
                      className={
                        featuredInsights.wealth_featured_insight_card_img
                      }
                    /> */}
                    <Image
                      height={300}
                      width={200}
                      src="/images/featured-insight-img3.png"
                      alt=""
                      className={
                        featuredInsights.wealth_featured_insight_card_img
                      }
                    />
                    <div
                      className={
                        featuredInsights.wealth_featured_insight_card_data
                      }
                    >
                      <span>News </span>

                      <div>
                        Lorem Ipsum is simply dummy text of the printing and
                        industry.{" "}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={featuredInsights.wealth_featured_insight_card}
                  >
                    <div
                      className={
                        featuredInsights.wealth_featured_insight_card_date
                      }
                    >
                      26-07-2024
                    </div>

                    {/* <img
                      src="/images/featured-insight-img1.png"
                      alt=""
                      className={
                        featuredInsights.wealth_featured_insight_card_img
                      }
                    /> */}
                    <Image
                      height={300}
                      width={200}
                      src="/images/featured-insight-img1.png"
                      alt=""
                      className={
                        featuredInsights.wealth_featured_insight_card_img
                      }
                    />
                    <div
                      className={
                        featuredInsights.wealth_featured_insight_card_data
                      }
                    >
                      <span>News </span>

                      <div>
                        Lorem Ipsum is simply dummy text of the printing and
                        industry.{" "}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className={featuredInsights.wealth_featured_insight_card}
                  >
                    <div
                      className={
                        featuredInsights.wealth_featured_insight_card_date
                      }
                    >
                      26-07-2024
                    </div>

                    {/* <img
                      src="/images/featured-insight-img2.png"
                      alt=""
                      className={
                        featuredInsights.wealth_featured_insight_card_img
                      }
                    /> */}
                    <Image
                      height={300}
                      width={200}
                      src="/images/featured-insight-img2.png"
                      alt=""
                      className={
                        featuredInsights.wealth_featured_insight_card_img
                      }
                    />
                    <div
                      className={
                        featuredInsights.wealth_featured_insight_card_data
                      }
                    >
                      <span>News </span>

                      <div>
                        Lorem Ipsum is simply dummy text of the printing and
                        industry.{" "}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={featuredInsights.wealth_featured_insight_card}
                  >
                    <div
                      className={
                        featuredInsights.wealth_featured_insight_card_date
                      }
                    >
                      26-07-2024
                    </div>

                    {/* <img
                      src="/images/featured-insight-img3.png"
                      alt=""
                      className={
                        featuredInsights.wealth_featured_insight_card_img
                      }
                    /> */}
                    <Image
                      height={300}
                      width={200}
                      src="/images/featured-insight-img3.png"
                      alt=""
                      className={
                        featuredInsights.wealth_featured_insight_card_img
                      }
                    />
                    <div
                      className={
                        featuredInsights.wealth_featured_insight_card_data
                      }
                    >
                      <span>News </span>

                      <div>
                        Lorem Ipsum is simply dummy text of the printing and
                        industry.{" "}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={featuredInsights.wealth_featured_insight_card}
                  >
                    <div
                      className={
                        featuredInsights.wealth_featured_insight_card_date
                      }
                    >
                      26-07-2024
                    </div>
                    {/* 
                    <img
                      src="/images/featured-insight-img1.png"
                      alt=""
                      className={
                        featuredInsights.wealth_featured_insight_card_img
                      }
                    /> */}

                    <Image
                      height={300}
                      width={200}
                      src="/images/featured-insight-img1.png"
                      alt=""
                      className={
                        featuredInsights.wealth_featured_insight_card_img
                      }
                    />
                    <div
                      className={
                        featuredInsights.wealth_featured_insight_card_data
                      }
                    >
                      <span>News </span>

                      <div>
                        Lorem Ipsum is simply dummy text of the printing and
                        industry.{" "}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <button
                className={
                  featuredInsights.wealth_featured_insight_card_previous_btn
                }
                id="prev_btn"
              >
                {/* <img
                  src="/images/right-arrow.png"
                  alt=""
                  className={featuredInsights.right_arrow_icon}
                /> */}
                <Image
                  height={30}
                  width={20}
                  src="/images/right-arrow.png"
                  alt=""
                  className={featuredInsights.right_arrow_icon}
                />
              </button>
              <button
                className={
                  featuredInsights.wealth_featured_insight_card_next_btn
                }
                id="next_btn"
              >
                {/* <img
                  src="/images/right-arrow.png"
                  alt=""
                  className={featuredInsights.right_arrow_icon}
                /> */}
                <Image
                  height={30}
                  width={20}
                  src="/images/right-arrow.png"
                  alt=""
                  className={featuredInsights.right_arrow_icon}
                />
              </button>
            </div>
            <button
              className={`${featuredInsights.wealth_featured_insight_btn} font_poppins`}
            >
              <div
                className={
                  featuredInsights.wealth_featured_insight_btn_background
                }
              ></div>
              <span> VIEW ALL </span>
              {/* <img src="/images/right-arrow.png" alt="" /> */}
              <Image
                height={13}
                width={15}
                src="/images/right-arrow.png"
                alt=""
              />
            </button>
            {/* /// */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
