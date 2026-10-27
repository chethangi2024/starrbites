import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "inverted" | "gold" | "link";
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

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles =
      "bg-[#171C56] text-white border border-[#171C56] hover:bg-[#0F1238] hover:border-[#EDC455] hover:-translate-y-[1px] shadow-sm";
  } else if (variant === "secondary") {
    variantStyles =
      "bg-white text-[#171C56] border border-[#171C56] hover:bg-[#F6F6F4] hover:-translate-y-[1px]";
  } else if (variant === "inverted") {
    variantStyles =
      "bg-transparent text-white border border-white/60 hover:bg-white hover:text-[#171C56] hover:border-white hover:-translate-y-[1px]";
  } else if (variant === "gold") {
    variantStyles =
      "bg-[#EDC455] text-[#171C56] border border-[#EDC455] font-semibold hover:bg-[#FFE672] hover:-translate-y-[1px]";
  } else if (variant === "link") {
    variantStyles =
      "bg-transparent text-[#171C56] p-0 font-medium inline-flex items-center gap-2 group hover:text-[#8B6C20]";
  }

  const baseStyles =
    variant === "link"
      ? variantStyles
      : `inline-flex items-center justify-center font-semibold tracking-[0.03em] transition-all duration-300 ease-out cursor-pointer rounded-[2px] ${sizeStyles} ${variantStyles}`;

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
