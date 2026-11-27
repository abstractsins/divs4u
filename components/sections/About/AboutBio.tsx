//* ICONS
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiJavascriptLine, RiVercelFill } from "react-icons/ri";
import {
  SiExpress,
  SiPrisma,
  SiHtml5,
  SiCss3,
  SiRailway,
} from "react-icons/si";

import { strings, graphicDimensions } from "@/constants";

//* STYLES
import styles from "./AboutBio.module.css";
import AZDOIcon from "./AZDOIcon";
import DotNetIcon from "./DotNetIcon";

export default function AboutBio() {
  const { bio } = strings.about;

  return (
    <div className={`about-fade`}>
      <h3 id="about-bio-title" className="sr-only">
        About Daniel
      </h3>

      <p className={styles.lede}>
        <strong>{bio.lede.title}</strong>
        <br />
        {bio.lede.subTitle}
      </p>

      <div className={styles.bioTextWrapper}>
        <p className={styles.bioText}>{bio.main.p1}</p>
        <p className={styles.bioText}>{bio.main.p2}</p>
      </div>

      <div className="flex justify-between">
        <ul className={styles["list"]}>
          {bio.skillList.map((skillSet) => (
            <li key={skillSet.label}>
              {skillSet.emoji} <b>{skillSet.label}:</b>{" "}
              {skillSet.values.join(", ")}
            </li>
          ))}
        </ul>

        <div className={styles["logos-container"]}>
          <AZDOIcon dimensions={graphicDimensions.icons.devTech.square} />
          <DotNetIcon dimensions={graphicDimensions.icons.devTech.square} />
          <FaNodeJs />
          <FaReact />
          <RiVercelFill />
          <RiNextjsFill />
          <SiHtml5 />
          <SiCss3 />
          <RiJavascriptLine />
          <BiLogoTypescript />
          <BiLogoPostgresql />
          <SiExpress />
          <SiRailway />
          <SiPrisma />
        </div>
      </div>
    </div>
  );
}
