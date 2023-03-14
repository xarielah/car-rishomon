import { useDispatch, useSelector } from "react-redux";
import {
  addCarSearch,
  CookieSearchHistory,
  getCurrentHistory,
} from "../lib/cookies/handle-cookies";
import {
  currentSearchData,
  resetSearchTerm,
  setSearchTerm,
  toggleHistory,
  updateCarSearches,
} from "../redux/slices/search.slice";

const useSearch = () => {
  const dispatch = useDispatch();

  const setTerm = (term: string) => dispatch(setSearchTerm({ term }));

  const addSearch = (payload: CookieSearchHistory) => {
    const history = addCarSearch(payload);
    if (!history) return;
    dispatch(updateCarSearches(history));
  };

  const resetTerm = () => dispatch(resetSearchTerm());

  const toggleShowHistory = () => dispatch(toggleHistory());

  const initializeReduxHistory = () => {
    const history = getCurrentHistory();
    dispatch(updateCarSearches(history));
  };

  const searchData = useSelector(currentSearchData);
  return {
    searchData,
    toggleShowHistory,
    setTerm,
    resetTerm,
    addSearch,
    initializeReduxHistory,
  };
};

export default useSearch;
