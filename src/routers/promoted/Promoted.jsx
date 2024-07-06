import React from 'react'
import './promoted.scss'
import { useContext } from 'react'
import AppContext from '../../context/store'
import List from '../../components/list/List'

const Promoted = () => {

    const [state, dispatch] = useContext(AppContext);
    console.log(state);

  return (
    <div className='promoted'>
        <div className="container">
            <h1>Promoted</h1>
            <div className="wrapper">
                {state.promoted.map((employee) => (
                    <List key={employee.id} employee={employee} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Promoted