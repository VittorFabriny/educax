type SelectProps = {
  name: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: { label: string; value: string }[];
  defaultValue?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
};

export function Select({ label, name, onChange, options, className }: SelectProps) {
  return (
    <>
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        className={`flex w-full rounded-lg px-4 py-2 border border-black/20 text-sm bg-(--color-bg) focus:outline-(--primary-color) cursor-pointer ${className}`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="">
            {opt.label}
          </option>
        ))}
      </select>
    </>
  );
}
