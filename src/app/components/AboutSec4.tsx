"use client";

import React from "react";
import linkedInIcon from "../components/Images/linkedin-in.svg";
import fbIcon from "../components/Images/facebook-f.svg";
import twitterIcon from "../components/Images/twitter.svg";
import youtubeIcon from "../components/Images/youtube.svg";
import link2 from "../components/Images/link2.svg";
import fb2 from "../components/Images/fb2.svg";
import twitter2 from "../components/Images/twitter2.svg";
import youtube2 from "../components/Images/youtube2.svg";

export const AboutSec4 = () => {
  const secs = [
    {
      title: "ABOUT INNOMINDS",
      desc: "Innominds is an AI-first, platform-led Digital Transformation and full-cycle Product Engineering Services company headquartered in San Jose, CA.",
      btn_text: "Learn More",
    },
    {
      title: "OUR PORTFOLIO",
      desc: "Innominds has helped launch several products in the last 5 years alone. Explore featured case studies from our expansive portfolio of products and solutions.",
      btn_text: "View Work",
    },
  ];
  const socialMediaIcons = [
    {
      href: "https://www.linkedin.com/company/innominds",
      title: "visit linkedin page",
      icon: linkedInIcon,
      icon2: link2,
    },
    {
      href: "https://www.twitter.com/innominds",
      title: "visit twitter page",
      icon: twitterIcon,
      icon2: twitter2,
    },
    {
      href: "https://www.facebook.com/Innominds/",
      title: "visit facebook page",
      icon: fbIcon,
      icon2: fb2,
    },
    {
      href: "https://www.youtube.com/channel/UC7LY6NzRPycYDa2-dbV5SeA",
      title: "visit youtube page",
      icon: youtubeIcon,
      icon2: youtube2,
    }, 
  ];
  return (
    <div className="flex py-[50px] flex-col md:flex-row sm:items-center md:items-start">
      {secs.map((eachSec,index) => (
        <div key={index} className="px-[23px] pb-[30px] flex flex-col items-center text-center md:w-1/3">
          <h1 className="mb-[25px] font-extrabold text-[24px] leading-[23px]">
            {eachSec.title}
          </h1>
          <p className="mb-[5px] text-[14px] leading-[27px]">{eachSec.desc}</p>
          <button className="bg-[#D04825] hover:bg-white hover:text-[#D04825] text-[20px] mt-[20px] text-[#fff] rounded-3xl w-[162px] h-[49px] font-medium shadow hover:shadow-1 hover:shadow-10 hover:shadow-gray-400 ">
            {eachSec.btn_text}
          </button>
        </div>
      ))}
      <div className="flex flex-col items-center px-[23px] pb-[30px] text-center md:w-1/3 leading-[27px]">
        <h1 className="mb-[25px] font-extrabold text-[24px]">CONNECT</h1>
        <p className="mb-[5px] text-[14px]">
          We would love to hear from you.
          <br />
          <span className="text-[#e84924] text-[27px]">Say hello!</span>
          <br />
          <a
            href="mailto:marketing@innominds.com"
            className="text-[20px] underline"
          >
            marketing@innominds.com
          </a>
        </p>
        <div className="flex items-center mt-[20px]">
          {socialMediaIcons.map((icon,index) => {
            return (
              <div key={index} className="h-[36px] w-[36px] mr-[11px] flex justify-center items-center rounded-full bg-[#e84924] hover:bg-[#fff] shadow hover:shadow-1 hover:shadow-10 hover:shadow-gray-400">
                <a href={icon.href} target="_blank" title={icon.title}>
                  {/* <img
                    alt="img"
                    src={icon.icon.src}
                    onMouseOver={(e) => (e.currentTarget.src = icon.icon2.src)}
                    onMouseOut={(e) => (e.currentTarget.src = icon.icon.src)}
                    className="h-[17px] w-[16px]"
                  /> */}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
