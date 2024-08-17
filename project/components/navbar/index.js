import React, { useEffect, useState } from "react";
// import Navbar from "./navbar.module.css";
import Navbar from "@/styles/navbar.module.css";
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

  const [dropdown, setDropdown] = useState(false);
  const DropDownHandler = (e) => {
    // e.preventDefault();
    setDropdown((prev) => !prev);
  };

  const [hamburger, setHamburger] = useState(false);

  const HamburgerHandler = () => {
    setHamburger((prev) => !prev);
  };

  ////Hamburger off for List
  const hambOff = () => {
    setHamburger(false);
  };
  return (
    <div>
      <header
        className={`${Navbar.navbar_main_body}
          ${lang == "ar" ? "rtl" : "ltr"}
        `}
      >
        {/* //////// */}

        <div className={Navbar.top_nav}>
          <div
            className={`${
              lang == "en"
                ? `${Navbar.top_nav_container}`
                : `${Navbar.top_nav_container_ar}`
            } container  `}
          >
            <span>Phone : +971 123 1234</span>
            <span>Email : snaxis@example.com</span>
          </div>
        </div>
        <div className={`${Navbar.navbar_container} container`}>
          {/* ///////// */}

          <div className={Navbar.navbar_sub_body}>
            <Link href={"/"}>
              {/* <img
                src="/images/logo.png"
                alt=""
                className={Navbar.navbar_logo}
              /> */}
              <Image
                src="/images/logo.png"
                alt=""
                height={90}
                width={150}
                className={Navbar.navbar_logo}
              />
            </Link>
            <div className={Navbar.navbar_ul_btn_sec}>
              <ul className={Navbar.navbar_ul}>
                <li>
                  {" "}
                  <Link href="/about"> About Us </Link>
                </li>
                <li className={Navbar.drop_down_sec} onClick={DropDownHandler}>
                  {" "}
                  Area of Focus
                  <Image
                    height={8}
                    width={5}
                    src="/images/down-arrow.png"
                    alt=""
                    className={Navbar.down_arrow_icon}
                  />
                  {/* {dropdown === true ? ( */}
                  <ul
                    className={
                      lang == "en"
                        ? `${Navbar.drop_down_container}`
                        : `${Navbar.drop_down_container_rtl}`
                    }
                  >
                    <li>
                      <Link href="/wealth">Wealth Management </Link>
                      {/* <img
                        src="/images/top-right-arrow.png"
                        className={Navbar.top_right_arrow_icon}
                      /> */}
                      <Image
                        height={12}
                        width={12}
                        alt=""
                        src="/images/top-right-arrow.png"
                        className={`${Navbar.top_right_arrow_icon} ${
                          lang == "ar" ? `img_rotate` : ``
                        }`}
                      />
                    </li>
                    <li>
                      <Link href="/banking">Banking Services</Link>
                      {/* <img
                        src="/images/top-right-arrow.png"
                        className={Navbar.top_right_arrow_icon}
                      /> */}
                      <Image
                        height={12}
                        width={12}
                        alt=""
                        src="/images/top-right-arrow.png"
                        className={`${Navbar.top_right_arrow_icon} ${
                          lang == "ar" ? `img_rotate` : ``
                        }`}
                      />
                    </li>
                    <li>
                      <Link href="/philanthropy">Philanthropy</Link>
                      {/* <img
                        src="/images/top-right-arrow.png"
                        className={Navbar.top_right_arrow_icon}
                      /> */}
                      <Image
                        height={12}
                        width={12}
                        alt=""
                        src="/images/top-right-arrow.png"
                        className={`${Navbar.top_right_arrow_icon} ${
                          lang == "ar" ? `img_rotate` : ``
                        }`}
                      />
                    </li>
                  </ul>
                </li>

                {/* ) : (
                  ""
                )} */}
                <li>
                  {" "}
                  <Link href="/careers"> Careers </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/newsAndInsights"> News & Insights </Link>
                </li>
              </ul>
              <Link href="/contact" className={Navbar.navbar_contact_btn}>
                <div className={Navbar.navbar_contact_btn_back}></div>
                <span>CONTACT US</span>
              </Link>
            </div>
            {/* /////// */}

            {/* //Hamburger Secion// */}

            <div className={Navbar.navbar_hamb_main} onClick={HamburgerHandler}>
              <div
                className={
                  hamburger == false
                    ? `${Navbar.navbar_hamb_line}`
                    : `${Navbar.navbar_hamb_line_after}`
                }
              ></div>
              <div
                className={
                  hamburger == false
                    ? `${Navbar.navbar_hamb_line}`
                    : `${Navbar.navbar_hamb_line_after}`
                }
              ></div>
              <div
                className={
                  hamburger == false
                    ? `${Navbar.navbar_hamb_line}`
                    : `${Navbar.navbar_hamb_line_after}`
                }
              ></div>
            </div>

            {/* ///////////////// */}
            {hamburger == true ? (
              <div className={Navbar.hamb_navbar_ul_btn_sec}>
                <ul className={Navbar.hamb_navbar_ul}>
                  <li>
                    {" "}
                    <Link href="/about" onClick={hambOff}>
                      {" "}
                      About Us{" "}
                    </Link>
                  </li>
                  <li
                    className={Navbar.hamb_drop_down_sec}
                    onClick={DropDownHandler}
                  >
                    {" "}
                    Area of Focus
                    {/* <img
                      src="/images/down-arrow.png"
                      alt=""
                      className={Navbar.down_arrow_icon}
                    /> */}
                    <Image
                      height={8}
                      width={5}
                      src="/images/down-arrow.png"
                      alt=""
                      className={Navbar.down_arrow_icon}
                    />
                  </li>

                  {dropdown === true ? (
                    <>
                      <li>
                        <Link href="/wealth" onClick={hambOff}>
                          Wealth Management{" "}
                        </Link>
                        {/*
                        
                        <img
                          src="/images/top-right-arrow.png"
                          className={Navbar.top_right_arrow_icon}
                        /> */}
                        <Image
                          height={12}
                          width={12}
                          alt=""
                          src="/images/top-right-arrow.png"
                          className={`${Navbar.top_right_arrow_icon} ${
                            lang == "ar" ? `img_rotate` : ``
                          }`}
                        />
                      </li>
                      <li>
                        <Link href="/banking" onClick={hambOff}>
                          Banking Services
                        </Link>
                        {/* <img
                          src="/images/top-right-arrow.png"
                          className={Navbar.top_right_arrow_icon}
                        /> */}
                        <Image
                          height={12}
                          width={12}
                          alt=""
                          src="/images/top-right-arrow.png"
                          className={`${Navbar.top_right_arrow_icon} ${
                            lang == "ar" ? `img_rotate` : ``
                          }`}
                        />
                      </li>
                      <li>
                        <Link href="/philanthropy" onClick={hambOff}>
                          Philanthropy
                        </Link>
                        {/* <img
                          src="/images/top-right-arrow.png"
                          className={Navbar.top_right_arrow_icon}
                        /> */}
                        <Image
                          height={12}
                          width={12}
                          alt=""
                          src="/images/top-right-arrow.png"
                          className={`${Navbar.top_right_arrow_icon} ${
                            lang == "ar" ? `img_rotate` : ``
                          }`}
                        />
                      </li>
                    </>
                  ) : (
                    ""
                  )}
                  <li>
                    {" "}
                    <Link href="/careers" onClick={hambOff}>
                      {" "}
                      Careers{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/newsAndInsights" onClick={hambOff}>
                      {" "}
                      News & Insights{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/contact" onClick={hambOff}>
                      {" "}
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Index;
