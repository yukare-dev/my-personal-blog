function SkeletonCard() {
  return (
    <div className="border rounded-lg shadow-sm bg-gray-100 animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
  );
}

export default function PostsLoading() {
  return (
    <div>
      <h1 className="text-3xl font-cinzel">loading...</h1>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
