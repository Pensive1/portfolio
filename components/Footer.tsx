"use client";
import FooterIconLink from "./FooterIconLink";

export default function Footer() {
  return (
    <footer className="footer p-4 flex flex-col items-center max-xl:gradient-border md:p-0 xl:w-[100vw]">
      <div className="flex flex-col gap-6 md:py-4 2xl:flex-row-reverse justify-between xl:gradient-border xl:w-[var(--1280-wrapper)] 2xl:w-[var(--1440-wrapper)]">
        <div className="flex gap-8 justify-center md:gap-[4.44rem]">
          <FooterIconLink
            href={"https://github.com/Pensive1"}
            iconType="github"
          >
            GitHub
          </FooterIconLink>
          <FooterIconLink
            href={"https://www.linkedin.com/in/richardacquaye/"}
            iconType="linkedin"
          >
            LinkedIn
          </FooterIconLink>
          <FooterIconLink
            href={"https://medium.com/@racquaye89"}
            iconType="medium"
          >
            Blog
          </FooterIconLink>
          <FooterIconLink
            href={"mailto:richard.acquaye@hotmail.co.uk"}
            iconType="email"
          >
            Email
          </FooterIconLink>
        </div>
        <span className="footnote text-center text-[rgb(var(--txt-footnote))]">
          Designed and built by Richard Acquaye
        </span>
      </div>
    </footer>
  );
}
