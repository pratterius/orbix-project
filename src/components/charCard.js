

import React, { useState } from "react";
import CharModal from "./charModal";

const CharCard = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 py-8">
      <div className="flex justify-end px-4 pt-4">{/* Dropdown */}</div>

      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={`https://picsum.photos/200/300?random=${user.url}`}
          //   https://pokeapi.co/api/v2/pokemon/ditto
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user.name}
        </h5>
        <div className="flex mt-4 md:mt-6">
          <button
            onClick={openModal}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Show Details
          </button>
        </div>
      </div>
      
      {isOpen && (
        <CharModal
          user={user}
          imgUrl={`https://picsum.photos/200/300?random=${user.url}`}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default CharCard;


