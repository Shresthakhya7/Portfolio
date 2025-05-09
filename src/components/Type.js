import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
  return (
    <div className='type'>
      <Typewriter
        options={{
          strings: ['Backend Developer', 'Python Developer','Web Developer'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Type;
