import { svgIconProps } from "@/types/componentProps";

export default function Email({ size, fillColor }: svgIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.04 0C19.0944 0 19.9582 0.815877 20.0346 1.85074L20.04 2V14C20.04 15.0544 19.2242 15.9182 18.1893 15.9945L18.04 16H2.04004C0.985677 16 0.121874 15.1841 0.0455248 14.1493L0.0400391 14V2C0.0400391 0.945638 0.855916 0.0818346 1.89078 0.00548553L2.04004 0H18.04ZM18.04 3.41424L11.1006 10.3536C10.5148 10.9394 9.56514 10.9394 8.97934 10.3536L2.04004 3.41424V14H18.04V3.41424ZM16.6258 2H3.45413L10.04 8.5859L16.6258 2Z"
        fill={fillColor}
      />
    </svg>
  );
}
