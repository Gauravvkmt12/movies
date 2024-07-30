import React, { useEffect, useState } from 'react';
import Moviecard from './Moviecard';
import axios from 'axios';
import Pagination from './Pagination';

function Movie({ handleAddtoWatchList, handleRemoveFromWatchList, watchlist }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=19c62f1deaa4e058da889ec5e30e2051&language=en-US&page=${pageNo}`)
      .then(function (res) { 
        setMovies(res.data.results);
      })
      .catch(function (error) {
        console.error('Error fetching movies:', error);
      });
  }, [pageNo]);

  const handleNext = () => {
    setPageNo(prevPageNo => prevPageNo + 1);
  };

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(prevPageNo => prevPageNo - 1);
    }
  };

  return (
    <>
      <div className='p-5'>
        <div className='text-2xl m-5 text-bold text-center'>
          Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around gap-8'>
          {movies.map((movieObj) => {
            return (
              <Moviecard 
                key={movieObj.id} 
                movieObj={movieObj} 
                poster_path={movieObj.poster_path} 
                name={movieObj.original_title} 
                handleAddtoWatchList={handleAddtoWatchList} 
                handleRemoveFromWatchList={handleRemoveFromWatchList}
                isInWatchlist={watchlist.some(movie => movie.id === movieObj.id)} 
              />
            );
          })}
        </div>
        <Pagination handleNext={handleNext} handlePrev={handlePrev} pageNo={pageNo} />
      </div>
    </>
  );
}

export default Movie;
