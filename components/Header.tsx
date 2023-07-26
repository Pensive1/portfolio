'use-client';
import Link from "next/link";

export default function Header () {
    return (
    <header>
        <div className="responsive-wrapper">
            <div className="logo">Richard Acquaye</div>
            <nav className="navigation">
                <Link href={'/'}>Work</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Blog</Link>
            </nav>
        </div>
    </header>
    )
}