const InputField = ({ value }) => {
  return (
    <div className="flex items-center justify-between w-full text-white">
      <input
        type="text"
        className="bg-transparent outline-none w-full"
        value={value}
        disabled
      />
    </div>
  );
};

export default InputField;
