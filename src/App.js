import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'
  // let [글제목1, b] = useState('여자 코트 추천')
  // let [글제목2, c] = useState('용봉 라멘 맛집')
  // let [글제목3, d] = useState('리액트 독학')
  let [글제목, b] = useState(['여자 코트 추천', '용봉 라멘 맛집', '리액트 독학']) // 이게 조금 더 효율적이지 않을까?

  return (
    <div className="App">
      <div className="blakc-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목[0] }</h4>
        <p>8월 21일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>8월 21일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>8월 21일 발행</p>
      </div>
    </div>
  );
}

export default App;
