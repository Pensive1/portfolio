import { svgIconProps } from "@/types/componentProps";

export default function Wand({ size, fillColor }: svgIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.78905 2.21643C2.83548 1.96482 1.96495 2.83536 2.21656 3.78893L3.54422 8.82049L0.726697 13.1955C0.192732 14.0247 0.751645 15.1216 1.7363 15.177L6.93188 15.4692L10.2222 19.5008C10.8457 20.2648 12.0617 20.0722 12.4186 19.1529L13.8865 15.372L18.7268 20.2123C19.1371 20.6225 19.8021 20.6225 20.2123 20.2123C20.6226 19.8021 20.6226 19.137 20.2123 18.7268L15.372 13.8864L19.1529 12.4185C20.0724 12.0616 20.2649 10.8456 19.5008 10.222L15.4693 6.93176L15.1772 1.73618C15.1218 0.751532 14.0248 0.192608 13.1956 0.726574L8.82058 3.54409L3.78905 2.21643ZM5.66707 8.63141L4.60449 4.60437L8.63151 5.66695C8.98077 5.75913 9.35273 5.70021 9.65652 5.50461L13.158 3.24962L13.3918 7.40789C13.4121 7.76859 13.5831 8.10415 13.8631 8.33256L17.0897 10.9659L13.2072 12.4733C12.8704 12.604 12.6041 12.8703 12.4734 13.2071L10.966 17.0896L8.33268 13.8629C8.10425 13.583 7.7687 13.412 7.40801 13.3918L3.24974 13.1579L5.50473 9.65642C5.70033 9.35264 5.75925 8.98068 5.66707 8.63141Z"
        fill={fillColor}
      />
    </svg>
  );
}
