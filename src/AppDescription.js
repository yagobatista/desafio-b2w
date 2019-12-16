import React from "react";

function AppDescription(props) {
  const { hasPlanet } = props;
  return (
    !hasPlanet ?
    <p className="star-wars-layout"> This app generates randomly planets from the star wars franchise, display how would be the climate, terrain and how many films it was in.</p>
    : ''

  );
}

export default AppDescription;
