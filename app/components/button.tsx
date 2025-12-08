"use client";

import Link from "next/link";

type ButtonProps = {
  title: string;
  variant?: "primary" | "secondary";
  icon?: React.ElementType;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({
  title,
  variant = "primary",
  className = "",
  icon: Icon,
  href,
  onClick,
  type
}: ButtonProps) {
  const baseClasses =
    "flex items-center gap-2 w-fit text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--primary-color)";

  const variants = {
    primary:
      "text-(--color-bg) bg-(--primary-color) hover:bg-(--primary-color)/90",
    secondary:
      "text-black bg-white border border-black/10 shadow-sm hover:bg-(--color-accent)/90",
  };

  const Content = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      <span>{title}</span>
    </>
  );

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick} role="button">
        {Content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {Content}
    </button>
  );
}
