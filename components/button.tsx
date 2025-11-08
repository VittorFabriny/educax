export function Button({ title }: { title: string }) {
  return (
    <div className="size-fit text-sm font-medium text-[var(--color-bg)] bg-[var(--primary-color)] py-2 px-4 rounded-lg">
      {title}
    </div>
  );
}
