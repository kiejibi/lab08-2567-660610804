import React from 'react'

export default function Task(props) {

    let mystyle = {};

    if(props.isDone == true) {
        mystyle = {"text-decoration": "line-through"};
    }
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span style = {mystyle}>{props.title}</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
  )
}
