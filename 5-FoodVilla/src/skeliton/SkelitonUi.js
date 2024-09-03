const SkeletonCard = () => {
    return (
        <div className="skeleton-card border border-gray-300 rounded-lg shadow-md bg-white p-4 space-y-4 animate-pulse">
            <div className="skeleton-img bg-gray-200 rounded-lg w-full h-full"></div>
            <div className="skeleton-line bg-gray-200 h-6 rounded"></div>
            <div className="skeleton-line bg-gray-200 h-6 rounded w-3/4"></div>
            <div className="skeleton-line bg-gray-200 h-6 rounded w-2/4"></div>
        </div>
    );
};

const SkeletonUi = () => {
    return (
        <div className="skeleton-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {Array(10).fill("").map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
};

export default SkeletonUi;
