import React, { useContext } from "react";
import Card from "../Components/Card";
import { GlobalContext } from "../context/GlobalContext";

const Favs = () => {
  const { state } = useContext(GlobalContext);
  const { favs } = state;

  return (
    <>
      <h1>Favourite Dentists</h1>
      <div className="cardContainer">
        {favs.map((fav) => (
          <Card
            key={fav.id}
            name={fav.name}
            username={fav.username}
            id={fav.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
