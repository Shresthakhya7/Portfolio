import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
  return (
    <div className='type'>
      <Typewriter
        options={{
          strings: ['Frontend Developer', 'Backend Developer','Web Developer'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Type;
