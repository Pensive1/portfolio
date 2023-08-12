import { svgIconProps } from "@/types/componentProps";

export default function Route({ size, fillColor }: svgIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3ZM3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4C3.55228 4 4 3.55228 4 3C4 2.44772 3.55228 2 3 2Z"
        fill={fillColor}
      />
      <path
        d="M7 3C7 2.44772 7.44772 2 8 2H12.5C14.9853 2 17 4.01472 17 6.5C17 8.98528 14.9853 11 12.5 11H5.5C4.11929 11 3 12.1193 3 13.5C3 14.8807 4.11929 16 5.5 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H5.5C3.01472 18 1 15.9853 1 13.5C1 11.0147 3.01472 9 5.5 9H12.5C13.8807 9 15 7.88071 15 6.5C15 5.11929 13.8807 4 12.5 4H8C7.44772 4 7 3.55228 7 3Z"
        fill={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 14C13.3431 14 12 15.3431 12 17C12 18.6569 13.3431 20 15 20C16.6569 20 18 18.6569 18 17C18 15.3431 16.6569 14 15 14ZM14 17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17Z"
        fill={fillColor}
      />
    </svg>
  );
}
