//* ------------------------------------------------------ //
//* ----------------------- IMPORT ----------------------- //
//* ------------------------------------------------------ //

import Link from "next/link";




//* ------------------------------------------------------ //
//* ----------------------- EXPORT ----------------------- //
//* ------------------------------------------------------ //

export default function Header() {
    return (
        <header className="font-mono font-bold tracking-widest text-lg">
            <Link href={'#hero'}> Home </Link>
            <Link href={'#about'}> About </Link>
            <Link href={'#projects'}> Projects </Link>
            <Link href={'#contact'}> Contact </Link>
        </header>
    );
}