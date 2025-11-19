type ButtonProps = {
  title: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ElementType;
};

export function Button({ title, variant = 'primary', icon: Icon }: ButtonProps) {
  const baseClasses =
    'flex items-center gap-2 size-fit text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition';

  const variants = {
    primary: 'text-(--color-bg) bg-(--primary-color) hover:bg-(--primary-color)/90',
    secondary: 'text-black bg-white border border-black/10 shadow-sm hover:bg-(--color-accent)/90',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {Icon && <Icon className="w-4 h-4" />}
      <span>{title}</span>
    </button>
  );
}
