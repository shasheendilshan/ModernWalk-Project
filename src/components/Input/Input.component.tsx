import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  onChange,
  value,
  label,
  error,
}) => {
  console.log(`rendered ${name} component`);
  return (
    <div>
      {label && (
        <label htmlFor="" className="text-sm font-bold text-gray-600 block">
          {label}
        </label>
      )}

      <input
        name={name}
        type={type}
        className={`w-full p-2 border ${
          error ? "border-red-500" : ""
        } border-gray-300 mt-1 rounded-sm focus:outline-none`}
        onChange={onChange}
        value={value}
      />
      {error && <p className="text-xs text-red-500 font-bold">{error}</p>}
    </div>
  );
};

export default React.memo(Input);
