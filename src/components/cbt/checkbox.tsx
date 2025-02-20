interface CheckboxProps {
  name: string;
  value: string;
  label: string;
  index: number;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const alphabets = ["A", "B", "C", "D", "E", "F", "G"];

export const CheckBox: React.FC<CheckboxProps> = ({
  name,
  value,
  label,
  index,
  onChange,
  isChecked, // Destructure onChange prop
}) => {
  return (
    <div className="flex items-center rounded-sm border border-gray-200 ps-4 dark:border-gray-700">
      <input
        id={`checkbox-${value}`}
        type="checkbox"
        value={value}
        name={name}
        checked={isChecked}
        onChange={onChange}
        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
      <label
        htmlFor={`checkbox-${value}`}
        className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        <span className="mr-2 text-base font-bold uppercase">{`(${alphabets[index]})`}</span>
        {label}
      </label>
    </div>
  );
};
