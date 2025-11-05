import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/SearchBar";
import SearchBar from "../components/SearchBar";
import "./MainPage.css";

const MainPage = () => {
  const navigate = useNavigate();
  const [barSearch, setBarSearch] = useState("");
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(barSearch.toLowerCase())
  );

  return (
    <div>
      <h1>Main Page</h1>

      <SearchBar
        value={barSearch}
        onChange={(e) => setBarSearch(e.target.value)}
      />

      {barSearch.length === 0 ? (
        <p>Please enter a search term to see results.</p>
      ) : (
        <ul>
          {filteredData.map((item) => (
            <li key={item.id} onClick={() => navigate(`/detail/${item.id}`)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainPage;
