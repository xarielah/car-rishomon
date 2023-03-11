import { useEffect, useState } from "react";
import useData from "../../../hooks/use-data";
import useSearch from "../../../hooks/use-search";
import { Car } from "../../../redux/slices/data.slice";
import searchCar from "../../../service/fetcher";
import NoRecordsFound from "../../search/no-records-found";
import SearchError from "../../search/search-error";
import Searching from "../../search/searching";
import DataContainer from "./data-container";

const HandleDataSearch = () => {
  const { searchData, addSearch } = useSearch();
  const { setCarData } = useData();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const searchAsyncAction = async () => {
      setNotFound(false);
      setError(false);
      setLoading(true);

      try {
        const response = await searchCar(searchData.term ?? "").finally(() =>
          setLoading(false)
        );

        const data = response.data.result;

        if (
          data.total === 0 ||
          (data.records[0] as Car).mispar_rechev + "" !== searchData.term
        ) {
          setNotFound(true);
          addSearch({ carNumber: searchData.term!, status: false });
        }

        setCarData(data.records[0]);
        addSearch({
          carNumber: searchData.term!,
          status: true,
          carModel: (data.records[0] as Car).tozeret_nm,
        });
      } catch (error) {
        setError(true);
        console.error(error);
      }
    };

    if (searchData.term) searchAsyncAction();
  }, [searchData.term]);

  if (loading) return <Searching />;
  if (notFound) return <NoRecordsFound />;
  if (error) return <SearchError />;
  return <DataContainer />;
};

export default HandleDataSearch;
