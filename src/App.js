import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '용봉 라멘 맛집', '리액트 독학'])
  let [따봉, 따봉변경] = useState(0)

  return (
    <div className="App">
      <div className="blakc-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let newCopy = [...글제목]
        newCopy.sort()
        글제목변경(newCopy)
      }}>가나다순 정렬</button>

      <button onClick={()=>{
         let copy = [...글제목]
         copy[0] = '여자 코트 추천'
         글제목변경(copy)
         }}>글변경</button>

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
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
