import React, { useEffect, useState } from "react";
import careersdetails from "@/styles/careersdetails.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    setLang(router.locale);
  }, []);
  const [lang, setLang] = useState();
  const [fileHandler, setFileHandler] = useState();
  const inputFileHandler = (e) => {
    setFileHandler(e.target.files[0].name);
  };

  return (
    <div className={lang == "en" ? "ltr" : "rtl"}>
      {/* //Careers_image_body/ */}
      <div
        className="image_body"
        style={{ background: `url(/images/career.png) center` }}
      >
        <span className="container">
          <h1>Career</h1>
        </span>
      </div>

      {/* /// */}

      <div
        className={`${careersdetails.careers_details_content_section} container`}
      >
        <div className={careersdetails.careers_details_content_title}>
          <div>
            <h2>Senior Management Assistant</h2>{" "}
          </div>
          <span>Credit Risk Management</span>

          <div
            className={
              careersdetails.careers_details_content_title_timer_clock_post_sec
            }
          >
            <div
              className={
                careersdetails.careers_details_content_title_timer_clock_post
              }
            >
              <div
                className={
                  careersdetails.careers_details_content_title_timer_body
                }
              >
                {/* <img src="/images/location.png" />  */}
                <Image
                  alt=""
                  height={25}
                  width={25}
                  src="/images/location.png"
                />
                Dubai ,UAE
              </div>
              <div
                className={
                  careersdetails.careers_details_content_title_timer_body
                }
              >
                {/* <img src="/images/clock.png" /> */}
                <Image alt="" height={25} width={25} src="/images/clock.png" />
                Full Time
              </div>
              <div
                className={
                  careersdetails.careers_details_content_title_timer_body
                }
              >
                {/* <img src="/images/position.png" /> */}
                <Image
                  alt=""
                  height={25}
                  width={25}
                  src="/images/position.png"
                />
                Posted Today
              </div>
            </div>

            <button
              className={careersdetails.careers_details_content_title_button}
            >
              APPLY NOW
            </button>
          </div>
        </div>
        <div className={careersdetails.careers_details_content_body}>
          <div className={careersdetails.careers_details_content_body_leftside}>
            <div
              className={
                careersdetails.careers_details_content_body_leftside_content_sec
              }
            >
              <div
                className={
                  careersdetails.careers_details_content_body_leftside_title
                }
              >
                <h3>Your Challenge</h3>
              </div>

              <ul
                className={
                  careersdetails.careers_details_content_body_leftside_content
                }
              >
                <li>
                  Act As First Point Of Contact For Internal Stakeholders Across
                  All Levels Of The Organization And External Clients /
                  Partners.{" "}
                </li>
                <li>
                  Provide Administrative Assistance, Such As Writing And Editing
                  E-mails, Drafting Memos And Preparing Communications On The
                  Executive’s Behalf.
                </li>
                <li>
                  Manage The Executive’s Calendar, Including Scheduling
                  Appointments And Travel And Prioritizing The Most Sensitive
                  Matters.
                </li>
                <li>
                  Organize Internal And External Meetings Including Telephone
                  And Video Conferencing With A Large Number Of Stakeholders.{" "}
                </li>
                <li>
                  Plan And Manage Business Trips Including Travel Planning Such
                  As Flights, Hotels, Transfers And Expense Reports.
                </li>
              </ul>
            </div>
            <div
              className={
                careersdetails.careers_details_content_body_leftside_content_sec
              }
            >
              <div
                className={
                  careersdetails.careers_details_content_body_leftside_title
                }
              >
                <h3>Your Profile </h3>
              </div>

              <ul
                className={
                  careersdetails.careers_details_content_body_leftside_content
                }
              >
                <li>
                  Commercial degree (KV) or equivalent, further education as
                  Executive Assistant would be considered as a strong asset
                </li>
                <li>
                  Minimum 2 years of relevant work experience in an
                  international environment
                </li>
                <li>
                  Discreet and trustworthy individual with absolute dedication
                  to confidentiality
                </li>
                <li>Excellent written and verbal communication skills</li>
                <li>
                  Ability to communicate successfully with various internal and
                  external stakeholders on all levels of the organization
                </li>
                <li>
                  Strong time management skills and ability to multi-task and
                  prioritize work
                </li>
                <li>
                  Ability to function well in a high-paced and at times
                  stressful environment.
                </li>
                <li>Excellent interpersonal and customer service skills</li>
                <li>Attention to detail and problem solving skills </li>
              </ul>
            </div>
          </div>
          <div
            className={careersdetails.careers_details_content_body_rightside}
          >
            <div
              className={
                careersdetails.careers_details_content_body_rightside_content_sec
              }
            >
              <div
                className={
                  careersdetails.careers_details_content_body_rightside_title
                }
              >
                <h3>Apply Online </h3>
              </div>

              <div
                className={
                  careersdetails.careers_details_content_body_rightside_content
                }
              >
                <input
                  type="text"
                  placeholder="First Name"
                  className={
                    careersdetails.careers_details_content_body_rightside_content_input
                  }
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className={
                    careersdetails.careers_details_content_body_rightside_content_input
                  }
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  className={
                    careersdetails.careers_details_content_body_rightside_content_input
                  }
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  className={
                    careersdetails.careers_details_content_body_rightside_content_input
                  }
                />
                <input
                  type="text"
                  placeholder="City"
                  className={
                    careersdetails.careers_details_content_body_rightside_content_input
                  }
                />
                <input
                  type="text"
                  placeholder="LinkedIn URL"
                  className={
                    careersdetails.careers_details_content_body_rightside_content_input
                  }
                />
                <div
                  className={`${
                    lang == "en"
                      ? `${careersdetails.careers_details_content_body_rightside_content_input_file}`
                      : `${careersdetails.careers_details_content_body_rightside_content_input_file_ar}`
                  }`}
                >
                  {fileHandler ? fileHandler : "Attach Resume"}
                  <input
                    type="file"
                    id="uploadFile"
                    hidden
                    onChange={inputFileHandler}
                  />
                  <label
                    htmlFor="uploadFile"
                    className={
                      careersdetails.careers_details_content_body_rightside_content_input_file_btn
                    }
                  >
                    Browse
                  </label>
                </div>
                <button
                  className={
                    careersdetails.careers_details_content_body_rightside_content_submit_btn
                  }
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
