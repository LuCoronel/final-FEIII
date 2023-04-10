import React, { useContext } from "react";
import Card from "../Components/Card";
import DataContext from "../context/DataContext";

const Home = () => {
  const dentistData = useContext(DataContext);

  return (
    <main>
      <h1>Home</h1>
      <div className="cardContainer">
        {dentistData &&
          dentistData.map((dentist) => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
              dentistData={dentist}
            />
          ))}
      </div>
    </main>
  );
};

export default Home;
