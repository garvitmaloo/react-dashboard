import { QuickAnalyticsCardProps } from "../../types/prop_types";

export default function QuickAnalyticsCard({
  cardTitle,
  cardIcon,
  analyticValue,
  valueUnit,
  increment,
  decrement
}: QuickAnalyticsCardProps): JSX.Element {
  return (
    <div className="flex-auto rounded shadow-md p-4 w-full my-2 shadow-gray-200 dark:shadow-gray-800">
      <div className="flex justify-between mb-2">
        <h3 className="text-xl font-semibold text-gray-950 dark:text-gray-50">
          {cardTitle}
        </h3>
        <span className="flex justify-center items-center h-[35px] w-[35px] rounded-[50%] bg-gray-100 dark:bg-gray-800">
          {cardIcon}
        </span>
      </div>
      <div className="mb-3">
        <h1 className="text-3xl font-bold inline-block me-3">
          {analyticValue}
        </h1>
        {valueUnit && (
          <span className="text-gray-500 dark:text-gray-300 font-medium">
            (In {valueUnit})
          </span>
        )}
      </div>
      <div className="my-5">
        {increment ? (
          <span className="px-2 py-1 text-sm bg-green-100 rounded text-gray-950">
            <b>{increment}%</b> increment
          </span>
        ) : (
          <span className="px-2 py-1 text-sm bg-red-100 rounded text-gray-950">
            <b>{decrement}%</b> decrement
          </span>
        )}
      </div>
    </div>
  );
}
