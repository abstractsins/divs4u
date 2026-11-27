import ContactForm from "@/components/sections/Contact/ContactForm";
import styles from "@/components/MainContent.module.css";
import Connect from "./Contact/Connect";

import { useEnterToNext } from "@/hooks/useEnterToNext";
import { Sections } from "@/constants";

export default function Contact() {
  useEnterToNext(Sections.Projects, Sections.Contact, Sections.About);

  return (
    <section id={Sections.Contact} className={styles["contact-container"]}>
      <h2 className={` ${styles["section-title"]}`}>Contact</h2>
      <div className={styles["contact-body"]}>
        <ContactForm />
        <Connect />
      </div>
    </section>
  );
}
