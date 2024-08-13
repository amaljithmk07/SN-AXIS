import React, { useEffect, useState } from "react";
// import about from "./about.module.css";
import about from "@/styles/about.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    setLang(router.locale);
  }, []);
  const [lang, setLang] = useState();

  console.log(lang);
  useEffect(() => {
    AOS.init();
  }, []);

  const OurMissionArray = [
    {
      title:
        "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Nam noneros dui.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non eros dui. Vestibulum interdum sit amet diam quis hendrerit. Fusce enim enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non eros dui. Vestibulum interdum sit amet diam quis hendrerit. Fusce enim enim.",
      image: "/images/our-mission-img1.jpg",
    },
    {
      title: "Lorem teturadipiscing elit. Nam noneros dui.",
      content:
        "Loreelit. Nam non eros dui. Vestibulum interdum sit amet diam quis hendrerit. Fusce enim enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non eros dui. Vestibulum interdum sit amet diam quis hendrerit. Fusce enim enim.",
      image: "/images/our-mission-img2.jpg",
    },
  ];
  const [ourMission, setOurMission] = useState(OurMissionArray[0]);
  const ourMissionChanger = (direction) => {
    if (direction == "left") {
      setOurMission(OurMissionArray[0]);
    } else {
      setOurMission(OurMissionArray[1]);
    }
  };

  ///////////

  const coreValues = [
    {
      title: "Relationships as Foundation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent dictum tincidunt eros id ullamcorper. Nunc pretium dolor vitae laoreet hendrerit. Lorem ipsum dolor sit amet,",
    },
    {
      title: " Innovation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent dictum tincidunt eros id ullamcorper. Nunc pretium dolor vitae laoreet hendrerit. Lorem ipsum dolor sit amet,",
    },
    {
      title: " Trust",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent dictum tincidunt eros id ullamcorper. Nunc pretium dolor vitae laoreet hendrerit. Lorem ipsum dolor sit amet,",
    },
    {
      title: " Teamwork",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent dictum tincidunt eros id ullamcorper. Nunc pretium dolor vitae laoreet hendrerit. Lorem ipsum dolor sit amet,",
    },
    {
      title: "Support and Knowledge",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent dictum tincidunt eros id ullamcorper. Nunc pretium dolor vitae laoreet hendrerit. Lorem ipsum dolor sit amet,",
    },
    {
      title: "Social Responsibility",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent dictum tincidunt eros id ullamcorper. Nunc pretium dolor vitae laoreet hendrerit. Lorem ipsum dolor sit amet,",
    },
  ];

  ///////////////////////

  const [historystate, setHistorystate] = useState(0);

  const historyHandler = (direction) => {
    if (direction == "right") {
      setHistorystate(historystate + 1);
    } else {
      setHistorystate(historystate - 1);
    }
  };

  return (
    <div>
      <div
        className={`${about.about_main_body} ${lang == "ar" ? "rtl" : "ltr"}`}
      >
        {/* //about_image_body/ */}
        <div
          style={{
            background: `url(/images/about-us.png)  bottom `,
          }}
          className="image_body"
        >
          <span className="container">
            <h1>About Us</h1>
          </span>
        </div>

        {/* //about_pioneering_excellence_together_section// */}
        <div className={about.about_pioneering_excellence_together_section}>
          <div
            className={`${about.about_pioneering_excellence_together_title_sec} container`}
          >
            <div
              className={about.about_pioneering_excellence_together_title_1}
              data-aos="fade-right"
            >
              <h1>PIONEERING</h1>
            </div>

            <div className={about.about_pioneering_excellence_together_title_2}>
              <div data-aos="fade-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent dictum tincidunt eros id ullamcorper.{" "}
              </div>
              <h1 data-aos="fade-left">EXCELLENCE</h1>
            </div>
            <div className={about.about_pioneering_excellence_together_title_3}>
              <h1 data-aos="fade-right">TOGETHER</h1>
              <div className={about.font_poppins} data-aos="fade-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent dictum tincidunt eros id ullamcorper. Nunc pretium
                dolor vitae laoreet hendrerit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. tincidunt vitae nisi. Praesent
                dignissim, nibh sed malesuada laoreet, tortor arcu pharetra
                felis, eu imperdiet est massa at diam. .{" "}
              </div>
            </div>
          </div>
        </div>

        {/* / about_our_mission_section/// */}

        <div
          className={` ${
            lang == "en"
              ? `${about.about_our_mission_section}`
              : `${about.about_our_mission_section_ar}`
          }`}
        >
          <div
            className={`${about.about_our_mission_container_wrap} container `}
          >
            <div className={about.about_our_mission_container}>
              <div className={`${about.about_our_mission_title} font_playfair`}>
                Our <br />
                Mission
              </div>
              <div className={about.about_our_mission_container_content}>
                <div
                  data-aos="fade-right"
                  className={`${about.about_our_mission_container_content_title} font_playfair`}
                >
                  {ourMission.title}
                </div>
                <div
                  data-aos="fade-right"
                  className={`${about.about_our_mission_container_content_data} font_poppins`}
                >
                  {ourMission.content}
                </div>

                <div
                  className={about.about_our_mission_container_content_btn_sec}
                >
                  <button
                    className={about.about_our_mission_container_content_btn}
                    onClick={() => ourMissionChanger("left")}
                  >
                    {/* <img src="/images/btn-right-arrow.png" /> */}
                    <Image
                      height={18}
                      width={20}
                      alt=""
                      src="/images/btn-right-arrow.png"
                      className={` ${lang == "ar" ? "img_flip" : ""}`}
                    />
                  </button>
                  <button
                    className={about.about_our_mission_container_content_btn}
                    onClick={() => ourMissionChanger("right")}
                  >
                    {/* <img src="/images/btn-right-arrow.png" /> */}
                    <Image
                      height={18}
                      width={20}
                      alt=""
                      src="/images/btn-right-arrow.png"
                      className={` ${lang == "ar" ? "img_flip" : ""}`}
                    />
                  </button>
                </div>
              </div>
              <div className={about.about_our_mission_img_body}>
                {/* <img data-aos="fade-left" src={ourMission.image} /> */}
                <Image
                  height={900}
                  width={600}
                  alt=""
                  data-aos="fade-left"
                  src={ourMission.image}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /////core_values_section/////// */}
        <div className={about.about_core_values_section}>
          <div className={`${about.about_core_values_container} container`}>
            <div className={`${about.about_core_values_title}  font_playfair}`}>
              Core <br /> Values{" "}
            </div>
            <div className={about.about_core_values_card_sec}>
              {/* /// */}
              {coreValues.map((data, index) => (
                <div className={about.about_core_values_card_body} key={index}>
                  <div
                    className={`${about.about_core_values_card_title} font_playfair`}
                  >
                    {data.title}
                  </div>
                  <div
                    className={`${about.about_core_values_card_content} font_poppins`}
                  >
                    {data.content}{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* /////about_our_history_section//////// */}

        <div className={about.about_our_history_section}>
          <div className={`${about.about_our_history_container} container`}>
            <div className={`${about.about_our_history_title} font_playfair`}>
              Our History
            </div>

            <div className={about.about_our_history_container_sec}>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                dir={
                  router.locale == "ar" || router.locale == "rtl"
                    ? "rtl"
                    : "ltr"
                }
                navigation={{
                  nextEl: "#next_btn",
                  prevEl: "#prev_btn",
                }}
                breakpoints={{
                  1000: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                  },
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className={about.about_our_history_container_data}>
                    <div
                      className={
                        historystate == 0
                          ? `${about.about_our_history_container_data_title_active}`
                          : `${about.about_our_history_container_data_title}  font_playfair`
                      }
                    >
                      1975{" "}
                    </div>
                    <div
                      className={
                        historystate == 0
                          ? `${about.about_our_history_container_data_content_active}`
                          : `${about.about_our_history_container_data_content}  `
                      }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent dictum tincidunt eros id ullamcorper. Nunc
                      pretium dolor vitae laoreet hendrerit. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. tin{" "}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={about.about_our_history_container_data}>
                    <div
                      className={
                        historystate == 1
                          ? `${about.about_our_history_container_data_title_active}`
                          : `${about.about_our_history_container_data_title} font_playfair`
                      }
                    >
                      1975{" "}
                    </div>
                    <div
                      className={
                        historystate == 1
                          ? `${about.about_our_history_container_data_content_active}`
                          : `${about.about_our_history_container_data_content}  `
                      }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent dictum tincidunt eros id ullamcorper. Nunc
                      pretium dolor vitae laoreet hendrerit. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. tin{" "}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={about.about_our_history_container_data}>
                    <div
                      className={
                        historystate == 2
                          ? `${about.about_our_history_container_data_title_active}`
                          : `${about.about_our_history_container_data_title} font_playfair`
                      }
                    >
                      1975{" "}
                    </div>
                    <div
                      className={
                        historystate == 2
                          ? `${about.about_our_history_container_data_content_active}`
                          : `${about.about_our_history_container_data_content}  `
                      }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent dictum tincidunt eros id ullamcorper. Nunc
                      pretium dolor vitae laoreet hendrerit. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. tin{" "}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={about.about_our_history_container_data}>
                    <div
                      className={
                        historystate == 3
                          ? `${about.about_our_history_container_data_title_active}`
                          : `${about.about_our_history_container_data_title} font_playfair`
                      }
                    >
                      1975{" "}
                    </div>
                    <div
                      className={
                        historystate == 3
                          ? `${about.about_our_history_container_data_content_active}`
                          : `${about.about_our_history_container_data_content}  `
                      }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent dictum tincidunt eros id ullamcorper. Nunc
                      pretium dolor vitae laoreet hendrerit. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. tin{" "}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={about.about_our_history_container_data}>
                    <div
                      className={
                        historystate == 4
                          ? `${about.about_our_history_container_data_title_active}`
                          : `${about.about_our_history_container_data_title} font_playfair`
                      }
                    >
                      1975{" "}
                    </div>
                    <div
                      className={
                        historystate == 4
                          ? `${about.about_our_history_container_data_content_active}`
                          : `${about.about_our_history_container_data_content}  `
                      }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent dictum tincidunt eros id ullamcorper. Nunc
                      pretium dolor vitae laoreet hendrerit. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. tin{" "}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={about.about_our_history_container_data}>
                    <div
                      className={
                        historystate == 5
                          ? `${about.about_our_history_container_data_title_active}`
                          : `${about.about_our_history_container_data_title} font_playfair`
                      }
                    >
                      1975{" "}
                    </div>
                    <div
                      className={
                        historystate == 5
                          ? `${about.about_our_history_container_data_content_active}`
                          : `${about.about_our_history_container_data_content}  `
                      }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent dictum tincidunt eros id ullamcorper. Nunc
                      pretium dolor vitae laoreet hendrerit. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. tin{" "}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={about.about_our_history_btn_sec}>
              <button
                className={about.about_our_history_btn}
                id="prev_btn"
                onClick={() => historyHandler("left")}
              >
                {/* <img src="/images/btn-arrow.png" /> */}
                <Image
                  alt=""
                  src={"/images/btn-arrow.png"}
                  height={15}
                  width={10}
                  className={` ${lang == "ar" ? "img_flip" : ""}`}
                />
              </button>
              <button
                className={about.about_our_history_btn}
                id="next_btn"
                onClick={() => historyHandler("right")}
              >
                <Image
                  alt=""
                  src={"/images/btn-arrow.png"}
                  height={15}
                  width={10}
                  className={` ${lang == "ar" ? "img_flip" : ""}`}
                />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
