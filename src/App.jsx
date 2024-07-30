import { useState, useEffect } from "react";
import Banner from "./Component/Banner";
import Movie from "./Component/Movie";
import Navbar from "./Component/Navbar";
import Watchlist from "./Component/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // Initialize watchlist from localStorage
  const [watchlist, setWatchList] = useState(() => {
    const savedWatchlist = localStorage.getItem('watchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  // Save watchlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  let handleAddtoWatchList = (movieObj) => {
    if (!watchlist.some(movie => movie.id === movieObj.id)) {
      let newWatchList = [...watchlist, movieObj];
      setWatchList(newWatchList);
    }
  };

  let handleRemoveFromWatchList = (movieId) => {
    let newWatchList = watchlist.filter(movie => movie.id !== movieId);
    setWatchList(newWatchList);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movie handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist} />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
