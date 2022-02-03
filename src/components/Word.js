import React, { useState } from 'react';

const Word = ({ word }) => {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);
  const click = () => {
    setIsShow(!isShow);
  }
  const toggleDone = () => {
    setIsDone(!isDone);
  }

  return (
    <>
      <tr className={isDone ? 'off' : ''}>
        <td>
          <input type='checkbox' checked={isDone} onChange={toggleDone} />
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
          <button
            className={isDone ? 'off' : ''}
            onClick={click}
            disabled={isDone ? 'true' : ''}
          >
            {isShow ? '뜻 숨기기' : '뜻 보기'}
          </button>
          <button className="btn_del">삭제</button>
        </td>
      </tr>
    </>
  );
};

export default Word;