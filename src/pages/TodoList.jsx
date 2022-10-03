import React, { useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

function TodoList() {
  const [todos, setTodos] = useState([  // 제일 상위에 리스트를 스테이츠 선언, todos는 객체를 요소로 가지고 있는 배열
    {
      id : 1,
      title : "공부하자",
      comment : "리액트를 공부하자",
      isDone : true, 
    },
    {
      id : 2,
      title : "공부하자",
      comment : "리액트를 공부하자",
      isDone : false, 
    }
  ])
  return (
    <Layout>
      <Header />
        <Form todos={todos} setTodos={setTodos}/>
        <List todos={todos} setTodos={setTodos}/>
    </Layout>
  )
}

export default TodoList
