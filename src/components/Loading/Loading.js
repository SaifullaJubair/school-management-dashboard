import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loading = () => {
   return (
      <div className='flex  min-h-screen justify-center'>
         <p className='flex justify-center items-center text-5xl font-bold'>L<ColorRing className="w-1/2"></ColorRing>ading</p>
      </div>
   );
};

export default Loading;