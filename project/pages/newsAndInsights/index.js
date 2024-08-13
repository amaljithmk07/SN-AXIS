import React, { useEffect, useState } from "react";
import newsAndInsights from "@/styles/NewsAndInsights.module.css";
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
    <div className={lang == "ar" ? "rtl" : "ltr"}>
      <div
        className="image_body"
        style={{ background: `url(/images/news-and-insights.png) bottom` }}
      >
        <span className="container ">
          <h1>News & Insights</h1>
        </span>
      </div>

      {/* /// */}

      <div
        className={`${newsAndInsights.news_and_insights_content_section} container`}
      >
        <div
          className={
            newsAndInsights.news_and_insights_content_section_searchbar_sec
          }
        >
          <div
            className={
              newsAndInsights.news_and_insights_content_section_searchbar
            }
          >
            <input placeholder="Search..." type="text" />
            {/* <img
              src="/images/search-icon.png"
              className={
                newsAndInsights.news_and_insights_content_section_searchbar_icon
              }
            /> */}
            <Image
              height={18}
              width={18}
              alt=""
              src="/images/search-icon.png"
              className={
                newsAndInsights.news_and_insights_content_section_searchbar_icon
              }
            />
          </div>
          {/* ///// */}
          <div
            className={
              newsAndInsights.news_and_insights_content_section_dropdown
            }
          >
            In The News{" "}
            {/* <img
              src="/images/dropdown-arrow.png"
              className={
                newsAndInsights.news_and_insights_content_section_dropdown_icon
              }
            /> */}
            <Image
              height={9}
              width={18}
              alt=""
              src="/images/dropdown-arrow.png"
              className={
                newsAndInsights.news_and_insights_content_section_dropdown_icon
              }
            />
          </div>
        </div>
        {/* /////////////////////////////////// */}
        <div className={newsAndInsights.news_and_insights_content_card_sec}>
          <Link
            href={"/newsAndInsightsDetail"}
            className={newsAndInsights.news_and_insights_insight_card}
          >
            <div
              className={newsAndInsights.news_and_insights_insight_card_date}
            >
              26-07-2024
            </div>

            {/* <img
              src="/images/news-insight-1.png"
              alt=""
              className={newsAndInsights.news_and_insights_insight_card_img}
            /> */}
            <Image
              height={300}
              width={300}
              src="/images/news-insight-1.png"
              alt=""
              className={newsAndInsights.news_and_insights_insight_card_img}
            />
            <div
              className={newsAndInsights.news_and_insights_insight_card_data}
            >
              <span>News </span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
            </div>
          </Link>
          <Link
            href={"/newsAndInsightsDetail"}
            className={newsAndInsights.news_and_insights_insight_card}
          >
            <div
              className={newsAndInsights.news_and_insights_insight_card_date}
            >
              26-07-2024
            </div>

            <Image
              height={300}
              width={300}
              src="/images/news-insight-2.png"
              alt=""
              className={newsAndInsights.news_and_insights_insight_card_img}
            />
            <div
              className={newsAndInsights.news_and_insights_insight_card_data}
            >
              <span>News </span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
            </div>
          </Link>
          <Link
            href={"/newsAndInsightsDetail"}
            className={newsAndInsights.news_and_insights_insight_card}
          >
            <div
              className={newsAndInsights.news_and_insights_insight_card_date}
            >
              26-07-2024
            </div>

            <Image
              height={300}
              width={300}
              src="/images/news-insight-3.png"
              alt=""
              className={newsAndInsights.news_and_insights_insight_card_img}
            />
            <div
              className={newsAndInsights.news_and_insights_insight_card_data}
            >
              <span>News </span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
            </div>
          </Link>
          <Link
            href={"/newsAndInsightsDetail"}
            className={newsAndInsights.news_and_insights_insight_card}
          >
            <div
              className={newsAndInsights.news_and_insights_insight_card_date}
            >
              26-07-2024
            </div>

            <Image
              height={300}
              width={300}
              src="/images/news-insight-4.png"
              alt=""
              className={newsAndInsights.news_and_insights_insight_card_img}
            />
            <div
              className={newsAndInsights.news_and_insights_insight_card_data}
            >
              <span>News </span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
            </div>
          </Link>
          <Link
            href={"/newsAndInsightsDetail"}
            className={newsAndInsights.news_and_insights_insight_card}
          >
            <div
              className={newsAndInsights.news_and_insights_insight_card_date}
            >
              26-07-2024
            </div>

            <Image
              height={300}
              width={300}
              src="/images/news-insight-5.png"
              alt=""
              className={newsAndInsights.news_and_insights_insight_card_img}
            />
            <div
              className={newsAndInsights.news_and_insights_insight_card_data}
            >
              <span>News </span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
            </div>
          </Link>
          <Link
            href={"/newsAndInsightsDetail"}
            className={newsAndInsights.news_and_insights_insight_card}
          >
            <div
              className={newsAndInsights.news_and_insights_insight_card_date}
            >
              26-07-2024
            </div>

            <Image
              height={300}
              width={300}
              src="/images/news-insight-6.png"
              alt=""
              className={newsAndInsights.news_and_insights_insight_card_img}
            />
            <div
              className={newsAndInsights.news_and_insights_insight_card_data}
            >
              <span>News </span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
            </div>
          </Link>
          <Link
            href={"/newsAndInsightsDetail"}
            className={newsAndInsights.news_and_insights_insight_card}
          >
            <div
              className={newsAndInsights.news_and_insights_insight_card_date}
            >
              26-07-2024
            </div>

            <Image
              height={300}
              width={300}
              src="/images/news-insight-1.png"
              alt=""
              className={newsAndInsights.news_and_insights_insight_card_img}
            />
            <div
              className={newsAndInsights.news_and_insights_insight_card_data}
            >
              <span>News </span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
            </div>
          </Link>
          <Link
            href={"/newsAndInsightsDetail"}
            className={newsAndInsights.news_and_insights_insight_card}
          >
            <div
              className={newsAndInsights.news_and_insights_insight_card_date}
            >
              26-07-2024
            </div>

            <Image
              height={300}
              width={300}
              src="/images/news-insight-2.png"
              alt=""
              className={newsAndInsights.news_and_insights_insight_card_img}
            />
            <div
              className={newsAndInsights.news_and_insights_insight_card_data}
            >
              <span>News </span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
            </div>
          </Link>
          <Link
            href={"/newsAndInsightsDetail"}
            className={newsAndInsights.news_and_insights_insight_card}
          >
            <div
              className={newsAndInsights.news_and_insights_insight_card_date}
            >
              26-07-2024
            </div>

            <Image
              height={300}
              width={300}
              src="/images/news-insight-3.png"
              alt=""
              className={newsAndInsights.news_and_insights_insight_card_img}
            />
            <div
              className={newsAndInsights.news_and_insights_insight_card_data}
            >
              <span>News </span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
            </div>
          </Link>
          <Link
            href={"/newsAndInsightsDetail"}
            className={newsAndInsights.news_and_insights_insight_card}
          >
            <div
              className={newsAndInsights.news_and_insights_insight_card_date}
            >
              26-07-2024
            </div>

            <Image
              height={300}
              width={300}
              src="/images/news-insight-4.png"
              alt=""
              className={newsAndInsights.news_and_insights_insight_card_img}
            />
            <div
              className={newsAndInsights.news_and_insights_insight_card_data}
            >
              <span>News </span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
            </div>
          </Link>
          <Link
            href={"/newsAndInsightsDetail"}
            className={newsAndInsights.news_and_insights_insight_card}
          >
            <div
              className={newsAndInsights.news_and_insights_insight_card_date}
            >
              26-07-2024
            </div>

            <Image
              height={300}
              width={300}
              src="/images/news-insight-5.png"
              alt=""
              className={newsAndInsights.news_and_insights_insight_card_img}
            />
            <div
              className={newsAndInsights.news_and_insights_insight_card_data}
            >
              <span>News </span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
            </div>
          </Link>
          <Link
            href={"/newsAndInsightsDetail"}
            className={newsAndInsights.news_and_insights_insight_card}
          >
            <div
              className={newsAndInsights.news_and_insights_insight_card_date}
            >
              26-07-2024
            </div>

            <Image
              height={300}
              width={300}
              src="/images/news-insight-6.png"
              alt=""
              className={newsAndInsights.news_and_insights_insight_card_img}
            />
            <div
              className={newsAndInsights.news_and_insights_insight_card_data}
            >
              <span>News </span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and industry.{" "}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
