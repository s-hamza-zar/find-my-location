import React from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
const AnyReactComponent = ({ text }) => (
  <div>
    {text}
    <FaMapMarkerAlt size={50} />
  </div>
);
const Map = ({ lat, lon }) => {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lon,
    },
    zoom: 15,
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div
        style={{
          height: "300px",
          width: "100%",
          maxWidth: "42rem",
          borderRadius: "8px",
        }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          //   style={{ backgroundColor: "red" }}
        >
          {/* <AnyReactComponent text="My Marker" /> */}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
