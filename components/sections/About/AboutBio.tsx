import styles from "./AboutBio.module.css";

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

export default function AboutBio() {
  return (
    <div className={`about-fade`}>
      <h3 id="about-bio-title" className="sr-only">
        About Daniel
      </h3>

      <p className={styles["lede"]}>
        <strong>
          Hi, I'm Daniel — full-stack JavaScript dev &amp; solutions engineer.
        </strong>{" "}
      </p>
      <p className={styles["main-p"]}>
        I turn fuzzy ideas into shipped features: design the schema, build the
        API, wire the UI, and ship with confidence. My day-to-day is
        <strong> Next.js (App Router)</strong>, <strong>Node</strong>, and
        <strong> Postgres/Prisma</strong>, with charts in{" "}
        <strong>Recharts </strong>
        and CI/CD on <strong>Vercel/Railway</strong>. I come from a
        solutions/support background, so I debug with empathy, leave clear docs,
        and value communication.
      </p>

      <div className="flex justify-between">
        <ul className={styles["list"]}>
          <li>
            🚀 <b>Build &amp; ship:</b> feature flags, auth, uploads, data viz
          </li>
          <li>
            🧰 <b>Stack:</b> TypeScript • Next.js • Node • Postgres/Prisma
          </li>
          <li>
            📊 <b>Frontend:</b> accessible UI, performance tuning, charts
          </li>
          <li>
            🔧 <b>Backend:</b> API design, auth (JWT/session), data modeling &
            migrations
          </li>
          <li>
            🤝 <b>Mindset:</b> experiment → reproduce → fix → document → prevent
          </li>
        </ul>
        <div className={styles["logos-container"]}>
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
