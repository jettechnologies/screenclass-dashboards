// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Drawer } from "@/components/shared";
// import { MobileNavLink } from "./navbar";
// import Image from "next/image";

// interface Props {
//   isOpen: boolean;
//   onClose: () => void;
//   position?: "left" | "right";
//   navLinks: MobileNavLink[];
// }

// export const MobileNavBar: React.FC<Props> = ({
//   isOpen,
//   navLinks,
//   onClose,
//   position = "right",
// }) => {
//   const pathname = usePathname();
//   const activeClassName = (link: string) =>
//     pathname === link
//       ? "bg-[#FDE9D9] text-[#F47A1C]"
//       : "bg-transparent text-black";

//   const isLinkActive = (link: string) => pathname === link;
//   return (
//     <Drawer isOpen={isOpen} onClose={onClose} position={position}>
//       <ul className="mt-12 flex flex-col gap-y-7 rounded-lg font-medium md:mt-0 md:flex-row md:space-x-8">
//         {navLinks.map((navLink) => (
//           <li
//             key={navLink.label}
//             className={`px-[9px] py-2 ${activeClassName(navLink.link)} flex items-center gap-x-2 rounded-lg`}
//           >
//             <div
//               className={`h-[22px] w-[22px] rounded-md ${isLinkActive(navLink.link) ? "shadow-sm" : undefined} relative`}
//             >
//               <Image
//                 src={navLink.icon}
//                 alt={`${navLink.label}-icon`}
//                 fill
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <Link href={navLink.link}>{navLink.label}</Link>
//           </li>
//         ))}
//       </ul>
//     </Drawer>
//   );
// };

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer } from "@/components/shared";
import { useState } from "react";
import Image from "next/image";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

type NavLink = {
  label: string;
  link: string;
};

export interface MobileNavLink {
  label: string;
  link: string | NavLink[];
  icon: string;
}

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const activeClassName = (link: string) =>
    pathname === link
      ? "bg-[#FDE9D9] text-[#F47A1C]"
      : "bg-transparent text-black";

  return (
    <Drawer isOpen={isOpen} onClose={onClose} position={position}>
      <ul className="mt-12 flex flex-col gap-y-7 rounded-lg font-medium">
        {navLinks.map((navLink) => {
          const isDropdown = Array.isArray(navLink.link);

          return (
            <li key={navLink.label} className="flex flex-col">
              <div
                className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 ${isDropdown ? "hover:bg-gray-100" : activeClassName(navLink.link as string)}`}
                onClick={() => isDropdown && toggleDropdown(navLink.label)}
              >
                <div className="flex items-center gap-x-2">
                  <div className="relative h-[22px] w-[22px] rounded-md">
                    <Image
                      src={navLink.icon}
                      alt={`${navLink.label}-icon`}
                      fill
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {!isDropdown ? (
                    <Link href={navLink.link as string}>{navLink.label}</Link>
                  ) : (
                    <span>{navLink.label}</span>
                  )}
                </div>
                {isDropdown && (
                  <span className="text-sm">
                    {openDropdown === navLink.label ? (
                      <LuChevronUp size={16} fontWeight={500} />
                    ) : (
                      <LuChevronDown size={16} fontWeight={500} />
                    )}
                  </span>
                )}
              </div>

              {isDropdown && openDropdown === navLink.label && (
                <ul className="ml-6 mt-2 flex flex-col gap-y-2 border-l border-gray-300 pl-3">
                  {(navLink.link as NavLink[]).map((sublink) => (
                    <li
                      key={sublink.label}
                      className={`rounded-lg px-2 py-1 ${activeClassName(sublink.link)} `}
                    >
                      <Link
                        href={sublink.link}
                        className="block rounded-full px-4 py-1 capitalize focus-within:bg-SC-Light-orange focus-within:ring-2 focus-within:ring-SC-Orange hover:bg-SC-Light-orange focus:bg-SC-Light-orange"
                      >
                        {sublink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </Drawer>
  );
};
