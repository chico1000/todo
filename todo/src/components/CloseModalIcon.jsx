import React from "react";

export const CloseModalIcon = ({
  width = "15",
  height = "14",
  color = "#5F738C",
  onClick,
  props,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
      onClick={onClick}
      {...props}
    >
      <path
        d="M7.5 7L13.0417 12.8333"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M7.49967 6.9974L1.95801 1.16406"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M7.49967 7L1.95801 12.8333"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M7.5 6.9974L13.0417 1.16406"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

