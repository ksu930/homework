import React from "react";
import "./style.css";

function Todo({todo, OnDeleteHandler, OnEditHandler}) {
  return(
    <div className="todo">
      <div>
      <h2 className="title">{todo.title}</h2>
      <div className="comment">{todo.comment}</div>
      </div>
      <div className="buttons">
        <button className="deletebutton" onClick={() => OnDeleteHandler(todo.id)}>
        {/* //onClick할 경우 함수를 실행하는데 해당 todo의 id값을 같이 실어서 호출 */}
         삭제하기
         </button> 
        <button className="editbutton" onClick={() => OnEditHandler(todo.id)}>{todo.isDone === false ? "완료" : "취소"}</button>
      </div>
    </div>

  )    
}

export default Todo;
