//* ICONS
import { ReactElement } from "react";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";

import { FaNodeJs, FaReact } from "react-icons/fa";

import {
    RiNextjsFill,
    RiVercelFill,
    RiJavascriptLine,
} from "react-icons/ri";

import {
    SiExpress,
    SiPrisma,
    SiHtml5,
    SiCss3,
    SiGithub,
    SiRailway,
    SiSfml,
    SiCplusplus
} from "react-icons/si";

interface Props {
    logos: string[];
}

const ICONS: Record<string, ReactElement> = {
    react: <FaReact title="ReactJS" />,
    next: <RiNextjsFill title="Next.js" />,
    typescript: <BiLogoTypescript title="TypeScript" />,
    node: <FaNodeJs title="Node.js" />,
    express: <SiExpress title="Express.js" />,
    vercel: <RiVercelFill title="Vercel" />,
    postgres: <BiLogoPostgresql title="PostgreSQL" />,
    railway: <SiRailway title="Railway" />,
    javascript: <RiJavascriptLine title="JavaScript" />,
    prisma: <SiPrisma title="Prisma" />,
    html: <SiHtml5 title="HTML5" />,
    css: <SiCss3 title="CSS3" />,
    github: <SiGithub title='Github' />,
    sfml: <SiSfml title="SFML 3.0" />,
    cpp: <SiCplusplus title="C++" />
};

export default function ProjectCardLogos({ logos }: Props) {

    return (
        <>
            {logos.map((key) => ICONS[key] ? <span key={key}>{ICONS[key.toLowerCase()]}</span> : null)}
        </>
    );
}