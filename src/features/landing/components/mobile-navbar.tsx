import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer } from "@/components/shared";
import { MobileNavLink } from "./navbar";
import Image from "next/image";
import { link } from "fs";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right";
  navLinks: MobileNavLink[];
}

export const MobileNavBar: React.FC<Props> = ({
  isOpen,
  navLinks,
  onClose,
  position = "right",
}) => {
  const pathname = usePathname();
  const activeClassName = (link: string) =>
    pathname === link
      ? "bg-[#FDE9D9] text-[#F47A1C]"
      : "bg-transparent text-black";

  const isLinkActive = (link: string) => pathname === link;
  return (
    <Drawer isOpen={isOpen} onClose={onClose} position="right">
      <ul className="mt-12 flex flex-col gap-y-7 rounded-lg font-medium md:mt-0 md:flex-row md:space-x-8">
        {navLinks.map((navLink) => (
          <li
            key={navLink.label}
            className={`px-[9px] py-2 ${activeClassName(navLink.link)} flex items-center gap-x-1 rounded-lg`}
          >
            <div
              className={`h-[22px] w-[22px] rounded-md ${isLinkActive(navLink.link) ? "shadow-sm" : undefined} relative`}
            >
              <Image
                src={navLink.icon}
                alt={`${navLink.label}-icon`}
                fill
                className="h-full w-full object-cover"
              />
            </div>
            <Link href={navLink.link}>{navLink.label}</Link>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};
