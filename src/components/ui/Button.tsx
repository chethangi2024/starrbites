import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outlined" | "inverted" | "gold" | "charcoal" | "link";
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

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-5 py-2.5 text-[13px]",
    md: "px-7 py-3.5 text-[14px]",
    lg: "px-9 py-4 text-[15px]",
  }[size];

  // WCAG 2.2 AA Contrast Verified Variants:
  // primary: #242424 on #0099FF (5.17:1), hover #242424 on #EDC455 (9.33:1)
  // secondary: #242424 on #FDFBFF (15.09:1), hover #242424 on #0099FF (5.17:1)
  // gold: #242424 on #EDC455 (9.33:1), hover #242424 on #FFE672 (11.8:1)
  // charcoal: #FDFBFF on #242424 (15.09:1), hover #242424 on #EDC455 (9.33:1)
  // inverted: #FDFBFF on dark charcoal backdrop (15.09:1), hover #242424 on #FDFBFF (15.09:1)
  let variantStyles = "";
  if (variant === "primary") {
    variantStyles =
      "bg-[#0099FF] text-[#242424] border border-[#0099FF] hover:bg-[#EDC455] hover:border-[#EDC455] hover:text-[#242424] hover:-translate-y-[1px] active:translate-y-0 shadow-sm";
  } else if (variant === "secondary" || variant === "outlined") {
    variantStyles =
      "bg-[#FDFBFF] text-[#242424] border border-[#242424] hover:bg-[#0099FF] hover:text-[#242424] hover:border-[#0099FF] hover:-translate-y-[1px] active:translate-y-0";
  } else if (variant === "inverted") {
    variantStyles =
      "bg-transparent text-[#FDFBFF] border border-[#FDFBFF]/70 hover:bg-[#FDFBFF] hover:text-[#242424] hover:border-[#FDFBFF] hover:-translate-y-[1px] active:translate-y-0";
  } else if (variant === "gold") {
    variantStyles =
      "bg-[#EDC455] text-[#242424] border border-[#EDC455] font-semibold hover:bg-[#FFE672] hover:border-[#FFE672] hover:text-[#242424] hover:-translate-y-[1px] active:translate-y-0 shadow-sm";
  } else if (variant === "charcoal") {
    variantStyles =
      "bg-[#242424] text-[#FDFBFF] border border-[#242424] font-semibold hover:bg-[#EDC455] hover:text-[#242424] hover:border-[#EDC455] hover:-translate-y-[1px] active:translate-y-0 shadow-sm";
  } else if (variant === "link") {
    variantStyles =
      "bg-transparent text-[#242424] p-0 font-semibold inline-flex items-center gap-2 group hover:text-[#007ACC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0099FF] focus-visible:ring-offset-2";
  }

  const baseStyles =
    variant === "link"
      ? variantStyles
      : `inline-flex items-center justify-center font-semibold tracking-[0.03em] transition-all duration-300 ease-out cursor-pointer rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0099FF] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizeStyles} ${variantStyles}`;

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
          <span>{children}</span>
          {withArrow && (
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </a>
      );
    }
    return (
      <Link href={href} className={`${baseStyles} ${className}`} {...anchorProps}>
        <span>{children}</span>
        {withArrow && (
          <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${className}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </button>
  );
}
