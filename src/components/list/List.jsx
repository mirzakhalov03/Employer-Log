import { AiFillEye } from "react-icons/ai"; 
import React from 'react'
import './list.scss'

const List = ({employee}) => {
  return (
    <div className='list'>
        <div className="list-img">
            <img src={employee.avatar} alt="" />
        </div>
        <div className="list-context">
            <h3>{employee.first_name} {employee.last_name}</h3>
            <a href="mailto:{employee.email}">{employee.email}</a>
            <button onClick={() => alert("Sorry teacher, no extra info to show")}><AiFillEye /> View</button>
        </div>
    </div>
  )
}

export default List