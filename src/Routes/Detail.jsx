import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = () => {

  const [dentist, setdentist] = useState([]);
  const params = useParams();

  const fetchDentist = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const data = await response.json();
    setdentist(data);
  };

  console.log(dentist, "detail");

  useEffect(() => {
    fetchDentist();
  }, []);

  return (
    <>
      <h1> Details of Dentist {dentist.id}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Detail;
