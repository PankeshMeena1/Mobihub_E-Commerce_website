// BestSellers.js
import React, { useState } from 'react';
import mobiles from './mobileData';
import "../../../css/BestSeller.css";

const BestSellers = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const visibleMobiles = showAll ? mobiles : mobiles.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const viewMore = () => {
    setShowAll(true);
    paginate(1);
  };

  const hideProducts = () => {
    setShowAll(false);
    setCurrentPage(1);
  };

  return (
    <div className="best-sellers">
      <h2>Our Best Seller Mobiles</h2>
      <div className="mobiles">
        {visibleMobiles.map((mobile) => (
          <div key={mobile.id} className="mobile-item">
            <img src={mobile.image} alt={mobile.name} />
            <h3>{mobile.name}</h3>
            <button className="view-more">View Product</button>
          </div>
        ))}
      </div>
      {showAll ? (
        <button className="hide-button" onClick={hideProducts}>Hide</button>
      ) : (
        <button className="view-more" onClick={viewMore}>View More</button>
      )}
    </div>
  );
};

export default BestSellers;
