import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import PreviewLogs from "./previewLogs";
const EarthquakeLogs = (props) => {
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
  const [isLoading, setisLoading] = useState(true);
  const [logs, setLogs] = useState([]);
  const rawdataSetter = props.dataSetter;
  const link = props.apiLink;
  //const [gradient,setgradient] = useState('bg-red-100');
  const processLogs = (jsonFeature) => {
    rawdataSetter(jsonFeature);
    const tempLogs = [];
    jsonFeature.forEach((element) => {
      const properties = element.properties;
      const timeStamp = properties.time;
      const date = new Date(timeStamp);
      const processedTime =
        date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
      tempLogs.push({
        magnitude: parseFloat(properties.mag).toFixed(1),
        location: properties.place,
        time: processedTime,
      });
    });
    setLogs(tempLogs);
    setisLoading(false);
  };
  useEffect(() => {
    rawdataSetter("");
    props.setMarker(0);
    setTimeout(() => {
      setisLoading(true);
      fetch(link)
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
  }, 2000);

  const getBgColor = (magnitude) => {
    if (magnitude < 1) {
      return "bg-red-100";
    } else if (magnitude >= 1 && magnitude < 2) {
      return "bg-red-200";
    } else if (magnitude >= 2 && magnitude < 3) {
      return "bg-red-300";
    } else if (magnitude >= 3 && magnitude < 4) {
      return "bg-red-400";
    } else if (magnitude >= 4 && magnitude < 5) {
      return "bg-red-500";
    } else if (magnitude >= 5 && magnitude < 6) {
      return "bg-red-600";
    } else if (magnitude >= 6 && magnitude < 7) {
      return "bg-red-700";
    } else {
      return "bg-red-800";
    }
  };

  return (
    <div className="w-full overflow-scroll h-full">
      {isLoading === true ? (
        <div className="m-auto text-center place-content-center">
          <ReactLoading
            type="spinningBubbles"
            color="#0000FF"
            height={100 * 2}
            width={50 * 2}
          />
        </div>
      ) : (
        <PreviewLogs
          log={logs}
          bgColor={getBgColor}
          markerSetter={props.setMarker}
        />
      )}
    </div>
  );
};

export default EarthquakeLogs;
