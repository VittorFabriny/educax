type ButtonProps = {
  title: string;
  variant: `primary` | `secondary`;

  className?: string;
};

export function Button(props: ButtonProps) {
  return (
    <>
      {props.variant === 'primary' && (
        <div className="size-fit text-sm font-medium text-(--color-bg) bg-(--primary-color) py-2 px-4 rounded-lg cursor-pointer hover:bg-(--primary-color)/90 ">
          {props.title}
        </div>
      )}

      {props.variant === 'secondary' && (
        <div className="size-fit text-sm font-medium text-black bg-white py-2 px-4 border border-black/10 rounded-lg shadow-sm hover:bg-(--color-accent)/90 cursor-pointer">
          {props.title}
        </div>
      )}
    </>
  );
}
