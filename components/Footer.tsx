"use-client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="responsive-wrapper">
        <div className="footer__links">
          <Link href={"https://github.com/Pensive1"}>GitHub</Link>
          <Link href={"https://www.linkedin.com/in/richardacquaye/"}>
            LinkedIn
          </Link>
          <Link href={"/"}>Email</Link>
        </div>
        <p className="footer__statement">
          Designed and built by Richard Acquaye
        </p>
      </div>
    </footer>
  );
}
