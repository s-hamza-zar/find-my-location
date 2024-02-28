import React, { useState } from "react";
import { LuClipboard } from "react-icons/lu";
import { IoIosCheckmarkCircle } from "react-icons/io";
const InputField = ({ value }) => {
  console.log(value, "hamza");
  const [isCopied, setIsCopied] = useState(false);
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(value)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const hamza = false;
  return (
    <div className="flex items-center justify-between text-white">
      <input
        type="text"
        className="bg-transparent outline-none"
        value={value}
        disabled
      />
      {/* <button className="mr-2" onClick={handleCopyClick}>
        {isCopied && hamza ? (
          <IoIosCheckmarkCircle color="green" size={22} />
        ) : (
          <LuClipboard size={22} />
        )}
      </button> */}
    </div>
  );
};

export default InputField;
