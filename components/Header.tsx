//* ------------------------------------------------------ //
//* ----------------------- IMPORT ----------------------- //
//* ------------------------------------------------------ //

import Link from "next/link";
import type { MouseEvent } from "react";




//* ------------------------------------------------------ //
//* ----------------------- EXPORT ----------------------- //
//* ------------------------------------------------------ //

export default function Header() {
    const handleSectionNav = (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
        event.preventDefault();

        const section = document.querySelector(hash);
        if (!section) return;

        section.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", hash);
    };

    return (
        <header className="font-mono font-bold tracking-widest text-lg">
            <Link href={"#hero"} onClick={(event) => handleSectionNav(event, "#hero")}> Home </Link>
            <Link href={"#about"} onClick={(event) => handleSectionNav(event, "#about")}> About </Link>
            <Link href={"#projects"} onClick={(event) => handleSectionNav(event, "#projects")}> Projects </Link>
            <Link href={"#contact"} onClick={(event) => handleSectionNav(event, "#contact")}> Contact </Link>
        </header>
    );
}