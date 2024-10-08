import React, { useEffect, useRef, useState } from "react";
import wealth from "@/styles/wealth.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Featured from "../featuredInsights";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    setLang(router.locale);
    AOS.init();
  }, []);
  const [lang, setLang] = useState();

  ///

  return (
    <div className={`${lang == "ar" ? "rtl" : "ltr"}`}>
      {/* <div> */}
      {/* //wealth_image_body/ */}
      <div
        className="image_body"
        style={{
          background: `url(/images/wealth-management.jpg) bottom `,
        }}
      >
        <span className="container">
          <h1>Wealth Management</h1>
        </span>
      </div>

      {/* //wealth_pioneering_excellence_together_section// */}
      <div
        className={`${
          lang == "en"
            ? `${wealth.wealth_togglebar_container_section}`
            : `${wealth.wealth_togglebar_container_section_ar}`
        }`}
      >
        <div className="togglebar_sec">
          <Link href="wealth" className="togglebar_data_active">
            Wealth Management
          </Link>
          <Link href="banking" className="togglebar_data">
            Banking
          </Link>
          <Link href="philanthropy" className="togglebar_data">
            Philanthropy
          </Link>
        </div>
        <div
          className={`${wealth.wealth_toggle_wealth_management_sec}  container`}
        >
          <div
            className={wealth.wealth_toggle_wealth_management_img_sec}
            data-aos="fade-right"
          >
            <div>
              {/* <img
                src="/images/wealth-invest-management-1.png"
                data-aos="fade-right"
              /> */}
              <Image
                height={680}
                width={320}
                alt=""
                src="/images/wealth-invest-management-1.png"
                data-aos="fade-right"
              />
            </div>
            <div>
              <Image
                height={680}
                width={320}
                alt=""
                src="/images/wealth-invest-management.png"
                data-aos="fade-right"
              />
            </div>
          </div>
          <div
            className={`${
              lang == "en"
                ? `${wealth.wealth_toggle_wealth_management_data_sec}`
                : `${wealth.wealth_toggle_wealth_management_data_sec_ar}`
            }`}
            data-aos="fade-left"
          >
            <div
              className={`${wealth.wealth_toggle_wealth_management_data_title} font_playfair`}
            >
              <h2>
                Investment <br /> Management
              </h2>
            </div>
            <div
              className={`${wealth.wealth_toggle_wealth_management_data_content} font_poppins`}
            >
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
                efficitur nis..{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ///////wealth_realising_wealths_section/////// */}
      <div className={wealth.wealth_realising_wealths_section}>
        <div
          className={` ${wealth.wealth_realising_wealths_content} container`}
          id="wealth_realising_wealths_content"
        >
          <div
            className={`${wealth.wealth_realising_wealths_content_title} font_playfair`}
            id="wealth_realising_wealths_content_title"
          >
            <h2>
              Realizing Wealth’s <br /> Potential
            </h2>
          </div>
          <div
            className={wealth.wealth_realising_wealths_content_card_container}
          >
            <div
              className={`${wealth.wealth_realising_wealths_content_card_body}  font_poppins`}
            >
              {" "}
              <Image
                height={250}
                width={320}
                alt=""
                src="/images/realising-wealth-img1.png"
              />
              <div
                className={wealth.wealth_realising_wealths_content_card_title}
              >
                Philosophy And Values
              </div>
              <div
                className={wealth.wealth_realising_wealths_content_card_data}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
            </div>
            <div
              className={`${wealth.wealth_realising_wealths_content_card_body}  font_poppins`}
            >
              <Image
                height={250}
                width={320}
                alt=""
                src="/images/realising-wealth-img2.png"
              />
              <div
                className={wealth.wealth_realising_wealths_content_card_title}
              >
                Philosophy And Values
              </div>
              <div
                className={wealth.wealth_realising_wealths_content_card_data}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
            </div>
            <div
              className={`${wealth.wealth_realising_wealths_content_card_body}  font_poppins`}
            >
              <Image
                height={250}
                width={320}
                alt=""
                src="/images/realising-wealth-img3.png"
              />
              <div
                className={wealth.wealth_realising_wealths_content_card_title}
              >
                Philosophy And Values
              </div>
              <div
                className={wealth.wealth_realising_wealths_content_card_data}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //////wealth_featured_insight_section//////////// */}
      <Featured />
    </div>
  );
};

export default Index;
