import React, { useState } from "react";
import "./style.css";

let number = 3;
function Form({todos, setTodos}) {                      // todos와 setTodos를 props로 받아옴
  const initialState = {                                // initialState 선언
    id:0,
    title : "",
    comment : "",
    isDone : false,
  }

  const [todo, setTodo] = useState(initialState)        // todo의 useState 선언

  const onChangeHandler = function(event){              // onChangeHandler 선언
    const {name, value} = event.target;                 // 이벤트가 발생한 target의 name값과 value값을 namer과 value 이름으로 저장
    setTodo({...todo, [name]:value})                    // setTodo 함수를 이용하여 todo객체에 해당값을 저장 및 상태 변경
  }

  const onSubmitHandler = function(event){              // onSubmitHandler 선언
    event.preventDefault();                             // onsubmit 이벤트가 발생했을때 자동으로 reload 되는것을 막는 함수
    if(todo.title.length === 0) {                       // input 값이 비었을때 알람 설정
      alert("제목을 입력해 주세요");
      return;
    } if (todo.comment.length === 0){
      alert("내용을 입력해 주세요");
      return;
    } 
    setTodos([...todos, {...todo, id:number}]);         // setTodos 함수를 활용하여 todos 상태 변경
    setTodo(initialState);                              // todo을 초기 상태로 돌림
    number++;
  }
  

  return(
    <form className="form" onSubmit={onSubmitHandler}> 
    <div className="leftbox">
        <label htmlFor="title">제목</label>
        <input
            type="text"
            id="title"
            className="titlebox"
            name="title"
            value={todo.title}                          // onsubmitHandler가 실행되면서 초기화된 todo.title 값 가져옴
            onChange={onChangeHandler}>

        </input>

        <label htmlFor="comment">내용</label>
        <input
            type="text"
            id="comment"
            className="commentbox"
            name="comment"
            value={todo.comment}                        // onsubmitHandler가 실행되면서 초기화된 todo.comment 값 가져옴
            onChange={onChangeHandler}>
        </input>
    </div>
    <button className="addbutton">추가하기</button>
</form>
  )
}

export default Form;
