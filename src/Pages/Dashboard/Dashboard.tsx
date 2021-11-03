import React from "react";
import Board from "../../Components/Board/Board";
import RightBar from "../../Components/RightBar/RightBar";
import SideBar from "../../Components/SideBar/SideBar";

function Dashboard() {
  return (
    <div>
      <SideBar />
      <Board />
      <RightBar />
    </div>
  );
}

export default Dashboard;
