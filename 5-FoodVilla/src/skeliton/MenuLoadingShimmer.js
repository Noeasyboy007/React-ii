import React from "react";

const MenuLoadingShimmer = () => {
  return (
    <div className="shimmer-page-container p-4 space-y-6">
      {/* Restaurant Header Shimmer */}
      <div className="shimmer-header bg-white rounded-lg shadow-md p-4 space-y-4">
        <div className="shimmer-banner bg-gray-200 h-40 rounded-lg animate-pulse"></div>
        <div className="shimmer-restaurant-details space-y-4">
          <div className="shimmer-line bg-gray-200 h-8 rounded-md w-3/4 animate-pulse"></div>
          <div className="shimmer-line bg-gray-200 h-6 rounded-md w-1/2 animate-pulse"></div>
          <div className="shimmer-line bg-gray-200 h-6 rounded-md w-2/3 animate-pulse"></div>
          <div className="shimmer-line bg-gray-200 h-6 rounded-md w-1/4 animate-pulse"></div>
        </div>
      </div>

      {/* Menu Items Shimmer */}
      <div className="shimmer-menu-container space-y-4">
        {[...Array(6)].map((_, index) => (
          <div className="shimmer-item bg-white rounded-lg shadow-md p-4 flex space-x-4 animate-pulse" key={index}>
            <div className="shimmer-image bg-gray-200 h-24 w-24 rounded-md"></div>
            <div className="shimmer-details flex-1 space-y-4">
              <div className="shimmer-line bg-gray-200 h-6 rounded-md w-3/4"></div>
              <div className="shimmer-line bg-gray-200 h-5 rounded-md w-1/2"></div>
              <div className="shimmer-line bg-gray-200 h-5 rounded-md w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuLoadingShimmer;
