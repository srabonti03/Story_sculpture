import React from 'react';

function Aboutus() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-10 mt-20'>
      <h2 className='text-4xl font-bold text-center mb-8'>
        About <span className='text-pink-500'>Us</span>
      </h2>

      <p className='text-lg mb-6 text-justify'>
        Welcome to <span className="font-bold text-pink-500">Story Sculpture</span>, where stories come to life and imagination knows no bounds. Founded with a passion for books and a love for community, our store has become a haven for book lovers of all kinds. From timeless classics to the latest bestsellers, we strive to offer a diverse selection of books that cater to every reader’s taste.
      </p>

      <p className='text-lg mb-6 text-justify'>
        At <span className="font-bold text-pink-500">Story Sculpture</span>, we believe that books have the power to connect, inspire, and transform. That’s why we’re dedicated to curating a collection that reflects not only popular demand but also the unique stories and voices that deserve to be heard. Whether you're here to dive into new worlds, explore fresh ideas, or simply relax with a good read, we have something just for you.
      </p>

      <p className='text-lg mb-6 text-justify'>
        Our journey began in 2024 with a simple goal: to create a space where readers can explore, discover, and fall in love with books all over again. Over the years, we've grown into more than just a bookstore. We’re a community hub, a cultural destination, and a home for book enthusiasts of all ages. Our events, author signings, and book clubs bring people together, sparking meaningful conversations and lasting friendships.
      </p>

      <p className='text-lg mb-6 text-justify'>
        We take pride in our exceptional customer service, with a team of dedicated staff who share a deep passion for literature. Whether you need a recommendation or help finding a specific title, we’re here to assist. Every customer that walks through our doors becomes a part of the <span className="font-bold text-pink-500">Story Sculpture</span> family.
      </p>

      <p className='text-lg mb-6 text-justify'>
        Thank you for choosing us as your literary companion. We’re excited to continue sharing the magic of books with you, and we look forward to seeing you in-store or online!
      </p>

      <div className='flex justify-center'>
        <img
          src='https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&h=500&q=80'
          alt='Bookstore'
          className='rounded-lg shadow-lg'
        />
      </div>
    </div>
  );
}

export default Aboutus;
