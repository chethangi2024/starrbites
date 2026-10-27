import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "wide" | "standard" | "narrow";
  className?: string;
  children: React.ReactNode;
}

export function Container({
  size = "standard",
  className = "",
  children,
  ...props
}: ContainerProps) {
  const maxWidthClass =
    size === "wide"
      ? "max-w-[1440px]"
      : size === "narrow"
      ? "max-w-[840px]"
      : "max-w-[1280px]";

  return (
    <div
      className={`w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16 ${maxWidthClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
