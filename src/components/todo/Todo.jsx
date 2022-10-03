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
        <button className="deletebutton" onClick={() => OnDeleteHandler(todo.id)}>삭제하기</button>
        <button className="editbutton" onClick={() => OnEditHandler(todo.id)}>{todo.isDone === false ? "완료" : "취소"}</button>
      </div>
    </div>

  )    
}

export default Todo;
