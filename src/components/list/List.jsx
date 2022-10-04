import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({todos, setTodos}) {                          // todos와 setTodos를 props로 받음
  const OnDeleteHandler = function(todoId){                 // OnDeleteHandler Todo 컴포넌트로 부터 todoId를 변수로 받음
    const newTodos = todos.filter((todo) => {               // todos의 속성 todo를 filter로 todo.id가 같지 않은것만 골라서 newTodos로 저장
      return todo.id !== todoId;
    })
    setTodos(newTodos)                                      // newTodos를 state로 바꿈
  }

  const OnEditHandler = function(todoId){                   // Todo 컴포넌트로 부터 todoId를 변수로 받음
    const newTodos = todos.map((todo) => {                  // todos를 map으로 돌려서 todo.id가 변수와 같은것을 찾아서 newTodos에 저장
      if(todo.id === todoId){                               
        return {...todo, isDone : !todo.isDone,}            // 찾은 todo의 todo.isDone 값을 반대로 바꿈
      } else {
        return todo                                         // 다른 경우에는 그대로 todo를 가져옴
      }
    })   
    setTodos(newTodos)                                      // newTodos를 새로운 state로 선언
  }
  

  return (
    <div className="listbox">                               
    <div className="workingtitle">
    <h2>Working...🔥</h2> 
        <div className="workingbox">
             {todos.map((todo) => {
             
              if(todo.isDone === false){
                return(
                  <Todo                                     // div 박스들을 만들어주고 todos를 맵으로 돌려서 id.Done값이
                    todo={todo}                             // false 인것만 찾아서 Todo를 만듬, Todo컴포넌트에서 필요한 값들만 props로 보냄
                    key={todo.id}
                    OnDeleteHandler={OnDeleteHandler}
                    OnEditHandler={OnEditHandler}
                  />
                )
              } else return null;                           // if조건에 해당하지 않을때에는 Working에 출력되면 안되므로 null 값을 리턴
             })}            
        </div>
    </div>

    <div className="workingtitle">
    <h2>Done...!🎉</h2> 
        <div className="workingbox">
        {todos.map((todo) => {
              if(todo.isDone === true){
                return(
                  <Todo
                    todo={todo}
                    key={todo.id}
                    OnDeleteHandler={OnDeleteHandler}
                    OnEditHandler={OnEditHandler}
                  />
                )
              } else return null;
             })}    
        </div>
    </div>
</div>
  )
}

export default List;
