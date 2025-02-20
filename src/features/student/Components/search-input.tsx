import Image from "next/image";

interface SearchInputProps {
  imageUrl: string;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  imageUrl,
  placeholder = "Search...",
}) => {
  return (
    <form className="mx-auto h-full max-w-md">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative h-full">
        {/* Search Icon */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Image src={imageUrl} alt="Search Icon" width={16} height={16} />
        </div>

        {/* Search Input */}
        <input
          type="search"
          id="search"
          className="block h-full w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder={placeholder}
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
