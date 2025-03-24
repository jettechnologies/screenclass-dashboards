import { mulish } from "@/components/shared/fonts";

export const DesktopGuardianSkeleton = () => (
  <table className={`hidden md:table ${mulish.className} w-[95%]`}>
    <thead>
      <tr className="border-b border-b-[#DFE0EB]">
        <th className="w-[17.5%] pb-2 font-semibold">Photo</th>
        <th className="w-[30%] pb-2 text-left font-semibold">Name</th>
        <th className="w-[17.5%] pb-2 text-left font-semibold">
          Registration No
        </th>
        <th className="w-[17.5%] pb-2 text-left font-semibold">Class</th>
        <th className="w-[17.5%]"></th>
      </tr>
    </thead>
    <tbody>
      {Array.from({ length: 5 }).map((_, index) => (
        <tr key={index} className="border-b border-b-[#DFE0EB]">
          <td className="w-[17.5%] py-4">
            <div className="mx-auto h-10 w-10 animate-pulse rounded-full bg-gray-200"></div>
          </td>
          <td className="w-[30%] py-4">
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
          </td>
          <td className="w-[17.5%] py-4">
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
          </td>
          <td className="w-[17.5%] py-4">
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
          </td>
          <td className="w-[17.5%] py-4">
            <div className="flex justify-end pr-9">
              <div className="h-6 w-6 animate-pulse rounded bg-gray-200"></div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Skeleton loader for mobile
export const MobileGuardianSkeleton = () => (
  <table className={`table md:hidden ${mulish.className} w-[95%]`}>
    <thead>
      <tr className="border-b border-b-[#DFE0EB]">
        <th className="w-[50%] pb-2 pl-5 text-left font-semibold">Name</th>
        <th className="w-[50%] pb-2 pl-5 text-left font-semibold">
          Registration No
        </th>
      </tr>
    </thead>
    <tbody>
      {Array.from({ length: 5 }).map((_, index) => (
        <tr key={index} className="border-b border-b-[#DFE0EB]">
          <td className="w-[50%] py-4 pl-5">
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
          </td>
          <td className="w-[50%] py-4 pl-5">
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
