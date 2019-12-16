import React, { useState, useEffect } from "react";
import PlanetBox from "./PlanetBox";
import AppDescription from "./AppDescription";
import "./App.scss";
import axios from "axios";
import LaddaButton, {SLIDE_UP} from 'react-ladda';


function App() {
  const [data, setData] = useState([]);
  const [randomPlanet, setRandomPlanet] = useState();
  const setPlanet = () => setRandomPlanet(data[Math.floor(Math.random() * data.length)]);

  useEffect(() => {
    const fetchData = async () => {
      let results = [];
      let result = {
        next: "https://swapi.co/api/planets/"
      };
      while (result.next) {
        const { data } = await axios(result.next);
        if (data) {
          result = data;
          results = [...results, ...result.results];
          setData(results);
        } else {
          result = [];
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="row mod-full">
        <div className="col">
          <div className="row">
            <PlanetBox {...randomPlanet}></PlanetBox>
            <AppDescription hasPlanet={!!randomPlanet}></AppDescription>
          </div>
          <div className="row buttonContainer">
            <LaddaButton
              className="nextButton"
              onClick={setPlanet}
              data-style={SLIDE_UP}
              loading={!data.length}>
              {randomPlanet ? "Next" : "First planet"}
            </LaddaButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
