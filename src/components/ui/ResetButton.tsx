import React from "react";
import ResetIcon from "../icons/ResetIcon";

interface ResetButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

export const ResetButton: React.FC<ResetButtonProps> = React.memo(
  ({ onClick, disabled = false, className = "", ariaLabel, children }) => (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`p-1 rounded-lg border border-transparent transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-1 focus-visible:ring-offset-background ${
        disabled
          ? "opacity-45 cursor-not-allowed text-ink-soft"
          : "text-ink-soft hover:bg-accent/10 hover:text-accent active:bg-accent/15 cursor-pointer"
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children ?? <ResetIcon />}
    </button>
  ),
);
