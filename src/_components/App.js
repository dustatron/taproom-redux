import React from "react";
import Nabbar from "./Layout/Navbar";
import TapList from "./Tap/List";
import KegAdd from "./Keg/Add";
import KegDetails from "./Keg/Details";
import KegEdit from "./Keg/Edit";

function App() {
  return (
    <div className="App">
      <Nabbar />
      <h1> Main App </h1>
      <TapList />
      <KegAdd />
      <KegDetails />
      <KegEdit />
    </div>
  );
}

export default App;
