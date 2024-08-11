import React from "react";
import contact from "./contact.module.css";
const Index = () => {
  return (
    <div>
      <div
        className="image_body"
        style={{ background: `url(/images/Contact-background.png)` }}
      >
        <span className="container">
          <h1> Contact</h1>
        </span>
      </div>
      {/* // */}
      <div className={`${contact.contact_detail_content_body} container `}>
        <div
          className={`${contact.contact_detail_path_sec}  font_playfair`}
        >
          Connect{" "}
        </div>
        <div className={contact.contact_detail_content_section}>
          <div className={contact.contact_detail_content_sec_left}>
            <div className={contact.contact_detail_content_sec_left_title}>
              Get In Touch
              <span>
                Have a question or need assistance? We're here to help!
              </span>
            </div>
            <div className={contact.contact_detail_content_sec_left_data}>
              <img src="/images/mail.png" />
              info@snaxis.com
            </div>
            <div className={contact.contact_detail_content_sec_left_data}>
              <img src="/images/location.png" /> Dubai – UAE
            </div>
            <div className={contact.contact_detail_content_sec_left_data}>
              <img src="/images/call.png" /> +971 4 413 06 19
            </div>
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
