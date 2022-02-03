import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <h1>
        <Link to='/'>English Voca</Link>
      </h1>
      <div className='menu'>
        <a href='#' className='link'>단어 추가</a>
        <a href='#' className='link'>DAY 추가</a>
      </div>
    </header>
  );
};

export default Header;