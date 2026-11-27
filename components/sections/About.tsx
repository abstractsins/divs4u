"use client";

import { useEffect, useState, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "../MainContent.module.css";
import TypeBox from "./About/TypeBox";

import { strings } from "@/constants";
import { useEnterToNext } from "@/hooks/useEnterToNext";

import AboutBio from "./About/AboutBio";
import { Sections } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEnterToNext(Sections.Contact, Sections.About, Sections.Projects);

  const [typeOn, setTypeOn] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;
    const st = ScrollTrigger.create({
      trigger: boxRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => setTypeOn(true),
    });
    return () => st.kill();
  }, []);

  return (
    <section id={Sections.About} className={styles["about-container"]}>
      <h2 className={`${styles["section-title"]}`}>About</h2>
      <div className={styles["about-body"]}>
        <div className={`bio-left ${styles["bio-left"]}`}>
          <div
            id="bio-pic"
            className={`about-fade image-container ${styles["bio-pic"]}`}
          ></div>

          <div ref={boxRef}>
            <TypeBox active={typeOn} data={strings.about.typeBoxSkills} />
          </div>
        </div>
        <div className={`bio-right ${styles["bio-right"]}`}>
          <div
            id="about-text-container"
            className={`about-fade ${styles["about-text-container"]} text-3xl`}
          >
            <AboutBio />
          </div>
        </div>
      </div>
    </section>
  );
}
