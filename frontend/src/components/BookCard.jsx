import React from "react";

function BookCard({ item }) {
    return (
        <div className="p-4">
            <div className="card w-96 shadow-xl bg-base-100 shadow-xl hover:scale-105 duration-200">
                <div className="relative">
                    <img
                        className="h-60 w-full object-cover rounded-t"
                        src={item.image}
                        alt={item.name}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 rounded-t-lg" />
                    <div className="card-body flex flex-col h-64 relative z-10">
                        <div className="flex justify-between items-center">
                            <h2 className="card-title text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                                {item.name}
                            </h2>
                            <div className="badge badge-secondary ml-2">{item.category}</div>
                        </div>
                        <p className="text-sm font-nunito italic">{item.author}</p>
                        <div className="card-actions justify-between items-center mt-auto">
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
