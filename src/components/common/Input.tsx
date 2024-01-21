import React from "react";
import { FieldValues, FieldError } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  register: any;
  placeholder?: string;
  errors: FieldValues["errors"];
  type?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  register,
  placeholder,
  errors,
  type,
}) => {
  return (
    <div className="mb-3">
      <label className="text-sm pb-1">{label}</label>
      <input
        type={type || "text"}
        className="inputs"
        {...register(name, { required: `${label} is required` })}
        placeholder={placeholder || label}
      />
      {errors[name] && (
        <span className="text-xs text-red-600">
          {errors[name] && (errors[name] as FieldError)?.message}
        </span>
      )}
    </div>
  );
};

export default Input;
