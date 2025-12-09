import { ComponentProps, ElementType } from 'react';

type CheckboxProps = ComponentProps<'input'> & {
  label: string;
  icon?: ElementType;
};

export function Checkbox({ label, icon: Icon, className, ...props }: CheckboxProps) {
  return (
    <label className="relative flex items-center gap-2 cursor-pointer select-none">
      <input type="checkbox" {...props} className="peer h-0 w-0 opacity-0 absolute" />

      <span className="h-5 w-5 rounded border border-black/20 flex items-center justify-center peer-checked:bg-(--primary-color) transition-opacity peer-focus:border-(--primary-color) peer-focus:ring-2 peer-focus:ring-(--primary-color)"></span>

      {Icon && <Icon className="size-5 text-white opacity-0 peer-checked:opacity-100 absolute" />}

      {label && <span className="text-sm ">{label}</span>}
    </label>
  );
}
