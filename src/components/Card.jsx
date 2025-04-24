import React from 'react';

const Cards = () => {
  const cardsData = [
    {
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', 
      title: 'Bali, Indonesia',
      description: 'Experience the tropical paradise with stunning beaches, temples, and vibrant culture.',
    },
    {
      image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad', 
      title: 'Paris, France',
      description: 'The city of lights awaits with its iconic Eiffel Tower, art museums, and romantic charm.',
    },
    {
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b',
      title: 'Banff, Canada',
      description: 'Nestled in the Rockies, Banff offers breathtaking views, lakes, and outdoor adventures.',
    },
    {
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c', 
      title: 'Tokyo, Japan',
      description: 'A bustling metropolis where traditional temples meet futuristic skyscrapers.',
    },
    {
      image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba',
      title: 'Sahara Desert, Morocco',
      description: 'Explore vast dunes, ride camels, and camp under the star-lit sky.',
    },
    {
      image: 'https://images.unsplash.com/photo-1570610155223-7c3aa94c0cfb', 
      title: 'New York City, USA',
      description: 'From Times Square to Central Park, NYC is the city that never sleeps.',
    },
  ];
  

  return (
    <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow hover:scale-105"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="text-lg font-semibold mt-4 text-gray-800">{card.title}</h2>
          <p className="text-gray-600 mt-2">{card.description}</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;