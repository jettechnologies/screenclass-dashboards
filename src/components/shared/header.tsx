import { Navbar } from "@/features/student/Components/navbar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md backdrop-filter">
      <div className="bg-white/80 px-4 py-2">
        <Navbar />
      </div>
    </header>
  );
};
