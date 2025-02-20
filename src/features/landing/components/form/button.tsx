interface ButtonProps {
  isDisabled: boolean;
  content: string;
}

export const Button = ({ isDisabled, content }: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`w-full rounded-lg ${isDisabled ? "bg-[#93CAF6]" : "bg-SC-Nav-Blue"} px-[10px] py-3 font-poppins text-sm font-semibold capitalize ${isDisabled ? "text-[#fbfbfb]" : "text-white"} lg:text-xl`}
    >
      {content}
    </button>
  );
};
