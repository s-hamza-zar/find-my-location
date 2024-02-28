import Starfield from "react-starfield";
import Details from "./components/Details";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  // Setting up the initial state variables
  const [ipDetails, setIpDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3832);

  // Fetching the API once when the
  // component is mounted
  useEffect(() => {
    Axios.get("https://ipapi.co/json/").then((res) => {
      setIpDetails(res.data);
      setLat(res.data.latitude);
      setLon(res.data.longitude);
      setIsFetching(false);
    });
  }, []);
  return (
    <div className="App">
      <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <div className="flex flex-col ">
        <Details ipDetails={ipDetails} />
        {isFetching ? <></> : <Map lat={lat} lon={lon} />}
      </div>

      {/* <Map lat={lat} lon={lon} /> */}
      {/* Other components */}
    </div>
  );
}

export default App;
