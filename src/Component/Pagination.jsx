import React from 'react';

function Pagination({ handleNext, handlePrev, pageNo }) {
  return (
    <div className='w-full bg-gray-400 p-4 mt-8 flex justify-center'>
      <div className='px-8 hover:cursor-pointer' onClick={handlePrev}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className='font-bold'>
        {pageNo}
      </div>
      <div className='px-8 hover:cursor-pointer' onClick={handleNext}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
