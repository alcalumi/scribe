import React from "react";

// Plumín de Scribe (brand/scribe-mark.svg): un solo path con fill-rule
// evenodd; el respiradero y la hendidura son recortes transparentes.
const HandyTextLogo = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Scribe"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M256 470 C 236 416 198 372 176 318 C 158 276 146 240 146 204 C 146 160 150 122 166 106 C 190 86 222 80 256 80 C 290 80 322 86 346 106 C 362 122 366 160 366 204 C 366 240 354 276 336 318 C 314 372 276 416 256 470 Z M250 271.4 A30 30 0 1 1 262 271.4 L258.5 448 L256 460 L253.5 448 Z"
        className="logo-stroke"
      />
    </svg>
  );
};

export default HandyTextLogo;
