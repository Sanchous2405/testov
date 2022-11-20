import React, { useState, useCallback } from "react";
import { Mybutton } from "../UI/Mybutton";

export const Item = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = useCallback(() => {
    setIsEdit(true);
  }, []);
  

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>
            {props.number} . {props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btn">
          <Mybutton onClick={() => props.remove(props.post)}>Удалить</Mybutton>
        </div>
        <div className="post__btn">
          <Mybutton  func={handleEdit} >Редактировать</Mybutton>
        </div>
      </div>
    </div>
  );
};
