import { useState, useEffect } from "react";
const EarthquakeLogs = () => {
  //const [rawData, setrawData] = useState();
  //   const [logs, setLogs] = useState([
  //     {
  //       magnitude: "4.5",
  //       location: "32 km W of Sola, Vanuatu",
  //       time: "1388592209000",
  //     },
  //     {
  //       magnitude: "6.5",
  //       location: "32 km W of Sola, Vanuatu",
  //       time: "1388592209000",
  //     },
  //     {
  //       magnitude: "7.5",
  //       location: "32 km W of Sola, Vanuatu",
  //       time: "1388592209000",
  //     },
  //   ]);
  const [logs, setLogs] = useState([]);
  const [gradient,setgradient] = useState('bg-red-100');
  const processLogs = (jsonFeature) => {
    
    const tempLogs = [];
    jsonFeature.forEach((element) => {
      const properties = element.properties;
      tempLogs.push({
        magnitude: parseFloat(properties.mag).toFixed(1),
        location: properties.place,
        time: properties.time,
      });
    });
    setLogs(tempLogs);
  };
  useEffect(() => {
    fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02"
    )
      .then((response) => {
        if (response.ok) {
          //console.log(response);
          return response.json();
        } else {
          throw response;
        }
      })
      .then((jsonData) => {
        // console.log(jsonData);
        // setrawData(jsonData.features);
        // console.log(jsonData.features);
        // processLogs();
        return jsonData.features;
      })
      .then((jsonFeature) => {
        processLogs(jsonFeature);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const getBgColor = (magnitude) => {

      if(magnitude < 1) {
        return 'bg-red-100';
      }
      else if(magnitude >= 1 && magnitude < 2 ) {
          return 'bg-red-200';
      }
      else if(magnitude >= 2 && magnitude < 3) {
          return 'bg-red-300';
      }
      else if(magnitude >= 3 && magnitude < 4) {
          return 'bg-red-400';
      }
      else if(magnitude >= 4 && magnitude < 5) {
          return 'bg-red-500';
      }
      else if(magnitude >= 5 && magnitude < 6) {
          return 'bg-red-600';
      }
      else if(magnitude >= 6 && magnitude < 7) {
          return 'bg-red-700';
      }
      else  {
          return 'bg-red-800';
      }
  }

  return (
    <div className="m-2">
      {logs.map((data, i) => {
        //setgradient(getBgColor(data.magnitude));
        return (
          <div className={"flex flex-row border my-2 " + getBgColor(data.magnitude)} key={i}>
            <div className=" my-auto mx-4">
              <span className="rounded-full  text-center text-xl p-2 font-bold">
                {data.magnitude}
              </span>
            </div>
            <div className="p-2">
              <h1 className="font-bold text-xl">{data.location}</h1>
              <h3 className="text-gray-800 text-sm">{data.time}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EarthquakeLogs;
