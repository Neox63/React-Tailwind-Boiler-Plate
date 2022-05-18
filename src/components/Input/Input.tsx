import React from "react";

const Input = ({
  value,
  onChange,
  className,
  placeholder,
  icon,
  iconAlignment = "right",
  isValid,
  label,
  ...props
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  iconAlignment?: "left" | "right";
  isValid?: boolean;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      {label && <label className="text-sm md:text-base">{label}</label>}
      <div className="relative flex flex-wrap items-stretch w-full mt-1">
        <input
          value={value}
          onChange={onChange}
          className={`relative w-full rounded-md shadow outline-none placeholder-gray-400 py-4 px-2 ${
            iconAlignment === "left" && isValid
              ? "px-10"
              : iconAlignment === "left"
              ? "pl-10"
              : ""
          } ${className}`}
          placeholder={placeholder}
          {...props}
        />

        {icon && (
          <Icon
            className={`text-gray-400 ${
              iconAlignment === "right" ? "right-0" : "left-0"
            }`}
            icon={icon}
          />
        )}

        {icon && isValid && iconAlignment === "left" && (
          <Icon
            className="right-0"
            icon={<i className="text-green-700 fas fa-check"></i>}
          />
        )}
      </div>
    </>
  );
};

const Icon = ({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`absolute z-10 py-1 px-5 w-8 h-full leading-snug rounded text-base font-normal text-center flex items-center justify-center ${className}`}
    >
      {icon}
    </span>
  );
};

export default Input;
