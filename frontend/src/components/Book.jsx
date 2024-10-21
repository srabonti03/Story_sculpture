import React from 'react';
import list from "../Books/list.json";
import BookCard from './BookCard';
import { Link } from 'react-router-dom';

function Book() {
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className='mt-28 item-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We're Delighted to have you{" "}
            <span className='text-pink-500'>Here! </span>
            <span role="img" aria-label="happy emoji">😄</span>
          </h1>
          <p className='mt-12'>
            Welcome to our <span className='text-pink-500'>Story Sculpture</span>, where words come alive and stories are sculpted to perfection. Dive into a world of carefully crafted tales that inspire, entertain, and provoke thought. Each book is a masterpiece, waiting for you to explore and discover its hidden treasures.
          </p>
          {/* Linking with home */}
          <Link to="/">
            <button type="button" className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
          {
            list.map((item) => {
              return <BookCard key={item.id} item={item} />;
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Book;
