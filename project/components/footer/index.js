import React, { useEffect, useState } from "react";
// import style from "./footer.module.css";
import style from "@/styles/footer.module.css";

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
  return (
    <div>
      <div
        className={`${style.footer_section} ${lang == "en" ? "ltr" : "rtl"}`}
      >
        <div className={`${style.footer_content_sec} container`}>
          {/* <img src="/images/logo.png" className={style.footer_logo} /> */}
          <div className={style.footer_logo}>
            <Image
              alt="footer"
              src="/images/logo.png"
              objectFit="cover"
              width={183}
              height={99}
              className={style.footer_logo}
            />
          </div>
          <div className={style.footer_content}>
            <div className={`${style.footer_content_data} font_playfair`}>
              <h4>Quick Links </h4>
              <ul className={`${style.footer_content_list} font_poppins`}>
                <li>
                  <Link href="/">Home </Link>
                </li>
                <li>
                  <Link href="/about">About </Link>
                </li>
                <li>
                  <Link href="/contact">Contact </Link>
                </li>
                <li>
                  <Link href="/newsAndInsights">News & Insights </Link>
                </li>
                <li>
                  <Link href="/careers">Careers </Link>
                </li>
                <li>
                  <Link href="">Privacy Policy </Link>
                </li>
              </ul>
            </div>
            <div className={`${style.footer_content_data} font_playfair`}>
              {" "}
              <h4>Services</h4>
              <ul className={`${style.footer_content_list} font_poppins`}>
                <li>
                  <Link href="/wealth">Wealth Management </Link>
                </li>
                <li>
                  <Link href="/banking">Banking Services </Link>
                </li>
                <li>
                  <Link href="/philanthropy">Philanthropy </Link>
                </li>
              </ul>
            </div>
            <div className={`${style.footer_content_data} font_playfair`}>
              <h4>Email</h4>
              <ul className={`${style.footer_content_list} font_poppins`}>
                <li>
                  <Link href="emailto:">snaxis@example.com </Link>
                </li>
              </ul>
              <h4>Phone</h4>
              <ul className={`${style.footer_content_list} font_poppins`}>
                <li>
                  <Link href="">+9156845465 </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${style.footer_privacy_container} `}>
          <div
            className={`${
              lang == "en"
                ? `${style.footer_privacy_sec}`
                : `${style.footer_privacy_sec_ar}`
            }   font_poppins container`}
          >
            <div>Copyright © 2024 SN AXIS. All Rights Reserved</div>

            <ul>
              <li>Fraud Warning</li>
              <li>Cookies Policy</li>
              <li>Privacy Policy</li>
              <li>Terms and Coditions</li>
            </ul>
            {/* <div className={style.footer_privacy_border}></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
