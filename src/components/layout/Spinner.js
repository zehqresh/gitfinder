import React from 'react';
import loadingimg from '../loadingimg.gif';

const spinner = () => {
    return (
      <div>
        <img src={loadingimg} alt='loading...' style={{width:'200px',margin:'auto',display:'block'}} />
      </div>
    );
}

export default spinner;
