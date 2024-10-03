const SkeletonCard = () => {
    return (
      <div className="skeleton-card border border-gray-400 rounded-lg shadow-md bg-white p-4 space-y-4 animate-pulse">
        <div className="skeleton-img bg-gray-300 rounded-lg w-full h-40"></div>
        <div className="skeleton-line bg-gray-300 h-6 rounded"></div>
        <div className="skeleton-line bg-gray-300 h-6 rounded w-3/4"></div>
        <div className="skeleton-line bg-gray-300 h-6 rounded w-2/4"></div>
      </div>
    );
  };
  
  
  const SkeletonUi = () => {
    return (
      <div className="skeleton-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Array(12).fill("").map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  };
  
  export default SkeletonUi;
  