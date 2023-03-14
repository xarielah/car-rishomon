import useSearch from "../../hooks/use-search";
import { parseCarNumber } from "../../lib/utils/parse-car-number";

const NoRecordsFound = () => {
  const { searchData } = useSearch();
  return (
    <div className="flex flex-col mx-auto">
      <h1 className="font-bold text-3xl">
        לא נמצאו רכבים עבור "
        <span className="text-gray-800">
          {parseCarNumber(searchData.term ?? "")}
        </span>
        "
      </h1>
    </div>
  );
};

export default NoRecordsFound;
