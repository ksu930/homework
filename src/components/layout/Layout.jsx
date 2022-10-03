import React from "react";
import "./style.css";

function Layout(props) {
  return(
  <div className="layout">{props.children}</div>      //Layout의 자식 컴포넌트 를 가지고옴
  )
}

export default Layout;
