import React from "react";

/**
 * Plumín de Scribe — inline copy of brand/scribe-mark.svg so it can inherit
 * `currentColor` from the surrounding text utilities. Brand rules: minimum
 * height 14px, clear space of half its width.
 */
const ScribeMark: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 512 512" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M256 470C236 416 198 372 176 318C158 276 146 240 146 204C146 160 150 122 166 106C190 86 222 80 256 80C290 80 322 86 346 106C362 122 366 160 366 204C366 240 354 276 336 318C314 372 276 416 256 470ZM250 271.4A30 30 0 1 1 262 271.4L258.5 448L256 460L253.5 448Z"
    />
  </svg>
);

export default ScribeMark;
