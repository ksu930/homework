import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({todos, setTodos}) {
  const OnDeleteHandler = function(todoId){
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    })
    setTodos(newTodos)
  }

  const OnEditHandler = function(todoId){
    const newTodos = todos.map((todo) => {
      if(todo.id === todoId){
        return {...todo, isDone : !todo.isDone,} 
      } else {
        return todo
      }
    
    })
   
    setTodos(newTodos)
  }
  

  return (
    <div className="listbox">
    <div className="workingtitle">
    <h2>Working...🔥</h2>
        <div className="workingbox">
             {todos.map((todo) => {
             
              if(todo.isDone === false){
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
