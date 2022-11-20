import React, { useState } from "react";
import {  CSSTransition,TransitionGroup } from "react-transition-group";
import { Item } from "../Item";

export const List = ({ posts, title, remove }) => {
  const [isEdit, setIsEdit] = useState(false);
 
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены!!!</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">

            <Item remove={remove} number={index + 1} post={post} />

          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
