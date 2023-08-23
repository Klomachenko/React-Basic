import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '용봉 라멘 맛집', '리액트 독학'])
  let [따봉, 따봉변경] = useState([0,0,0])
  let [modal, setModal] = useState(false)
  let [title, setTitle] = useState(0)
  let [입력값, 입력값변경] = useState('')

  return (
    <div className="App">
      <div className="blakc-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* <button onClick={()=>{
        let newCopy = [...글제목]
        console.log(newCopy)
        newCopy.sort()
        console.log(newCopy)
        글제목변경(newCopy)
      }}>가나다순 정렬</button>

      <button onClick={()=>{
         let copy = [...글제목]
         copy[0] = '여자 코트 추천'
         글제목변경(copy)
         }}>글변경</button> */}

      {/* <div className='list'>
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
        <p>8월 21일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>8월 21일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=> { 
          setModal(true)
          if (modal == true) {
            setModal(false)
          }
          }}>{ 글제목[2] }</h4>
        <p>8월 21일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=> { 
                setModal(true); setTitle(i)
                // if (modal == true) {
                //   setModal(false)
                //   }
                }}>{ 글제목[i] }
                <span onClick={(e)=>{
                  e.stopPropagation()
                  let copy = [...따봉]
                  copy[i] = copy[i] + 1
                  따봉변경(copy)
                }
                  }> 👍</span> {따봉[i]}
                  <button onClick={(e)=> {
                    e.stopPropagation()
                    let copy = [...글제목]
                    copy.splice(i, 1)
                    글제목변경(copy)
                  }}
                  >삭제</button>
              </h4>
              <p>8월 21일 발행</p>
            </div>
          )
        })
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value)
        }} />
      <button onClick={()=> {
        // 클릭하면 글 추가
        let copy = [...글제목]
        copy.unshift(입력값)
        글제목변경(copy)
      }}>추가</button>

      {
        modal == true 
        ? <Modal title={title} setTitle={setTitle} 글제목={글제목} 글제목변경={글제목변경}/> 
        : null
      }

      
    </div>
  );
}

// 글제목을 클릭하면 글제목의 인덱스가 title의 번호로 바뀐다(settitle로 바꿔줘야겠지?)
// 그 다음에 모달창에 그걸 띄워주면 되는데?

function Modal(props){
  return (
    <div className='modal'>
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  )
}

export default App;