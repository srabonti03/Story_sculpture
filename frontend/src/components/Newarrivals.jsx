import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import list from "../Books/list.json";
import BookCard from './BookCard';

function NewArrivals() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('All');

  // Extract unique categories and authors from the new arrivals list
  const uniqueCategories = Array.from(new Set(list.filter(book => book.newArrival).map(book => book.category)));
  const uniqueAuthors = Array.from(new Set(list.filter(book => book.newArrival).map(book => book.author)));

  // Filter books based on selected category and author
  const filteredBooks = list.filter(book => {
    const categoryMatch = selectedCategory === 'All' || book.category === selectedCategory;
    const authorMatch = selectedAuthor === 'All' || book.author === selectedAuthor;
    return book.newArrival && categoryMatch && authorMatch;
  });

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-12">
      <h2 className="text-2xl md:text-4xl mt-20 mb-6 text-center">
        New <span className="text-pink-500">Arrivals</span>
      </h2>
      
      {/* Add description */}
      <p className="text-center mb-6 text-lg">
        Discover our latest arrivals, showcasing the freshest stories and captivating narratives.
      </p>

      {/* Filter Dropdowns and Home Button in the same row */}
      <div className="mt-6 flex items-center justify-center mb-6">
        <span className='mr-4 text-lg font-semibold'>Filter:</span>
        
        {/* Category Filter */}
        <select 
          onChange={(e) => setSelectedCategory(e.target.value)} 
          className='mr-4 p-2 border border-gray-400 rounded-md focus:outline-none focus:border-pink-500 bg-gray-200 text-gray-800 w-40'
        >
          <option value="All">All Categories</option>
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        {/* Author Filter */}
        <select 
          onChange={(e) => setSelectedAuthor(e.target.value)} 
          className='p-2 border border-gray-400 rounded-md focus:outline-none focus:border-pink-500 bg-gray-200 text-gray-800 w-40'
        >
          <option value="All">All Authors</option>
          {uniqueAuthors.map((author, index) => (
            <option key={index} value={author}>{author}</option>
          ))}
        </select>

        {/* Home Button visible only on small screens */}
        <Link to="/" className="ml-4 inline-block bg-pink-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300 md:hidden">
          Home
        </Link>
      </div>

      {/* Display Filtered New Arrival Books */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(item => <BookCard key={item.id} item={item} />)
        ) : (
          <p>No new arrival books available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default NewArrivals;
