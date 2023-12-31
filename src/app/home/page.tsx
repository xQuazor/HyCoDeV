"use client";

import styles from "../../../styles/page-home.module.scss";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import typography from "../../../scss/base/_typography.module.scss";
import utilities from "../../../scss/base/_utilities.module.scss";
import { homeImages } from "../../assets/home-slides";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Home() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  const slideRef = useRef(null);
  const [hover, setHover] = useState(-1);

  const blurSlide = (i) => {
    setHover(i);
  };

  const unblurSlide = () => {
    setHover(-1);
  };

  useEffect(() => {
    const slide = slideRef.current;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container_text}>
        <div className={styles.mobile_text}>
          <h1 className={styles.heading_primary + " " + utilities.bot_margin}>
            HyCoDeV Lab
          </h1>
          <Image
            src={"/../public/images/icons/hycodev.png"}
            width={132 * 1}
            height={110 * 1}
            quality={100}
            className={styles.mobile_logo + " " + utilities.bot_margin__small}
          ></Image>
          <h1 className={styles.mobile_heading + " " + utilities.bot_margin}>
            Hybrid Systems: Control, Design and Verification Lab
          </h1>
          <p className={typography.paragraph + " " + utilities.bot_margin}>
            Where we research about formal methods for control, design and
            verification of hybrid systems.
          </p>
        </div>
        <div style={width < 900 ? { display: "none" } : { display: "block" }}>
          <p
            className={
              typography.paragraph__lighter + " " + utilities.bot_margin__small
            }
          >
            Sadegh Soudjani is associated with
          </p>
          <div
            className={styles.container_text_logos + " " + utilities.bot_margin}
          >
            {/*<Image*/}
            {/*  src={"/../public/images/home/ncl_logo.png"}*/}
            {/*  width={200 / 1.75}*/}
            {/*  height={60 / 1.75}*/}
            {/*  quality={100}*/}
            {/*  key={"/../public/images/home/ncl_logo.png"}*/}
            {/*/>*/}
            <Image
              src={"/../public/images/home/mpi-sws.png"}
              width={350 / 1.75}
              height={60 / 1.75}
              quality={100}
              key={"/../public/images/home/mpi-sws.png"}
            />
          </div>
        </div>
      </div>
      <div
        className={styles.wrapper_showcase}
        style={
          hover > -1
            ? {
                backgroundColor: "#1f1f1f",
                transition: "1.5s cubic-bezier(1,-0.01,.78,1)",
              }
            : { backgroundColor: "transparent", transitionDuration: "0.1s" }
        }
      >
        {homeImages.map((item, index) => (
          <div
            className={styles.topic__image}
            key={item.id}
            ref={slideRef}
            onMouseEnter={() => {
              blurSlide(index);
            }}
            onMouseLeave={() => {
              unblurSlide();
            }}
            style={
              hover === -1
                ? { filter: "blur(0px)" }
                : { filter: "blur(0.15rem)" } && hover === index
                ? { filter: "blur(0px)" }
                : { filter: "blur(0.15rem)" }
            }
          >
            <div className={styles.topic__backdrop}></div>
            <div className={styles.topic__text}>
              <h1 className={styles.heading_slide + " " + utilities.bot_margin}>
                {item.title}
              </h1>
              <p
                className={
                  styles.paragraph_slide + " " + utilities.bot_margin__small
                }
              >
                {item.text}
              </p>
              <p
                className={
                  styles.paragraph_slide + " " + utilities.bot_margin__small
                }
              ></p>
              <a
                href={item.link}
                className={styles.topic__link + " " + typography.paragraph}
              >
                Lean more
              </a>
            </div>
            <Image
              className={styles.slide}
              src={item.image}
              style={item.style}
              fill={true}
              quality={80}
              alt={"energy"}
            />
          </div>
        ))}
      </div>
      <a
        href={"/publications-all"}
        className={styles.button + " " + typography.paragraph_highlighted}
        style={
          hover === -1
            ? { opacity: 1, transitionDuration: "0.25s" }
            : { opacity: 0, transitionDuration: "0.25s", pointerEvents: "none" }
        }
      >
        Explore our research areas
        <Image
          src={"/../public/images/icons/arrow.png"}
          width={40}
          height={10}
          style={{ aspectRatio: "2.15/1", scale: "0.75" }}
          quality={100}
        ></Image>
      </a>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={"mySwiper" + " " + styles.slider_mobile}
        style={width < 900 ? {} : { display: "none" }}
      >
        {homeImages.map((slide, index) => {
          return (
            <SwiperSlide className={styles.slider_mobile__slide} key={index}>
              <div className={styles.slider_mobile__backdrop}></div>
              <div className={styles.slider_mobile__text}>
                <h1
                  className={styles.heading_slide + " " + utilities.bot_margin}
                >
                  {slide.title}
                </h1>
                <p
                  className={
                    styles.paragraph_slide + " " + utilities.bot_margin__small
                  }
                >
                  {slide.text}
                </p>
                <p
                  className={
                    styles.paragraph_slide + " " + utilities.bot_margin__small
                  }
                ></p>
                <a
                  href={slide.link}
                  className={styles.topic__link + " " + typography.paragraph}
                >
                  Lean more
                </a>
              </div>
              <Image
                className={styles.slide}
                src={slide.image}
                // style={slide.style}
                fill={true}
                quality={100}
                alt={"energy"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
