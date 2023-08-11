import { svgIconProps } from "@/types/componentProps";

export default function Sword({ size, fillColor }: svgIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9008 0C19.4851 0 19.9666 0.439767 20.0324 1.00633L20.04 1.13919V7.58346C20.04 7.89964 19.9088 8.19942 19.6813 8.41329L19.578 8.49948L11.3782 14.5602L12.4567 15.6387C12.8673 16.0493 12.8989 16.6955 12.5514 17.1424L12.4567 17.2497L10.8456 18.8607C10.5335 19.1728 10.0732 19.2737 9.66466 19.1309L9.53065 19.0742L7.04288 17.8303L5.20689 19.6664C4.79622 20.077 4.15004 20.1086 3.70314 19.7611L3.59582 19.6664L0.373706 16.4442C-0.0369608 16.0335 -0.0685507 15.3873 0.278936 14.9404L0.373706 14.8331L2.2097 12.9971L0.965835 10.5095C0.76848 10.1147 0.818366 9.64618 1.08308 9.30371L1.17923 9.1945L2.7903 7.58346C3.20095 7.17272 3.84714 7.14112 4.29403 7.48867L4.40135 7.58346L5.4798 8.66181L11.5405 0.462066C11.7285 0.207785 12.0123 0.0447267 12.3224 0.00793517L12.4567 0H18.9008ZM3.59582 10L3.37088 10.2249L4.61475 12.7126C4.83403 13.1512 4.74808 13.6808 4.40135 14.0276L2.7903 15.6387L4.40135 17.2497L6.01241 15.6387C6.35913 15.292 6.88882 15.206 7.3274 15.4253L9.81511 16.6692L10.0401 16.4442L3.59582 10ZM17.7617 2.27838H13.0313L7.10897 10.2908L9.74926 12.931L17.7617 7.00885V2.27838Z"
        fill={fillColor}
      />
    </svg>
  );
}
