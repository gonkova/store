'use client';
import { useState } from 'react';
import { FaHeart, FaStar, FaShoppingCart, FaEye } from 'react-icons/fa';

const GridComponent = ({ products }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleProductHover = (productId) => {
    setHoveredProductId(productId);
  };

  const handleProductLeave = () => {
    setHoveredProductId(null);
  };

  return (
    <div className="container md:px-10 w-full max-w-7xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-hidden">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 border border-lightGrayishBlue rounded-lg shadow-sm flex flex-col items-start cursor-pointer relative"
          onMouseEnter={() => handleProductHover(product.id)}
          onMouseLeave={handleProductLeave}
        >
          <div className="flex justify-between w-full h-6 mb-2">
            {product.text ? (
              <>
                <span className={`text-red text-xs ${product.text === 'SALE' ? 'bg-bgRed px-2 py-1' : ''}`}>{product.text}</span>
                <FaHeart className="text-lightGray2 hover:text-dark cursor-pointer" />
              </>
            ) : (
              <FaHeart className="text-lightGray2 hover:text-dark cursor-pointer ml-auto" />
            )}
          </div>
          <img
            src={product.image}
            alt={product.title}
            className="w-auto h-[180px] mx-auto object-cover mt-5 mb-2"
          />
          <p className="text-lightGray mb-2 text-xs mt-5">{product.paragraph}</p>
          <div className="text-dark text-base font-bold mb-2">{product.title}</div>
          <div className="flex justify-between items-center w-full mb-2">
            <span className="text-secondary text-sm font-bold">&#36;{product.price}</span>
            <div className="flex space-x-1">
              {[...Array(product.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow" />
              ))}
              {[...Array(5 - product.rating)].map((_, i) => (
                <FaStar key={i} className="text-gray-300" />
              ))}
            </div>
          </div>
          {hoveredProductId === product.id && (
            <div className="absolute bottom-0 left-0 right-0 bg-white shadow-md p-4">
              {product.buttons && product.buttons.map((button, index) => (
                <button
                  key={index}
                  className={`w-full py-2 mb-2 rounded flex items-center justify-center ${button.bgColor} ${index === 1 ? 'border border-gray text-gray' : 'text-white'}`}
                >
                  {index === 0 ? <FaShoppingCart className="mr-2" /> : <FaEye className="mr-2" />}
                  {button.text}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
