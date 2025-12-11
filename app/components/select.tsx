type SelectProps = {
  name: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
  defaultValue?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
};

export function Select({
  label,
  name,
  onChange,
  options,
  className,
  placeholder,
  defaultValue,
  disabled,
  id,
  required,
}: SelectProps) {
  return (
    <>
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}
      <select
        id={id ?? name}
        name={name}
        className={`flex w-full rounded-lg px-4 py-2 border border-black/20 text-sm bg-(--color-bg) focus:outline-(--primary-color) cursor-pointer ${className}`}
        onChange={onChange}
        disabled={disabled}
        required={required}
        defaultValue={defaultValue !== undefined ? defaultValue : placeholder ? '' : undefined}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </>
  );
}
