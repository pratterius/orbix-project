// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "./components/charCard";
import Header from "./components/header";
// import Search from './components/search';

const App = () => {
  const [users, setUsers] = useState([]);
  const [finalList,setFinalList]=useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/`);
        console.log(response);
        setUsers(response.data.results);
        setFinalList(response.data.results)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(searchTerm);

  useEffect(() => {
    const filteredUser = users.filter((user) => {
      if (searchTerm === "") return user;
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFinalList(filteredUser);
  }, [searchTerm]);

  return (
    <div className="w-full px-4 flex justify-center flex-row h-screen overflow-y-hidden">
      <Header
        searchTern={searchTerm}
        setSearchTerm={(searchString) => {
          setSearchTerm(searchString);
        }}
      />
      {/* <Search setSearchTerm={setSearchTerm} /> */}
      <div
        id="list"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 gap-y-8 w-full px-4 py-8 overflow-y-auto h-full"
      >
        {finalList.map((user) => {
            return (
              <div className="flex flex-col justify-center items-center px-12">
                <CharCard user={user} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
