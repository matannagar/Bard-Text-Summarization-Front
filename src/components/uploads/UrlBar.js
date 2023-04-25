import React from 'react';

function UrlBar({ setUrl, url }) {
  return (
    <div className='url bar'>
      <input type='text' value={ url } onChange={(e) => setUrl(e.target.value)}
        placeholder='Please enter URL here...'
      ></input>
    </div>
  );
}

export default UrlBar;
