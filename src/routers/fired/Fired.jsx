import React from 'react'
import './fired.scss'
import { useContext } from 'react'
import AppContext from '../../context/store'
import List from '../../components/list/List'

const Fired = () => {

    const [state, dispatch] = useContext(AppContext);
    console.log(state);

  return (
    <div className='fired'>
        <div className="container">
            <h1>Fired</h1>
            <div className="wrapper">
                {state.fired.map((employee) => (
                    <List key={employee.id} employee={employee} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Fired