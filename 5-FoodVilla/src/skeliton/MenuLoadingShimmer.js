
const MenuLoadingShimmer = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen font-custom">
      {/* Restaurant Header Shimmer */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 animate-pulse">
        <div className="bg-gray-200 h-56 rounded-lg mb-4"></div>
        <div className="space-y-4">
          <div className="bg-gray-200 h-8 rounded-md w-1/2"></div>
          <div className="bg-gray-200 h-6 rounded-md w-1/3"></div>
          <div className="bg-gray-200 h-6 rounded-md w-3/4"></div>
          <div className="bg-gray-200 h-6 rounded-md w-1/4"></div>
        </div>
      </div>

      {/* Menu Items Shimmer */}
      <div className="space-y-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 animate-pulse">
            <div className="bg-gray-200 h-24 w-24 rounded-lg"></div>
            <div className="flex-1 space-y-4">
              <div className="bg-gray-200 h-6 rounded-md w-3/4"></div>
              <div className="bg-gray-200 h-6 rounded-md w-1/2"></div>
              <div className="bg-gray-200 h-6 rounded-md w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuLoadingShimmer;
