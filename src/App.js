import EarthquakeLogs from "./components/EarthquakeLogs";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Map from "./components/map";
import Setting from "./components/setting";
// import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

const App = () => {
  const baseLink =
    "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";
  const [showLog, setshowLog] = useState(false);
  const [showMap, setshowMap] = useState(false);
  const [showSetting, setshowSetting] = useState(false);
  const [mapMarker, setmapMarker] = useState(0);
  const [rawData, setrawData] = useState("");
  const [link, setlink] = useState(baseLink);

  //filter states
  const [fromDate, setFromDate] = useState("2022-22-2");
  const [toDate, setToDate] = useState();
  const [minMagnitude, setMinMagnitude] = useState();
  const [maxMagnitude, setMaxMagnitude] = useState();

  const settingProp = {
    from: fromDate,
    fromSetter: setFromDate,
    to: toDate,
    toSetter: setToDate,
    minMag: minMagnitude,
    minMagSetter: setMinMagnitude,
    maxMag: maxMagnitude,
    maxMagSetter: setMaxMagnitude,
    raw:rawData,
    rawSetter:setrawData
  };

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
      <div className="flex flex-row mt-14" style={{ height: "90vh" }}>
        {!showLog && !showMap && !showSetting && (
          <div className="lg:text-3xl text-center m-auto md:text-lg sm:text-base text-sm">
            Click log button to see the Earthquake list
          </div>
        )}
        {showLog && (
          <div className="m-2 w-full logDiv">
            <EarthquakeLogs
              dataSetter={setrawData}
              setMarker={setmapMarker}
              apiLink={link}
            />
          </div>
        )}

        {showMap && (
          <div className="m-2 w-full mapDiv ">
            <Map markerIndex={mapMarker} data={rawData} />
          </div>
        )}
        {showSetting && (
          <div className="w-full settingDiv h-full flex">
            <Setting
              apiLink={link}
              apiLinkSetter={setlink}
              baseApi={baseLink}
              stateFilter={settingProp}
              logSetter={setshowLog}
            />
          </div>
        )}
      </div>

      {/* <h1 className="text-9xl text-red-500 font-bold">Harsh dalwadi</h1> */}
    </div>
  );
};

export default App;
