//* ------------------------------------------------------ //
//* ----------------------- IMPORT ----------------------- //
//* ------------------------------------------------------ //

import Link from "next/link";
import { useState, type MouseEvent } from "react";
import { graphicDimensions, Sections } from "@/constants";
import styles from "./Nav.module.css";
import { CgClose } from "react-icons/cg";

//* ------------------------------------------------------ //
//* ----------------------- EXPORT ----------------------- //
//* ------------------------------------------------------ //

export default function Navigation() {
  const [isMobileNavOverlayVisible, setMobileNavOverlayVisible] =
    useState(false);
  const [isMobileNavHamburgerVisible, setMobileNavHamburgerVisible] =
    useState(true);

  const handleSectionNav = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();

    mobileNavClickHandler();

    const section = document.querySelector(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", sectionId);
  };

  const mobileNavClickHandler = () => {
    setMobileNavHamburgerVisible((prev) => !prev);
    setMobileNavOverlayVisible((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${styles.mobileNavOverlay} ${isMobileNavOverlayVisible ? styles.visible : styles.hidden}`}
      >
        <CgClose className={styles.closeIcon} onClick={mobileNavClickHandler} />
        <div className={styles.navLinksContainer}>
          <Link
            href={`#${Sections.Hero}`}
            onClick={(event) => handleSectionNav(event, `#${Sections.Hero}`)}
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            href={`#${Sections.About}`}
            onClick={(event) => handleSectionNav(event, `#${Sections.About}`)}
          >
            {" "}
            About{" "}
          </Link>
          <Link
            href={`#${Sections.Projects}`}
            onClick={(event) =>
              handleSectionNav(event, `#${Sections.Projects}`)
            }
          >
            {" "}
            Projects{" "}
          </Link>
          <Link
            href={`#${Sections.Contact}`}
            onClick={(event) => handleSectionNav(event, `#${Sections.Contact}`)}
          >
            {" "}
            Contact{" "}
          </Link>
        </div>
      </div>

      <nav className={styles.navDesktop}>
        <Link
          href={`#${Sections.Hero}`}
          onClick={(event) => handleSectionNav(event, `#${Sections.Hero}`)}
        >
          {" "}
          Home{" "}
        </Link>
        <Link
          href={`#${Sections.About}`}
          onClick={(event) => handleSectionNav(event, `#${Sections.About}`)}
        >
          {" "}
          About{" "}
        </Link>
        <Link
          href={`#${Sections.Projects}`}
          onClick={(event) => handleSectionNav(event, `#${Sections.Projects}`)}
        >
          {" "}
          Projects{" "}
        </Link>
        <Link
          href={`#${Sections.Contact}`}
          onClick={(event) => handleSectionNav(event, `#${Sections.Contact}`)}
        >
          {" "}
          Contact{" "}
        </Link>
      </nav>

      <nav
        className={`${styles.navMobile} ${isMobileNavHamburgerVisible ? styles.visible : styles.hidden}`}
      >
        <div
          className={styles.hamburgerContainer}
          onClick={mobileNavClickHandler}
        >
          <div className={styles.hamburgerWrapper}>
            <div className={styles.hamburgerLine} />
            <div className={styles.hamburgerLine} />
            <div className={styles.hamburgerLine} />
          </div>
        </div>
      </nav>
    </>
  );
}
