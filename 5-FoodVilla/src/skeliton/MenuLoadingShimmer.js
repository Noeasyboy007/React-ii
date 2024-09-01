import React from "react";

const MenuLoadingShimmer = () => {
  return (
    <div className="shimmer-page-container">
      {/* Restaurant Header Shimmer */}
      <div className="shimmer-header">
        <div className="shimmer-banner"></div>
        <div className="shimmer-restaurant-details">
          <div className="shimmer-line shimmer-title"></div>
          <div className="shimmer-line shimmer-description"></div>
          <div className="shimmer-line shimmer-location"></div>
          <div className="shimmer-line shimmer-rating"></div>
        </div>
      </div>

      {/* Menu Items Shimmer */}
      <div className="shimmer-menu-container">
        {[...Array(6)].map((_, index) => (
          <div className="shimmer-item" key={index}>
            <div className="shimmer-image"></div>
            <div className="shimmer-details">
              <div className="shimmer-line shimmer-title"></div>
              <div className="shimmer-line shimmer-description"></div>
              <div className="shimmer-line shimmer-price"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuLoadingShimmer;
