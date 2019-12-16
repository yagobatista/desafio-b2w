import React from "react";

function PlaneBox(props) {
  const {
     name,
    population,
    climate,
    terrain,
    films,
   } = props;
  return (
    Object.keys(props).length ? (
      <article className="planet-box">
        <header>
          <h2>{name}</h2>
        </header>
        <div className="planet-box-body">
          <ul className="planet-attributes-list">
            <li>Population: <span>{population}</span></li>
            <li>Climate: <span>{climate}</span> </li>
            <li>Terrain: <span>{terrain}</span> </li>
            <li>Featured in {films && films.length} films </li>
          </ul>
        </div>
      </article>
    ) : ''
  );
}

export default PlaneBox;
