"use client";

import Link from "next/link";

type ButtonProps = {
  title: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ElementType;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export function Button({ title, variant = 'primary', className, icon: Icon, href, onClick }: ButtonProps) {
  const baseClasses =
    'flex items-center gap-2 size-fit text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition focus:outline-(--primary-color)';

  const variants = {
    primary: 'text-(--color-bg) bg-(--primary-color) hover:bg-(--primary-color)/90 ',
    secondary: 'text-black bg-white border border-black/10 shadow-sm hover:bg-(--color-accent)/90',
  };

  if (href) {
    return (

      <Link href={href} className={`${className} ${baseClasses} ${variants[variant]}`} onClick={onClick} >
        {Icon && <Icon className="w-4 h-4" />}
        <span>{title}</span>
      </Link>
    )
  };

  function handleClick() {
    if (onClick) {
      onClick();
    };
  }

  if (onClick) {
    return (
      <button onClick={handleClick} className={`${className} ${baseClasses} ${variants[variant]}`}>
        {Icon && <Icon className="w-4 h-4" />}
        <span>{title}</span>
      </button>
    )
  };

  return (
    <button className={`${className} ${baseClasses} ${variants[variant]}`}>
      {Icon && <Icon className="w-4 h-4" />}
      <span>{title}</span>
    </button>
  );
}

