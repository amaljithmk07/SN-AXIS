import React, { useEffect, useState } from "react";
import careers from "@/styles/careers.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    setLang(router.locale);
  }, []);
  const [lang, setLang] = useState();

  return (
    <div className={lang == "en" ? "ltr" : "rtl"}>
      {/* //banking_image_body/ */}
      <div
        className="image_body"
        style={{ background: `url(/images/career.png) center` }}
      >
        <span className=" container">
          <h1>Career</h1>
        </span>
      </div>
      {/* //////// */}

      <div className={`${careers.careers_section} container `}>
        <div className={`${careers.careers_title} font_playfair`}>
          <h2>
            Current <br /> Openings
          </h2>
        </div>
        <div className={careers.careers_card_container}>
          <div className={careers.careers_card}>
            {/* <img
              src="/images/bookmark.png"
              className={careers.careers_card_bookmark_img}
            /> */}
            <Image
              height={24}
              width={24}
              alt=""
              src="/images/bookmark.png"
              className={`${careers.careers_card_bookmark_img} ${
                lang == "ar" ? "left_padding" : "right_padding"
              }`}
            />
            <div className={careers.careers_card_data}>
              <span>Senior Management Assistant </span>
              <div>Credit Risk Management </div>{" "}
              <div>
                {" "}
                {/* <img src="/images/location.png" />  */}
                <Image
                  height={25}
                  width={25}
                  alt=""
                  src="/images/location.png"
                />
                Dubai
              </div>
              <div>
                {/* <img src="/images/position.png" />  */}
                <Image
                  alt=""
                  height={25}
                  width={25}
                  src="/images/position.png"
                />
                Posted Today
              </div>
            </div>
            <Link
              href={"/careersdetail"}
              className={`${careers.careers_card_btn} ${
                lang == "ar" ? "left_padding" : "right_padding"
              }`}
            >
              JOB DETAILS
            </Link>
          </div>
          <div className={careers.careers_card}>
            {/* <img
              src="/images/bookmark.png"
              className={careers.careers_card_bookmark_img}
            /> */}
            <Image
              height={24}
              width={24}
              alt=""
              src="/images/bookmark.png"
              className={`${careers.careers_card_bookmark_img} ${
                lang == "ar" ? "left_padding" : "right_padding"
              }`}
            />
            <div className={careers.careers_card_data}>
              <span>Senior Management Assistant </span>
              <div>Credit Risk Management </div>{" "}
              <div>
                {" "}
                {/* <img src="/images/location.png" />  */}
                <Image
                  alt=""
                  height={25}
                  width={25}
                  src="/images/location.png"
                />
                Dubai
              </div>
              <div>
                {/* <img src="/images/position.png" />  */}
                <Image
                  alt=""
                  height={25}
                  width={25}
                  src="/images/position.png"
                />
                Posted Today
              </div>
            </div>
            <Link
              href={"/careersdetail"}
              className={`${careers.careers_card_btn} ${
                lang == "ar" ? "left_padding" : "right_padding"
              }`}
            >
              JOB DETAILS
            </Link>
          </div>
          <div className={careers.careers_card}>
            {/* <img
              src="/images/bookmark.png"
              className={careers.careers_card_bookmark_img}
            /> */}
            <Image
              height={24}
              width={24}
              alt=""
              src="/images/bookmark.png"
              className={`${careers.careers_card_bookmark_img} ${
                lang == "ar" ? "left_padding" : "right_padding"
              }`}
            />
            <div className={careers.careers_card_data}>
              <span>Senior Management Assistant </span>
              <div>Credit Risk Management </div>{" "}
              <div>
                {" "}
                {/* <img src="/images/location.png" />  */}
                <Image
                  alt=""
                  height={25}
                  width={25}
                  src="/images/location.png"
                />
                Dubai
              </div>
              <div>
                {/* <img src="/images/position.png" />  */}
                <Image
                  alt=""
                  height={25}
                  width={25}
                  src="/images/position.png"
                />
                Posted Today
              </div>
            </div>
            <Link
              href={"/careersdetail"}
              className={`${careers.careers_card_btn} ${
                lang == "ar" ? "left_padding" : "right_padding"
              }`}
            >
              JOB DETAILS
            </Link>
          </div>
          <div className={careers.careers_card}>
            {/* <img
              src="/images/bookmark.png"
              className={careers.careers_card_bookmark_img}
            /> */}
            <Image
              height={24}
              width={24}
              alt=""
              src="/images/bookmark.png"
              className={`${careers.careers_card_bookmark_img} ${
                lang == "ar" ? "left_padding" : "right_padding"
              }`}
            />
            <div className={careers.careers_card_data}>
              <span>Senior Management Assistant </span>
              <div>Credit Risk Management </div>{" "}
              <div>
                {" "}
                {/* <img src="/images/location.png" />  */}
                <Image
                  alt=""
                  height={25}
                  width={25}
                  src="/images/location.png"
                />
                Dubai
              </div>
              <div>
                {/* <img src="/images/position.png" />  */}
                <Image
                  alt=""
                  height={25}
                  width={25}
                  src="/images/position.png"
                />
                Posted Today
              </div>
            </div>
            <Link
              href={"/careersdetail"}
              className={`${careers.careers_card_btn} ${
                lang == "ar" ? "left_padding" : "right_padding"
              }`}
            >
              JOB DETAILS
            </Link>
          </div>
          <div className={careers.careers_card}>
            {/* <img
              src="/images/bookmark.png"
              className={careers.careers_card_bookmark_img}
            /> */}
            <Image
              height={24}
              width={24}
              alt=""
              src="/images/bookmark.png"
              className={`${careers.careers_card_bookmark_img} ${
                lang == "ar" ? "left_padding" : "right_padding"
              }`}
            />
            <div className={careers.careers_card_data}>
              <span>Senior Management Assistant </span>
              <div>Credit Risk Management </div>{" "}
              <div>
                {" "}
                {/* <img src="/images/location.png" />  */}
                <Image
                  alt=""
                  height={25}
                  width={25}
                  src="/images/location.png"
                />
                Dubai
              </div>
              <div>
                {/* <img src="/images/position.png" />  */}
                <Image
                  alt=""
                  height={25}
                  width={25}
                  src="/images/position.png"
                />
                Posted Today
              </div>
            </div>
            <Link
              href={"/careersdetail"}
              className={`${careers.careers_card_btn} ${
                lang == "ar" ? "left_padding" : "right_padding"
              }`}
            >
              JOB DETAILS
            </Link>
          </div>
          <div className={careers.careers_card}>
            {/* <img
              src="/images/bookmark.png"
              className={careers.careers_card_bookmark_img}
            /> */}
            <Image
              height={24}
              width={24}
              alt=""
              src="/images/bookmark.png"
              className={`${careers.careers_card_bookmark_img} ${
                lang == "ar" ? "left_padding" : "right_padding"
              }`}
            />
            <div className={careers.careers_card_data}>
              <span>Senior Management Assistant </span>
              <div>Credit Risk Management </div>{" "}
              <div>
                {" "}
                {/* <img src="/images/location.png" />  */}
                <Image
                  alt=""
                  height={25}
                  width={25}
                  src="/images/location.png"
                />
                Dubai
              </div>
              <div>
                {/* <img src="/images/position.png" />  */}
                <Image
                  alt=""
                  height={25}
                  width={25}
                  src="/images/position.png"
                />
                Posted Today
              </div>
            </div>
            <Link
              href={"/careersdetail"}
              className={`${careers.careers_card_btn} ${
                lang == "ar" ? "left_padding" : "right_padding"
              }`}
            >
              JOB DETAILS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
