import React from 'react';

const images = [
  'https://userway.org/blog/wp-content/uploads/2022/01/Reasons-to-make-your-e-commerce-accessible.jpg',
  'https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5.png',
  'https://userway.org/blog/wp-content/uploads/2022/01/Reasons-to-make-your-e-commerce-accessible.jpg',
  'https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5.png',
  'https://userway.org/blog/wp-content/uploads/2022/01/Reasons-to-make-your-e-commerce-accessible.jpg',
  'https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5.png',
  'https://userway.org/blog/wp-content/uploads/2022/01/Reasons-to-make-your-e-commerce-accessible.jpg',
  'https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5.png',
];

const Gallery = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;