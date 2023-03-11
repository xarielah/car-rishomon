import useSearch from "../../../hooks/use-search";

const DataResultsFor = () => {
  const { searchData } = useSearch();

  if (!searchData.term) return <></>;
  return <h2 className="font-bold">מציג תוצאות עבור "{searchData.term}":</h2>;
};

export default DataResultsFor;
