import { svgIconProps } from "@/types/componentProps";

export default function IcnBurgerMenu({ size, fillColor }: svgIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 15C16.8791 15.0002 17.0834 15.0815 17.2378 15.2274C17.3923 15.3732 17.4852 15.5724 17.4976 15.7845C17.5101 15.9965 17.4411 16.2053 17.3048 16.3682C17.1685 16.5311 16.9751 16.6357 16.7642 16.6608L16.6667 16.6666H3.33333C3.12093 16.6664 2.91664 16.5851 2.76219 16.4393C2.60775 16.2935 2.5148 16.0942 2.50236 15.8822C2.48991 15.6701 2.5589 15.4613 2.69522 15.2985C2.83155 15.1356 3.02492 15.0309 3.23583 15.0058L3.33333 15H16.6667ZM16.6667 9.16665C16.8877 9.16665 17.0996 9.25444 17.2559 9.41072C17.4122 9.567 17.5 9.77897 17.5 9.99998C17.5 10.221 17.4122 10.433 17.2559 10.5892C17.0996 10.7455 16.8877 10.8333 16.6667 10.8333H3.33333C3.11232 10.8333 2.90036 10.7455 2.74408 10.5892C2.5878 10.433 2.5 10.221 2.5 9.99998C2.5 9.77897 2.5878 9.567 2.74408 9.41072C2.90036 9.25444 3.11232 9.16665 3.33333 9.16665H16.6667ZM16.6667 3.33331C16.8877 3.33331 17.0996 3.42111 17.2559 3.57739C17.4122 3.73367 17.5 3.94563 17.5 4.16665C17.5 4.38766 17.4122 4.59962 17.2559 4.7559C17.0996 4.91218 16.8877 4.99998 16.6667 4.99998H3.33333C3.11232 4.99998 2.90036 4.91218 2.74408 4.7559C2.5878 4.59962 2.5 4.38766 2.5 4.16665C2.5 3.94563 2.5878 3.73367 2.74408 3.57739C2.90036 3.42111 3.11232 3.33331 3.33333 3.33331H16.6667Z"
        fill={fillColor}
      />
    </svg>
  );
}
