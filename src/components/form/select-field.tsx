import { Controller } from "react-hook-form";
import { Select, Option, FormControl, FormHelperText } from "@mui/joy";

interface SelectFieldProps {
  name: string;
  control: any;
  options: { label: string; value: string | number }[];
  placeholder?: string;
  variant?: "soft" | "outlined" | "plain" | "solid";
  size?: "sm" | "md" | "lg";
  required?: boolean;
}

export const SelectField = ({
  name,
  control,
  options,
  placeholder,
  variant = "outlined",
  size = "md",
  required,
}: SelectFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required ? "This field is required" : false }}
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error}>
          <Select
            {...field}
            onChange={(_, value) => field.onChange(value)}
            placeholder={placeholder}
            size={size}
            variant={variant}
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
          {fieldState.error && (
            <FormHelperText>{fieldState.error.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
