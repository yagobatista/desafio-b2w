import React from "react";

function AppDescription(props) {
  const { hasPlanet } = props;
  return (
    !hasPlanet ?
    <p className="star-wars-layout">
      This app generate randomly a planet from the star wars franchise
      and tell how would be the climate, terrain and how many films it
      was in.</p> : ''

  );
}

export default AppDescription;
