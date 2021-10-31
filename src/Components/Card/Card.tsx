import React from "react";
import "./Card.css";

export default function Card({ data, sensor }:{data : any; sensor : any}) {
  const sfuit = localStorage.getItem("sfuit") || null;
  console.log(sensor);
  return (
    <div>
      {sensor && data && (
        <div className="card">
          <div className="box">
            <div className="content">
              <h2 className="back">
                <i className="fas fa-heartbeat"></i>
              </h2>
              <h3 className="title">{sensor.name}</h3>
              <p className="value">
                {data[sensor.name] ? data[sensor.name] : 0} {sensor.unit}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* <div className="card">
          <div className="box">
            <div className="content">
              <h2 className="back">0<sub>2</sub></h2>
              <h3 className="title">Oxygen Levels</h3>
              <p className="value">{data ? data.SpO2 : 0} %</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <h2 className="back">
                <i class="fas fa-temperature-low"></i>-
              </h2>
              <h3 className="title">Temperature</h3>
              <p className="value">{data ? data.Temparature : 0} F</p>
            </div>
          </div>
        </div> */}
    </div>
  );
}
