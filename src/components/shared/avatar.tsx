type SizeProps = "sm" | "md" | "lg";

interface AvatarProps {
  name?: string;
  size: SizeProps;
  bgColor?: string;
  textColor?: string;
  icon?: React.ReactElement;
  iconColor?: string;
}

const sizes = {
  sm: {
    container: "h-[25px] w-[25px]",
    text: "text-xs",
    svg: "h-[20px] w-[20px] left-[3px]",
  },
  md: {
    container: "h-[40px] w-[40px]",
    text: "text-sm",
    svg: "h-[30px] w-[30px] left-[6px]",
  },
  lg: {
    container: "h-[60px] w-[60px]",
    text: "text-lg",
    svg: "h-[45px] w-[45px] left-[9px]",
  },
};

export const Avatar = ({
  name,
  size,
  bgColor,
  textColor,
  icon,
  iconColor,
}: AvatarProps) => {
  const getInitials = (fullName: string): string | null => {
    if (!fullName.trim()) return null;
    const words = fullName.split(" ");
    const initials = words
      .map((word) => word[0]?.toUpperCase())
      .slice(0, 2)
      .join("");
    return initials || null;
  };

  const initials = name ? getInitials(name) : null;

  const currentSize = sizes[size];

  return (
    <div
      className={`relative flex ${currentSize.container} items-center justify-center overflow-hidden rounded-full ${bgColor || "bg-gray-100"}`}
    >
      {initials ? (
        <span
          className={`${currentSize.text} font-medium ${textColor || "text-gray-600"}`}
        >
          {initials}
        </span>
      ) : icon ? (
        icon
      ) : (
        <svg
          className={`absolute ${currentSize.svg} ${iconColor || "text-gray-400"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};
