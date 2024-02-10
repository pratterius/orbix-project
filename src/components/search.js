import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/firestore";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyB0Y0wgfTKM5dC7O8NlJWS6a9kT4vg34k4",
  authDomain: "swappi-project.firebaseapp.com",
  databaseURL:
    "https://swappi-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "swappi-project",
  storageBucket: "swappi-project.appspot.com",
  messagingSenderId: "625388810289",
  appId: "1:625388810289:web:8faf4913b0fc0cba09a510",
  measurementId: "G-C5BQMRRGPX",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const Search = ({ setSearchTerm }) => {
  const [searchString, setSearchString] = useState("");

  const handleSearch = async () => {
    try {
      db.collection("Swappi-searchTerm")
        .add({
          searchQuery: searchString,
          timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((data) => {
          console.log(`Added data`);
        })
        .catch((err) => {
          console.error(`Failed to add data: ${err}`);
        });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // setSearchString("");
  };

  return (
    <form class="flex items-center">
      <label for="voice-search" class="sr-only">
        Search
      </label>
      <div class="relative w-full">
        <input
          type="text"
          id="voice-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Username"
          value={searchString}
          required
          onChange={(e) => {
            setSearchString(e.target.value);
            setSearchTerm(e.target.value);
          }}
        />
        <button
          type="button"
          class="absolute inset-y-0 end-0 flex items-center pe-3"
        ></button>
      </div>
      <button
        type="submit"
        class="inline-flex items-center py-2.5 px-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          handleSearch();
        }}
      >
        <svg
        
          class="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default Search;
