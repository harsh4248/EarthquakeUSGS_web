import React, { useState,useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = (props) => {
  const markerIndex = props.markerIndex;
  const rawData = props.data;
  
    console.log(rawData + ' ' + markerIndex);
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyc2g0MjQ4IiwiYSI6ImNsMnp2eThnbTBoN3ozY3BzZ3M1dHUxaWwifQ.2fhIt6wg6RiWY0FxlKACVA';
    const mapContainerRef = useRef(null);
    const [mapObj,setmapObj] = useState();
    //let map2;
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          // See style options here: https://docs.mapbox.com/api/maps/#styles
          style: 'mapbox://styles/mapbox/streets-v11',
          //center: [cordArr[0], cordArr[1]],
          zoom: 5,
        });
    
        // add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
        
            
        setmapObj(map);
        // clean up on unmount
        return () => map.remove();
      }, []);
      if(Object.keys(rawData).length !== 0 && typeof(mapObj) !== "undefined") {
        const cordArr = rawData[markerIndex].geometry.coordinates;
        //console.log(cordArr);
        const marker = new mapboxgl.Marker().setLngLat([cordArr[0], cordArr[1]]).addTo(mapObj);
        mapObj.setCenter([cordArr[0],cordArr[1]]);
    }

  return <div className="w-full h-full" ref={mapContainerRef}></div>;
};

export default Map;
