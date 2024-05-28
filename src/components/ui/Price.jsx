import React from "react";

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className="book__price">
      {salePrice ? (
        <div>
          <span className="book__price--normal">${originalPrice}</span> $
          {salePrice.toFixed(2)}
        </div>
      ) : (
        <>${originalPrice.toFixed(2)}</>
      )}
    </div>
  );
};

export default Price;
