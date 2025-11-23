type InputProps = {
  type: string;
  label: string;
  value: string;
  placeholder?: string;
};

export function Input(props: InputProps) {
  return (
    <>
      <input type="email" value="hello" />
    </>
  );
}
