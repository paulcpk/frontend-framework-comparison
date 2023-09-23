import { useState, useEffect } from "react";
import ItemCard from "./ItemCard.jsx";

const FETCH_LIMIT = 30;

function getPostIdFromUrl(url) {
  return url.split("/").reverse()[1];
}

function Grid({ items = [], startPage }) {
  console.log("items", items);
  const [data, setData] = useState(items);
  const [displayData, setDisplayData] = useState(items);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(startPage);

  useEffect(() => {
    // prevent run on first render
    if (page !== startPage) {
      const fetchData = async () => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${FETCH_LIMIT}&offset=${
            page * FETCH_LIMIT
          }`
        );
        const res = await response.json();
        setData([...data, ...res.results]);
      };
  
      fetchData();
    }
  }, [page]);

  useEffect(() => {
    const filteredCollection = data.filter((item) =>
      item.name.includes(searchValue)
    );
    setDisplayData(filteredCollection);
  }, [data, searchValue]);

  return (
    <div className="grid-container">
      <div className="grid-search">
        <input
          id="search-input"
          className="input is-medium"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="grid-wrapper">
        {displayData.map((item) => {
          const postId = getPostIdFromUrl(item.url);
          return (
            <a href={`/detail/${postId}`} key={postId}>
              <ItemCard postId={postId} name={item.name} />
            </a>
          );
        })}
      </div>
      <button
        className="load-more button is-primary is-fullwidth"
        onClick={() => setPage(page + 1)}
      >
        Load More
      </button>
    </div>
  );
}

export default Grid;
