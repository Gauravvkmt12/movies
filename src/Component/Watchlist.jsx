import React, { useState } from 'react';

function Watchlist({ watchlist, handleRemoveFromWatchList }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortOrder, setSortOrder] = useState('none'); // Track the current sort order

  // Filter watchlist based on search query and selected genre
  const filteredWatchlist = watchlist
    .filter((movie) => {
      const matchesSearch = movie.original_title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = selectedGenre === 'All' || movie.genre_ids.some(genreId => genreids[genreId] === selectedGenre);

      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      if (sortOrder === 'none') return 0;
      return sortOrder === 'asc'
        ? a.vote_average - b.vote_average
        : b.vote_average - a.vote_average;
    });

  const handleSort = (order) => {
    setSortOrder(order);
  };

  return (
    <>
      <div className='flex justify-center my-4'>
        <input
          type="text"
          placeholder='Search Movies'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4'
        />
      </div>
      <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border b-2'>
            <tr>
              <th>Name</th>
              <th className='flex items-center justify-center'>
                <div className='p-2 cursor-pointer' onClick={() => handleSort('asc')}>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className='p-2'>Ratings</div>
                <div className='p-2 cursor-pointer' onClick={() => handleSort('desc')}>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {filteredWatchlist.length > 0 ? (
              filteredWatchlist.map((movie) => (
                <tr key={movie.id} className='border-b-2'>
                  <td className='flex items-center px-6 py-4'>
                    <img className='h-[8rem] w-[8rem]' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} />
                    <div className='mx-10'>{movie.original_title}</div>
                  </td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td className='text-red-800 cursor-pointer' onClick={() => handleRemoveFromWatchList(movie.id)}><i class="fa-solid fa-trash"></i></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className='text-center py-4'>No movies found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
