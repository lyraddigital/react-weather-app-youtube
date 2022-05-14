import './App.scss';

import { CloudyIcon } from './components/Icons/CloudyIcon/CloudyIcon';

function App() {
  return (
    <main className="mainContainer">
      <div className="layoutContainer">
        <header className="header">
          <h1>Melbourne, Australia</h1>
          <div>Saturday 14th May</div>
          <div>Last updated at 4:25 PM</div> 
          <div className="changeLocation">
            <a href="#">Change location</a>
          </div>
        </header>
        <div id="currentWeather">
          <div className="currentTemperature">
            <div className="iconContainer">
              <CloudyIcon />
            </div>
            <div className="contentContainer">
              <div className="value">18&deg;</div>
              <div className="summary">Cloudy</div>
            </div>
          </div>
          <div className="currentStats">
            <div>
              <div className="value">18&deg;</div>
              <div className="label">High</div>
            </div>
            <div>
              <div className="value">15&deg;</div>
              <div className="label">Low</div>
            </div>
            <div>
              <div className="value">7km/h</div>
              <div className="label">Wind</div>
            </div>
            <div>
              <div className="value">79%</div>
              <div className="label">Rain</div>
            </div>
            <div>
              <div className="value">7:12</div>
              <div className="label">Sunrise</div>
            </div>
            <div>
              <div className="value">17:20</div>
              <div className="label">Sunset</div>
            </div>
          </div>
        </div>
      </div>      
    </main>
  );
}

export default App;
