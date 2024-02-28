import { WiTime8 } from "react-icons/wi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import InputField from "./InputField";
import { SiInternetcomputer } from "react-icons/si";

const Details = ({ ipDetails }) => {
  return (
    <div className="glow-card w-full max-w-2xl  p-8 mb-16 mt-16 mx-auto flex flex-col ">
      <h1 class="text-2xl text-white font-bold mb-6 border-b-2 border-b-white/50">
        IP Address Finder
      </h1>
      <div className="left">
        <div className="flex items-center  space-x-2">
          <FaMapMarkerAlt size={24} className="mt-[-2px]" />
          <InputField value={ipDetails?.ip} />
        </div>
        <div className="flex items-center mt-2 space-x-2">
          <img
            alt=""
            src={`https://flagsapi.com/${ipDetails?.country_code}/shiny/24.png`}
          />
          <InputField value={ipDetails.city + ", " + ipDetails.country_name} />
        </div>
        <div className="flex items-center mt-2 space-x-2">
          <MdAttachMoney size={24} />
          <InputField value={ipDetails.currency} />
        </div>

        <div className="flex items-center mt-2 space-x-2">
          <WiTime8 size={24} />
          <InputField value={ipDetails.timezone} />
        </div>
        <div className="flex items-center mt-2 space-x-2">
          <SiInternetcomputer size={24} />
          <InputField value={ipDetails.org} />
        </div>
      </div>
    </div>
  );
};

export default Details;
