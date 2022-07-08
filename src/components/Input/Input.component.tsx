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
        <label
          htmlFor=""
          className="text-sm font-quicksand leading-[21px] text-text_primary block after:content-['*'] after:text-danger_red "
        >
          {label}
        </label>
      )}

      <input
        name={name}
        type={type}
        className={`w-full p-2 border rounded-[8px] text-md font-quicksand font-[400] leading-6 pt-[16px] pl-[12px] pb-[8px] ${
          error ? "border-red-500" : "border-gray-300"
        }  mt-1 focus:outline-none`}
        onChange={onChange}
        value={value}
      />
      {error && (
        <p className="text-sm pt-[4px] text-red-500 font-quicksand font-[400] leading-[21px]">
          {error}
        </p>
      )}
    </div>
  );
};

export default React.memo(Input);
