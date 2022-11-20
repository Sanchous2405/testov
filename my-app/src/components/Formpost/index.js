import React, { useState } from "react";
import { Mybutton } from "../UI/Mybutton";
import { Myinput } from "../UI/Muinput";

export const Formpost = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form>
      <Myinput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Заголовок"
      ></Myinput>
      <Myinput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание"
      ></Myinput>
      <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
    </form>
  );
};
