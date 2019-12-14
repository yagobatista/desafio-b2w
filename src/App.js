import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [randomPlanet, setRandomPlanet] = useState({});
  const setPlanet = () =>
    setRandomPlanet(data[Math.floor(Math.random() * data.length)]);

  useEffect(() => {
    const fetchData = async () => {
      let results = [];
      let result = {
        next: "https://swapi.co/api/planets"
      };
      let request;
      while (result.next) {
        request = await axios(result.next);
        if (request.data) {
          result = request.data;
          results = [...results, ...result.results];
        } else {
          result = [];
        }
      }
      setData(results);
    };
    fetchData();
  }, []);
  useEffect(setPlanet, [data]);

  return (
    <div className="App">
      <div className="row mod-full">
        <div className="col">
          <div className="row">
            <article>
              <header>
                <h2>{randomPlanet && randomPlanet.name}</h2>
              </header>
              <div className="planet-box-body">
                <p>
                  Population:
                  <span>{randomPlanet && randomPlanet.population}</span>
                </p>
                <p>
                  Climate: <span>{randomPlanet && randomPlanet.climate}</span>
                </p>
                <p>
                  Terrain: <span>{randomPlanet && randomPlanet.terrain}</span>
                </p>
                <p>Featured in {randomPlanet && randomPlanet.films && randomPlanet.films.length} films</p>
              </div>
            </article>
          </div>
          <div className="row buttonContainer">
            <button className="nextButton" onClick={setPlanet}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
