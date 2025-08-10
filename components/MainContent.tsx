import styles from './MainContent.module.css'

import Header from "./Header";
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';


export default function MainContent() {
    return (
        <div className={styles['main-content']}>
            <Header />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}