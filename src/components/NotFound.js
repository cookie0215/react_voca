import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h2>
        404 잘못된 접근입니다.
      </h2>
      <Link to='/'>홈으로 돌아가기</Link>
    </>
  );
};

export default NotFound; 