import { svgIconProps } from "@/types/componentProps";

export default function Info({ size, fillColor }: svgIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM9.99 8C10.5478 8 11 8.4522 11 9.01V14.1338C11.2989 14.3067 11.5 14.6299 11.5 15C11.5 15.5523 11.0523 16 10.5 16H10.01C9.4521 16 9 15.5478 9 14.99V10C8.4477 10 8 9.5523 8 9C8 8.4477 8.4477 8 9 8H9.99ZM10 5C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7C9.4477 7 9 6.55228 9 6C9 5.44772 9.4477 5 10 5Z"
        fill={fillColor}
      />
    </svg>
  );
}
