import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ label, className, ...props }: InputProps) {
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input
        {...props}
        className={`flex w-full rounded-lg px-4 py-2 border border-black/20 text-sm bg-(--color-bg) focus:outline-(--primary-color) ${className}`}
      />
    </>
  );
}
