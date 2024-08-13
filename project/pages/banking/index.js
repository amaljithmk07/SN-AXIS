import React, { useEffect, useState } from "react";
import banking from "@/styles/banking.module.css";
import Featured from "../featuredInsights";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
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
  });

  return (
    <div className={lang == "en" ? "ltr" : "rtl"}>
      {/* //banking_image_body/ */}
      <div
        className="image_body"
        style={{
          background: `url(/images/banking.jpg) bottom`,
        }}
      >
        <span className="container">
          <h1>Banking</h1>
        </span>
      </div>

      {/* //banking_pioneering_excellence_together_section// */}
      <div className={banking.banking_togglebar_container_section}>
        <div className="togglebar_sec">
          <Link href="wealth" className="togglebar_data">
            Wealth Management
          </Link>
          <Link href="banking" className="togglebar_data_active">
            Banking
          </Link>
          <Link href="philanthropy" className="togglebar_data">
            Philanthropy
          </Link>
        </div>

        {/* // */}
        <div className={banking.banking_toggle_sec}>
          <div
            className={
              lang == "en"
                ? `${banking.banking_toggle_container}`
                : `${banking.banking_toggle_container_rtl}`
            }
          >
            <div className={banking.banking_toggle_img_sec}>
              {/* <img data-aos="fade-right" src="/images/banking-img.png" /> */}
              <Image
                data-aos="fade-right"
                height={550}
                width={400}
                alt=""
                src="/images/banking-img.png"
              />
            </div>
            <div
              className={
                lang == "en"
                  ? `${banking.banking_toggle_data_sec}`
                  : `${banking.banking_toggle_data_sec_rtl}`
              }
              data-aos="fade-left"
            >
              <div
                className={`${banking.banking_toggle_data_title} font_playfair`}
              >
                <h2>
                  We Recognize The Distinctive Financial Needs <br /> And
                  Aspirations Of High-net-worth Families
                </h2>
              </div>
              <div
                className={`${banking.banking_toggle_data_content} font_poppins`}
              >
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent dictum tincidunt eros id ullamcorper. Nunc pretium
                  dolor vitae laoreet hendrerit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. tincidunt vitae nisi. Praesent
                  dignissim, nibh sed malesuada laoreet, tortor arcu pharetra
                  felis, eu imperdiet est massa at diam.
                </p>
                <br />
                <p>
                  Aliquam faucibus, orci sed faucibus aliquet, metus turpis
                  dapibus arcu, a varius nisi erat at elit. Sed in accumsan
                  dolor. Nullam tristique, neque sed facilisis varius, lorem
                  tellus efficitur nis..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ///////// */}

      <div className={`${banking.banking_realising_wealth_section} container`}>
        <div
          className={`${banking.banking_realising_wealth_title} font_playfair`}
        >
          <h2>
            Realizing Wealth’s <br /> Potential
          </h2>
        </div>
        <div className={banking.banking_realising_wealth_card_container}>
          <div className={banking.banking_realising_wealth_card}>
            <div className={banking.banking_realising_wealth_card_img}>
              {" "}
              {/* <img src="/images/banking-realising-wealth-img1.png" alt="" /> */}
              <Image
                height={300}
                width={300}
                src="/images/banking-realising-wealth-img1.png"
                alt=""
              />
            </div>

            <div className={banking.banking_realising_wealth_card_paragraph}>
              Personalized Wealth Management{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent dictum tincidunt eros id ullamcorper. Nunc pretium
                dolor vitae laoreet hendrerit.
              </p>
            </div>
          </div>
          <div className={banking.banking_realising_wealth_card}>
            <div className={banking.banking_realising_wealth_card_img}>
              {" "}
              {/* <img src="/images/banking-realising-wealth-img2.png" /> */}
              <Image
                height={300}
                width={300}
                alt=""
                src="/images/banking-realising-wealth-img2.png"
              />
            </div>

            <div className={banking.banking_realising_wealth_card_paragraph}>
              Concierge Banking{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent dictum tincidunt eros id ullamcorper. Nunc pretium
                dolor vitae laoreet hendrerit.
              </p>
            </div>
          </div>
          <div className={banking.banking_realising_wealth_card}>
            <div className={banking.banking_realising_wealth_card_img}>
              {" "}
              {/* <img src="/images/banking-realising-wealth-img3.png" /> */}
              <Image
                height={300}
                width={300}
                alt=""
                src="/images/banking-realising-wealth-img3.png"
              />
            </div>

            <div className={banking.banking_realising_wealth_card_paragraph}>
              Legacy Planning{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent dictum tincidunt eros id ullamcorper. Nunc pretium
                dolor vitae laoreet hendrerit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Featured />
    </div>
  );
};

export default Index;
