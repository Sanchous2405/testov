import React from "react";
import classes from "./mybutton.module.css";

export const Mybutton = ({children , ...props}) => {
  return <button {...props} className={classes.myBtn}>{children}</button>;
};
