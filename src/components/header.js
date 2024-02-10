// Header.js
import React from "react";
import Search from "./search";
import './styles.css'; 

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5 h-screen">
      <div className="container flex flex-col items-center gap-16 mx-auto my-32">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2 px-6 text-center w-10/12 mx-auto">
          <img src="https://dezin.info/wp-content/uploads/2021/03/Star-Wars-Vinyl-Decals-Download-Free-CDR-Vectors-Art.jpg" alt="Logo" width="500"  height="300"   />
            <h1 className="text-3xl font-extrabold leading-tight lg:text-4xl text-dark-grey-900 animated-text">
              Star Wars  
            </h1>
            { <p className="text-base font-medium leading-7 text-dark-grey-600">
              These aren’t the droids you’re looking for.
            </p> }
          </div>
          <div className="flex items-center justify-center">
            
            <Search setSearchTerm={(string) => setSearchTerm(string)} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;




