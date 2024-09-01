const SkeletonCard = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-img"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
        </div>
    );
};

const SkeletonUi = () => {
    // Render multiple skeleton cards to simulate loading state
    return (
        <div className="skeleton-container">
            {Array(10).fill("").map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
};

export default SkeletonUi;
