import EarthquakeLogs from "./components/EarthquakeLogs";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Map from "./components/map";
import Setting from "./components/setting";
// import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

const App = () => {
  const [showLog, setshowLog] = useState(false);
  const [showMap, setshowMap] = useState(false);
  const [showSetting, setshowSetting] = useState(false);
  const [mapMarker,setmapMarker] = useState(0);
  const [rawData,setrawData] = useState('');

  const toggleLog = () => {
    if (showLog === true) {
      setshowLog(false);
    } else {
      setshowLog(true);
    }
  };
  const toggleMap = () => {
    if (showMap === true) {
      setshowMap(false);
    } else {
      setshowMap(true);
    }
  };
  const toggleSetting = () => {
    showSetting ? setshowSetting(false) : setshowSetting(true);
  };
  const navbarProp = {
    logStatus: showLog,
    logtoggle: toggleLog,
    mapStatus: showMap,
    maptoggle: toggleMap,
    settingStatus: showSetting,
    settingtoggle: toggleSetting,
  };

  return (
    <div>
      <Navbar status={navbarProp} />
      <div className="flex flex-row mt-14" style={{"height":'90vh'}}>
        {!showLog && !showMap && !showSetting && (
          <div className="lg:text-3xl text-center m-auto md:text-lg sm:text-base text-sm">
            Click log button to see the Earthquake list
          </div>
        )}
        {showLog && (
          <div className="m-2 w-full logDiv">
            <EarthquakeLogs dataSetter={setrawData} setMarker={setmapMarker}/>
          </div>
        )}

        {showMap && (
          <div className="m-2 w-full mapDiv ">
            <Map markerIndex={mapMarker} data={rawData}/>
          </div>
        )}
        {showSetting && (
          <div className="m-2 p-2 w-full settingDiv bg-black">
            <Setting />
          </div>
        )}
      </div>

      {/* <h1 className="text-9xl text-red-500 font-bold">Harsh dalwadi</h1> */}
    </div>
  );
};

export default App;
