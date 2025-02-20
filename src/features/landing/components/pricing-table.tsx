import { PricingsType } from "@/utils";

export const PricingTable = ({ pricings }: { pricings: PricingsType[] }) => {
  return (
    <div className="relative overflow-x-auto rounded-t-lg shadow-md scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-SC-Bland">
      <table className="w-full border-collapse text-left text-xs font-normal text-black md:text-base rtl:text-right">
        {/* Table Header */}
        <thead className="text-white">
          <tr>
            <th className="w-[284px] bg-[#0767ae] px-6 py-3 text-xs md:text-lg">
              Solution
            </th>
            <th className="w-[284px] bg-[#c9ecff] px-6 py-3 text-xs text-black md:text-lg">
              Starter Plan
            </th>
            <th className="w-[284px] bg-[#0767ae] px-6 py-3 text-xs md:text-lg">
              Pro Plan
            </th>
            <th className="w-[284px] bg-[#c9ecff] px-6 py-3 text-xs text-black lg:text-lg">
              Enterprise Plan
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {pricings.map((row, index) => (
            <tr
              key={index}
              className="text-xs font-normal text-black md:text-base"
            >
              <td className="bg-[#c9ecff] px-6 py-4 font-medium">
                {row.solution}
              </td>
              <td className="bg-[#d9d9d9] px-6 py-4">{row.starter}</td>
              <td className="bg-[#c9ecff] px-6 py-4">{row.pro}</td>
              <td className="bg-[#d9d9d9] px-6 py-4">{row.enterprise}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
