import React, { useEffect, useState } from "react";
import contact from "@/styles/contact.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

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
        style={{ background: `url(/images/contact-background.png) bottom` }}
      >
        <span className="container">
          <h1> Contact</h1>
        </span>
      </div>
      {/* // */}
      <div className={`${contact.contact_detail_content_body} container `}>
        <div className={`${contact.contact_detail_path_sec}  font_playfair`}>
          Connect{" "}
        </div>
        <div className={contact.contact_detail_content_section}>
          <div className={contact.contact_detail_content_sec_left}>
            <div className={contact.contact_detail_content_sec_left_title}>
              Get In Touch
              <span>
                Have a question or need assistance? We &apos; re here to help!
              </span>
            </div>
            <Link
              href={"mailto:nfo@snaxis.com"}
              className={contact.contact_detail_content_sec_left_data}
            >
              {/* <img src="/images/mail.png" /> */}
              <Image height={20} width={25} alt="" src="/images/mail.png" />
              info@snaxis.com
            </Link>
            <div className={contact.contact_detail_content_sec_left_data}>
              {/* <img src="/images/location.png" />  */}
              <Image height={25} width={25} alt="" src="/images/location.png" />
              Dubai – UAE
            </div>
            <Link
              href={"tel:+971 4 413 06 19"}
              className={contact.contact_detail_content_sec_left_data}
            >
              {/* <img src="/images/call.png" /> */}
              <Image
                height={25}
                width={25}
                alt=""
                src="/images/call.png"
                className={lang == "ar" ? "img_rotate" : ""}
              />
              +971 4 413 06 19
            </Link>
          </div>

          <div className={contact.contact_detail_content_sec_right}>
            <div className={contact.contact_detail_content_sec_right_title}>
              Contact us
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </span>
            </div>

            <input
              type="text"
              className={contact.contact_detail_content_sec_right_input}
              placeholder="First Name"
            />
            <input
              type="text"
              className={contact.contact_detail_content_sec_right_input}
              placeholder="Last Name"
            />
            <input
              type="text"
              className={contact.contact_detail_content_sec_right_input}
              placeholder="Email Address"
            />
            <textarea
              className={
                contact.contact_detail_content_sec_right_input_textarea
              }
              placeholder="Message"
            />
            <button
              className={contact.contact_detail_content_sec_right_submit_btn}
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
