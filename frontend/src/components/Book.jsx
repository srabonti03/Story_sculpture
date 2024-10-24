import React, { useState } from 'react';
import list from "../Books/list.json";
import BookCard from './BookCard';

function Book() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('All');

  // Extract unique categories and authors from the entire book list
  const uniqueCategories = Array.from(new Set(list.map(book => book.category)));
  const uniqueAuthors = Array.from(new Set(list.map(book => book.author)));

  // Updated filter logic to ensure both conditions are checked
  const filteredBooks = list.filter(book => {
    const categoryMatch = selectedCategory === 'All' || book.category === selectedCategory;
    const authorMatch = selectedAuthor === 'All' || book.author === selectedAuthor;

    // Return true only if the book matches both filters
    return categoryMatch && authorMatch;
  });

  return (
    <div className="max-w-screen-2xl container mx-auto px-4">
      <div className='mt-20 flex flex-col md:flex-row items-center justify-between'>
        <div className='text-center md:text-left mb-6 md:mb-0'>
          <h1 className='text-2xl md:text-4xl mb-6'>
            We're Delighted to have you{" "}
            <span className='text-pink-500'>Here! </span>
            <span role="img" aria-label="happy emoji">😄</span>
          </h1>
          <p className='mt-6'>
            Welcome to our <span className='text-pink-500'>Story Sculpture</span>, where words come alive and stories are sculpted to perfection.
          </p>
        </div>

        {/* Filter Dropdowns */}
        <div className='mt-6 md:mt-0 md:flex md:items-center'>
          <span className='mr-4 text-lg font-semibold'>Filter:</span>
          <select 
            onChange={(e) => setSelectedCategory(e.target.value)} 
            className='mr-4 p-2 border border-gray-400 rounded-md bg-gray-200 text-gray-800'
          >
            <option value="All">All Categories</option>
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
          <select 
            onChange={(e) => setSelectedAuthor(e.target.value)} 
            className='p-2 border border-gray-400 rounded-md bg-gray-200 text-gray-800'
          >
            <option value="All">All Authors</option>
            {uniqueAuthors.map((author, index) => (
              <option key={index} value={author}>{author}</option>
            ))}
          </select>
        </div>
      </div>

      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((item) => (
            <BookCard key={item.id} item={item} />
          ))
        ) : (
          <p>No books match your filters at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default Book;
