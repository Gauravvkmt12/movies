import React from "react";

function Moviecard({ movieObj, poster_path, name, handleAddtoWatchList, handleRemoveFromWatchList, isInWatchlist }) {
  const toggleWatchlist = () => {
    if (isInWatchlist) {
      handleRemoveFromWatchList(movieObj.id);
    } else {
      handleAddtoWatchList(movieObj);
    }
  };

  return (
    <div className="w-[200px] h-[40vh] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>
      <div className="flex justify-end p-4">
        <div onClick={toggleWatchlist} className="flex justify-center h-8 w-8 items-center rounded-lg bg-black bg-opacity-50 text-white">
          {isInWatchlist ? '❌' : '❤️'}
        </div>
      </div>
      <div className="text-white text-xl w-full p-2 text-center bg-black bg-opacity-50 rounded-br-xl rounded-bl-xl">
        {name}
      </div>
    </div>
  );
}

export default Moviecard;
