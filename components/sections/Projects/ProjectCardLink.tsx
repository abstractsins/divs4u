import Link from "next/link";

import { IconType } from "react-icons";

import { SiGithub, SiVercel } from "react-icons/si";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { LuComputer } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { ProjectLinkType } from "./ProjectMinorCard";

interface Props {
    linkType: ProjectLinkType;
    link: string;
    icon?: IconType;
}

export default function ProjectCardLink({ linkType, link, icon: Icon }: Props) {

    const typeToText = (linkType: string): string => {
        switch (linkType) {
            case 'repo': return 'Repo';
            case 'live': return 'Live Link';
            case 'preview': return 'Preview';
            case 'video': return 'Video';
            default: return '';
        }
    };

    const typeToIcon = (linkType: string): IconType => {
        switch (linkType) {
            case 'repo': return SiGithub;
            case 'live': return FaReact;
            case 'preview': return LuComputer;
            case 'video': return MdOutlineOndemandVideo;
            default: return SiVercel;
        }
    }

    if (!Icon) Icon = typeToIcon(linkType);

    return (
        <span><Link href={link} target='_new'><Icon /> {typeToText(linkType)}</Link></span>
    );
}