export default function SpecialFileLoading() {
  return (
    <div className="space-y-4 p-6 max-w-4xl mx-auto animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-zinc-800 rounded-lg w-1/3"></div>
      <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-2/3"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <div className="h-32 bg-gray-200 dark:bg-zinc-800 rounded-xl"></div>
        <div className="h-32 bg-gray-200 dark:bg-zinc-800 rounded-xl"></div>
      </div>
    </div>
  );
}