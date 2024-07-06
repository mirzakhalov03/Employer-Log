import React, { useEffect, useState } from 'react';
import './home.scss';
import Card from '../../components/card/Card';

const Home = () => {
  const url = "https://reqres.in/api/users?page=1";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.data); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='home'>
      <div className="container">
        <h1>All Employees</h1>
        <div className="wrapper">
          {data.map((employee) => (
            <Card key={employee.id} employee={employee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
