const Input = ({ id, label, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full p-1 rounded-[5px] border-2 border-solid border-[rgba(223,224,225,0.98)] mt-3 outline-none focus:border-blue-500 focus:ring-1"
      />
    </div>
  );
};

export default Input;
