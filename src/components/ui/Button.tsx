import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "primary-soft"
    | "secondary"
    | "danger"
    | "danger-ghost"
    | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) => {
  const baseClasses =
    "font-medium rounded-lg border cursor-pointer transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:opacity-45 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "text-white bg-accent border-accent hover:bg-accent-strong hover:border-accent-strong active:bg-[color-mix(in_srgb,var(--color-accent-strong),black_8%)] active:border-[color-mix(in_srgb,var(--color-accent-strong),black_8%)]",
    "primary-soft":
      "text-accent bg-accent/10 border-transparent hover:bg-accent/15 active:bg-accent/20",
    secondary:
      "text-text bg-surface border-line hover:bg-text/5 active:bg-text/10",
    danger:
      "text-white bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 active:bg-red-800 active:border-red-800",
    "danger-ghost":
      "text-red-600 border-transparent hover:bg-red-600/10 active:bg-red-600/15",
    ghost: "text-current border-transparent hover:bg-text/5 active:bg-text/10",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-[5px] text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
