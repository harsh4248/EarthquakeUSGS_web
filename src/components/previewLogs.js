const PreviewLogs = (props) => {
  const logs = props.log;
    const getBgColor = props.bgColor;
    const markerSetterMethod = props.markerSetter;
  return (
    <div>
      
      {logs.map((data, i) => {
        //setgradient(getBgColor(data.magnitude));
        return (
          <div onClick={() => {markerSetterMethod(i)}}
            className={
              "flex flex-row border my-2 " + getBgColor(data.magnitude)
            }
            key={i}
          >
            <div className=" my-auto mx-4">
              <span className="rounded-full  text-center lg:text-xl md:text-base sm:text-sm text-xs p-2 font-bold">
                {data.magnitude}
              </span>
            </div>
            <div className="p-2">
              <h1 className="font-bold  lg:text-xl md:text-base sm:text-sm text-xs">
                {data.location}
              </h1>
              <h3 className="text-gray-800 sm:text-sm lg:text-base md:text-sm text-xs">
                {data.time}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PreviewLogs;
