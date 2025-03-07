"use client";

import { useFormContext } from "react-hook-form";
import {
  TextareaHTMLAttributes,
  InputHTMLAttributes,
  useState,
  useCallback,
} from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

export type TextTransform = "uppercase" | "capitalize" | "lowercase";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: "text" | "email" | "password" | "number";
  label?: string;
  labelTextTransform?: TextTransform;
  labelColor?: string;
  required?: boolean;
  placeholder?: string;
  inputSize?: "sm" | "md" | "lg";
  radius?: string | number;
  boldLabel?: boolean;
  className?: string;
  icon?: React.ReactElement;
}

export interface TextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  labelColor?: string;
  labelTextTransform?: TextTransform;
  placeholder?: string;
  required?: boolean;
  //   borderColor?: string;
  height?: string | number;
  radius?: string;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  type = "text",
  inputSize = "md",
  label,
  placeholder,
  labelColor = "text-gray-900 dark:text-white",
  labelTextTransform = "capitalize",
  radius = "8px",
  boldLabel = false,
  icon,
  required,
  className,
  ...props
}) => {
  const { register, formState } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const error = formState.errors[name];

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const size = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-3 text-xs md:text-sm",
    lg: "px-5 py-4 text-sm lg:text-base",
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className={`mb-2 block text-xs font-medium md:text-sm ${labelColor} ${boldLabel ? "font-bold" : ""} ${labelTextTransform}`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>
        )}
        <input
          id={name}
          {...register(name)}
          type={inputType}
          placeholder={placeholder}
          className={twMerge(
            `block w-full rounded-lg bg-[#fbfbfb] font-poppins font-normal text-black ${icon ? "pl-10" : ""} ${size[inputSize]} `,
            className,
          )}
          style={{
            border:
              error && typeof error.message === "string"
                ? "1px solid red"
                : undefined,
            borderRadius: typeof radius === "number" ? `${radius}px` : radius,
          }}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
          >
            {showPassword ? (
              <IoEyeOutline size={20} color="#131313" />
            ) : (
              <IoEyeOffOutline size={20} color="#131313" />
            )}
          </button>
        )}
      </div>

      {error && typeof error.message === "string" && (
        <p className="mt-1 text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export const TextAreaField = ({
  name,
  label,
  labelColor,
  labelTextTransform,
  placeholder,
  height,
  required,
  radius = "rounded-lg",
  className,
  ...props
}: TextareaFieldProps) => {
  const { register, formState } = useFormContext();
  const error = formState.errors[name];

  const textareaHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div className="h-full w-full">
      {label && (
        <label
          htmlFor={name}
          className={`mb-2 block text-sm font-medium ${labelColor || "text-gray-900 dark:text-white"} ${labelTextTransform ? `text-${labelTextTransform}` : ""}`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        id={name}
        rows={4}
        className={twMerge(
          `block w-full bg-[#fbfbfb] p-2.5 font-poppins text-sm font-normal text-black lg:text-base h-${textareaHeight} ${radius}`,
          className,
        )}
        style={{
          border:
            error && typeof error.message === "string"
              ? "1px solid red"
              : undefined,
        }}
        placeholder={placeholder}
        {...register(name, { required })}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message?.toString() || "Invalid input"}
        </p>
      )}
    </div>
  );
};
