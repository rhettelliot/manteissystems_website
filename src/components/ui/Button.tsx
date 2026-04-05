"use client";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = "font-display font-semibold tracking-wide transition-all duration-200 border-none cursor-pointer";
  
  const variants = {
    primary: "bg-signal text-white hover:shadow-[0_0_30px_rgba(0,87,255,0.4)]",
    secondary: "bg-layer-2 text-white hover:bg-layer-3",
    ghost: "bg-transparent text-signal border border-signal hover:bg-signal hover:text-white",
  };
  
  const sizes = {
    sm: "px-sm py-xs text-mono-xs",
    md: "px-md py-sm text-label",
    lg: "px-lg py-md text-body-sm",
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}