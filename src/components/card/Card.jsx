import { MdOutlineCancel } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { useContext } from "react";
import AppContext from "../../context/store";
import React from 'react';
import './card.scss';

export const initialState = {
  fired: [],
  promoted: []
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'FIRE':
      return {
        ...state,
        fired: [...state.fired, action.payload]
      }
    case 'PROMOTE':
      return {
        ...state,
        promoted: [...state.promoted, action.payload]
      }
    default:
      return state;
  }
}

const Card = ({ employee }) => {
  const [state, dispatch] = useContext(AppContext);

  const handleFire = () => {
    console.log(employee);
    dispatch({ type: 'FIRE', payload: employee });
  }

  const handlePromote = () => {
    console.log(employee);
    dispatch({ type: 'PROMOTE', payload: employee });
  }

  const isFired = state.fired.some(firedEmployee => firedEmployee.id === employee.id);
  const isPromoted = state.promoted.some(promotedEmployee => promotedEmployee.id === employee.id);

  const isActionTaken = isFired || isPromoted;

  return (
    <div className='card'>
      <div className="card-img">
        <img src={employee.avatar} alt={`${employee.first_name} ${employee.last_name}`} />
      </div>
      <div className="card-context">
        <div className="details">
          <ul>
            <li>Name:</li>
            <li>Position:</li>
            <li>Salary:</li>
            <li>Email:</li>
          </ul>
          <ul className="ul_right">
            <li>{employee.first_name} {employee.last_name}</li>
            <li>Worker</li>
            <li>$5000</li>
            <li>{employee.email}</li>
          </ul>
        </div>
        <div className="endBtns">
          <button className='promote' onClick={handlePromote} disabled={isActionTaken}>
            <GiProgression className="icon" />
            {isPromoted ? 'Promoted' : 'Promote'}
          </button>
          <button className='fire' onClick={handleFire} disabled={isActionTaken}>
            <MdOutlineCancel />
            {isFired ? 'Fired' : 'Fire'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
