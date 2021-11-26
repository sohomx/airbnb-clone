import ReactMapGL from "react-map-gl";
import { useState } from "react";

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });
  console.log(viewport);
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/sohoooom/ckwggdmt30a5x14n45p24vzd2"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
    ></ReactMapGL>
  );
}

export default Map;
