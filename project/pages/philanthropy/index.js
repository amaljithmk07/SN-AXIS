import React, { useEffect, useRef, useState } from "react";
import philanthropy from "./philanthropy.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Featured from "../featuredInsights";
import Link from "next/link";

const Index = () => {
  useEffect(() => {
    AOS.init();
  });

  /////////////

  return (
    <div>
      {/* //wealth_image_body/ */}
      <div
        className="image_body"
        style={{ background: `url(/images/philanthropy.png) center` }}
      >
        <span className="container">
          <h1>Philanthropy</h1>
        </span>
      </div>
      {/* //philanthropy_pioneering_excellence_together_section// */}
      <div className={philanthropy.philanthropy_togglebar_container_section}>
        <div className="togglebar_sec">
          <Link href="wealth" className="togglebar_data">
            Wealth Management
          </Link>
          <Link href="banking" className="togglebar_data">
            Banking
          </Link>
          <Link href="philanthropy" className="togglebar_data_active">
            Philanthropy
          </Link>
        </div>

        {/* /// */}

        <div className={philanthropy.philanthropy_toggle_sec}>
          <div
            className={`${philanthropy.philanthropy_toggle_container} `}
          >
            <div
              className={philanthropy.philanthropy_toggle_data_sec}
              data-aos="fade-right"
            >
              <div
                className={`${philanthropy.philanthropy_toggle_data_title} font_playfair`}
              >
                <h2>
                  Giving back is often central to our <br /> clients’ purpose
                  and values.
                </h2>
              </div>
              <div
                className={`${philanthropy.philanthropy_toggle_data_content} font_poppins`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent dictum tincidunt eros id ullamcorper. Nunc pretium
                dolor vitae laoreet hendrerit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. tincidunt vitae nisi. Praesent
                dignissim, nibh sed malesuada laoreet, tortor arcu pharetra
                felis, eu imperdiet est massa at diam.
              </div>
            </div>
            <div className={philanthropy.philanthropy_toggle_img_sec}>
              <img
                data-aos="fade-left"
                src="/images/philanthropy-content.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ///////philanthropy_empowering_generation_section/////// */}
      <div className={philanthropy.philanthropy_empowering_generation_section}>
        <div
          className={`${philanthropy.philanthropy_empowering_generation_content} container`}
        >
          <div
            className={`${philanthropy.philanthropy_empowering_generation_content_title} font_playfair`}
          >
            <h2>
              Empowering Generations <br /> Through Impactful <br />{" "}
              Philanthropy{" "}
            </h2>
            <span className={philanthropy.font_poppins}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. tincidunt
              vitae nisi. Praesent dignissim, nibh sed malesuada laoreet, tortor
              arcu pharetra felis, eu imperdiet est massa at diam.
            </span>
          </div>
          <div
            className={
              philanthropy.philanthropy_empowering_generation_content_card_container
            }
          >
            <div
              className={`${philanthropy.philanthropy_empowering_generation_content_card_body}  font_poppins`}
            >
              {" "}
              <img src="/images/philanthropy-empowering-generation-img1.png" />
              <div
                className={
                  philanthropy.philanthropy_empowering_generation_content_card_title
                }
              >
                Our Approach to Philanthropy
              </div>
              <div
                className={
                  philanthropy.philanthropy_empowering_generation_content_card_data
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
            </div>
            <div
              className={`${philanthropy.philanthropy_empowering_generation_content_card_body}  font_poppins`}
            >
              <img src="/images/philanthropy-empowering-generation-img2.png" />
              <div
                className={
                  philanthropy.philanthropy_empowering_generation_content_card_title
                }
              >
                Tailored Giving Strategies{" "}
              </div>
              <div
                className={
                  philanthropy.philanthropy_empowering_generation_content_card_data
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
            </div>
            <div
              className={`${philanthropy.philanthropy_empowering_generation_content_card_body}  font_poppins`}
            >
              <img src="/images/philanthropy-empowering-generation-img3.png" />
              <div
                className={
                  philanthropy.philanthropy_empowering_generation_content_card_title
                }
              >
                Legacy Planning{" "}
              </div>
              <div
                className={
                  philanthropy.philanthropy_empowering_generation_content_card_data
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /// */}
      <Featured />
    </div>
  );
};
export default Index;
