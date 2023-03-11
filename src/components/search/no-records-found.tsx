import useSearch from "../../hooks/use-search";

const NoRecordsFound = () => {
  const { searchData } = useSearch();
  return (
    <div className="flex flex-col mx-auto">
      <h1 className="font-bold text-3xl">
        לא נמצאו רכבים עבור "{searchData.term}"
      </h1>
    </div>
  );
};

export default NoRecordsFound;
