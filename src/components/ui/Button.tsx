import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonBaseProps {
  variant?:
    | "primary"
    | "secondary"
    | "onDark"
    | "inverted"
    | "outline"
    | "outlined"
    | "gold"
    | "charcoal"
    | "link";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    isExternal?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Standardized dimensions across viewports:
  // sm: 36px (h-9), px-4, text-xs
  // md: 44px (h-11), px-6, text-[13px]
  // lg: 50px (h-[50px]), px-7 sm:px-8, text-xs sm:text-[13px]
  const sizeStyles = {
    sm: "h-9 px-4 text-xs font-medium tracking-[0.04em]",
    md: "h-11 px-6 text-[13px] font-medium tracking-[0.05em]",
    lg: "h-[50px] px-7 sm:px-8 text-xs sm:text-[13px] font-medium tracking-[0.05em]",
  }[size];

  // =========================================================================
  // CLASSIC SLATE LUXURY BUTTON SYSTEM
  // Deep Slate (#354B5D), Slate Blue (#526B80), Warm Ivory (#F5F1E9)
  // =========================================================================
  let variantStyles = "";

  if (variant === "primary") {
    // Primary Button: Background #354B5D, Text #FFFFFF, Hover #526B80
    variantStyles =
      "bg-[#354B5D] text-[#FFFFFF] border border-[#354B5D] hover:bg-[#526B80] hover:border-[#526B80] hover:shadow-[0_4px_16px_rgba(53,75,93,0.18)] hover:-translate-y-[1px] active:translate-y-0";
  } else if (variant === "secondary" || variant === "outline" || variant === "outlined") {
    // Secondary Button: Background #F5F1E9, Border #526B80, Text #354B5D, Hover #EAE5DA
    variantStyles =
      "bg-[#F5F1E9] text-[#354B5D] border border-[#526B80] hover:bg-[#EAE5DA] hover:text-[#292D30] hover:border-[#354B5D] hover:-translate-y-[1px] active:translate-y-0";
  } else if (variant === "onDark" || variant === "inverted" || variant === "gold") {
    // Buttons on Dark Sections: Warm Ivory background (#F5F1E9), Text #354B5D, Hover #FFFFFF
    variantStyles =
      "bg-[#F5F1E9] text-[#354B5D] border border-[#F5F1E9] font-medium hover:bg-[#FFFFFF] hover:text-[#292D30] hover:border-[#FFFFFF] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-[1px] active:translate-y-0";
  } else if (variant === "charcoal") {
    // Charcoal button: Background #292D30, Text #FFFFFF, Hover #354B5D
    variantStyles =
      "bg-[#292D30] text-[#FFFFFF] border border-[#292D30] hover:bg-[#354B5D] hover:border-[#354B5D] hover:-translate-y-[1px] active:translate-y-0";
  } else if (variant === "link") {
    // Text Link: Slate Blue #526B80, hover feedback #354B5D
    variantStyles =
      "bg-transparent text-[#526B80] p-0 font-medium inline-flex items-center gap-2 hover:text-[#354B5D] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#526B80] focus-visible:ring-offset-2";
  }

  const baseStyles =
    variant === "link"
      ? `group whitespace-nowrap flex-nowrap ${variantStyles}`
      : `group inline-flex items-center justify-center whitespace-nowrap flex-nowrap rounded-[2px] leading-none transition-all duration-200 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#526B80] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizeStyles} ${variantStyles}`;

  const renderContent = () => (
    <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap flex-nowrap leading-none shrink-0">
      <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap flex-nowrap leading-none">
        {children}
      </span>
      {withArrow && (
        <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current opacity-90" />
      )}
    </span>
  );

  if ("href" in props && props.href) {
    const { href, isExternal, ...anchorProps } = props as ButtonAsLink;
    if (isExternal || href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} ${className}`}
          {...anchorProps}
        >
          {renderContent()}
        </a>
      );
    }
    return (
      <Link href={href} className={`${baseStyles} ${className}`} {...anchorProps}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${className}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {renderContent()}
    </button>
  );
}
