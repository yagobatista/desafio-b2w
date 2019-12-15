import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [randomPlanet, setRandomPlanet] = useState();
  const setPlanet = () =>
    setRandomPlanet(data[Math.floor(Math.random() * data.length)]);

  useEffect(() => {
    const fetchData = async () => {
      let results = [];
      let result = {
        next: "https://swapi.co/api/planets/"
      };
      let initialIteration = true;
      while (result.next) {
        const { data } = await axios(result.next);
        if (data) {
          result = data;
          results = [...results, ...result.results];
          if (initialIteration) {
            initialIteration = false;
            setData(results);
          }
        } else {
          result = [];
        }
      }
      setData(results);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="row mod-full">
        <div className="col">
          <div className="row">
            {randomPlanet && (
              <article>
                <header>
                  <h2>{randomPlanet.name}</h2>
                </header>
                <div className="planet-box-body">
                  <p>
                    Population: <span>{randomPlanet.population}</span>
                  </p>
                  <p>
                    Climate: <span>{randomPlanet.climate}</span>
                  </p>
                  <p>
                    Terrain: <span>{randomPlanet.terrain}</span>
                  </p>
                  <p>
                    Featured in 
                    {randomPlanet.films && randomPlanet.films.length} films
                  </p>
                </div>
              </article>
            )}
            {!randomPlanet && (
              <p className="star-wars-layout">
                This app generate randomly a planet from the star wars franchise
                and tell how would be the climate, terrain and how many films it
                was in.
              </p>
            )}
          </div>
          <div className="row buttonContainer">
            <button className="nextButton" onClick={setPlanet}>
              {randomPlanet ? "Next" : "First planet"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
