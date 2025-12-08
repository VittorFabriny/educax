export function LoadingDots() {
  return (
    <div className="flex items-center space-x-1">
      <span className="h-2 w-2 bg-gray-900 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <span className="h-2 w-2 bg-gray-900 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <span className="h-2 w-2 bg-gray-900 rounded-full animate-bounce" />
    </div>
  );
}