import React from "react";
import { FaStar } from "react-icons/fa";

function BookCard({ item }) {
  return (
    <div className="p-4">
      <div className="card w-full shadow-xl bg-base-100 hover:scale-105 duration-200 relative">
        {/* New Arrival Ribbon */}
        {item.newArrival && (
          <div className="ribbon">
            <span>New Arrival</span>
          </div>
        )}
        <div className="relative">
          <img
            className="h-60 w-full object-cover rounded-t"
            src={item.image}
            alt={item.name}
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 rounded-t-lg" />
          <div className="card-body flex flex-col h-64 relative z-10">
            <div className="flex justify-between items-center">
              <h2 className="card-title text-lg font-bold" style={{ whiteSpace: 'normal', maxWidth: '14rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {item.name}
              </h2>
              <div className="badge badge-secondary ml-2" title={item.category}>
                <span className="block truncate text-sm">
                  {item.category.length > 10 ? item.category.slice(0, 10) + '...' : item.category}
                </span>
              </div>
            </div>
            <p className="text-sm font-nunito italic">{item.author}</p>
            
            {/* Best Seller Star */}
            {item.bestSeller && (
              <div className="mt-2 flex items-center">
                <FaStar className="text-yellow-500 mr-1" title="Bestseller" />
                <span className="text-sm text-gray-600">Bestseller</span>
              </div>
            )}

            <div className="card-actions justify-between items-center mt-10">
              <div className="badge badge-outline">${item.price}</div>
              <button className="badge badge-outline hover:bg-pink-500 hover:text-white duration-300 px-4 py-2 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
