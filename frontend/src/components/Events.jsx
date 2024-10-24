import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import eventsData from '../Event/event.json';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-10'>
      <div className='mb-6'>
        <h2 className='text-5xl font-extrabold text-center mt-20'>
          Upcoming{" "}
          <span className='text-pink-500'>Online Events</span>
        </h2>
      </div>

      <p className='text-md text-center md:text-left mb-4'>
        Dive into our hand-picked virtual events where the magic of books comes to life online. Whether you're a storyteller, a curious reader, or a passionate writer, there's an experience waiting for you here at Story Sculpture.
      </p>

      {/* Home Button */}
      <div className='flex justify-center mb-12'>
        <Link
          to="/"
          className="ml-4 inline-block bg-pink-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300 md:hidden"
        >
          Home
        </Link>
      </div>

      {/* Event Cards */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {events.map((event) => (
          <div key={event.id} className='shadow-xl rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl'>
            <img
              src={event.image}
              alt={event.title}
              className='w-full h-56 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-2xl font-bold mb-2'>
                {event.title}
              </h3>
              <p className='text-sm mb-2'>
                {event.date} | {event.time}
              </p>
              <p className='text-sm mb-4'>
                Hosted Online: {event.location}
              </p>
              <p className='text-base mb-6'>
                {event.description}
              </p>
              <a
                href={event.link}
                target='_blank'
                rel='noopener noreferrer'
                className='block w-full text-center bg-pink-500 text-white py-2 rounded-md hover:bg-pink-800 transition duration-300'
              >
                Join Event
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
