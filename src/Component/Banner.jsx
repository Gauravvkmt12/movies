import React from 'react';

function Banner() {
  return (
    <div className='h-[20vh] md:h-[60vh] lg:h-[85vh] w-full bg-cover bg-center flex items-end' 
         style={{backgroundImage: `url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`}}>
        <div className='text-white text-base md:text-xl lg:text-2xl text-center w-full bg-blue-900 p-3'>
            Avengers Endgame
        </div>
    </div>
  );
}

export default Banner;
