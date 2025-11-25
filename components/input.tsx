import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  label: string;

};

export function Input(props: InputProps) {
  return (
    <>
      <label htmlFor={props.label}>{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} className={`flex w-full rounded-lg  px-4 py-2 my-2 mb-4 border border-black/20 text-sm bg-(--color-bg) focus:outline-(--primary-color) ${props.className}`} />
    </>
  )
}
