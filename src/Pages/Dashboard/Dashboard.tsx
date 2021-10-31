import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";

function Dashboard() {
  const [data, setData] = useState({});
  const sensors = JSON.parse(localStorage.getItem("sfuit")!).device.sensors;
  return (
    <div>
      <Navbar />
      <div className="total">
        <div className="container">
          {sensors &&
            sensors.map((sensor: string) => {
              return <Card sensor={sensor} data={data} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
