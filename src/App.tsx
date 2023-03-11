import { useEffect } from "react";
import MainLayout from "./components/layout/main-layout";
import DataResultsFor from "./components/main/data-display/data-results-for";
import HandleDataSearch from "./components/main/data-display/handle-data-search";
import HomeMessage from "./components/main/home-message";
import SearchBar from "./components/main/search-bar/search-bar";
import useSearch from "./hooks/use-search";
import { initializeCookie } from "./lib/cookies/handle-cookies";

function App() {
  const { searchData } = useSearch();
  const { initializeReduxHistory } = useSearch();

  useEffect(() => {
    initializeCookie();
    initializeReduxHistory();
  }, []);

  return (
    <MainLayout>
      <SearchBar />
      <section className="flex flex-col gap-6 my-6">
        <DataResultsFor />
        <div className="flex justify-between items-center">
          {searchData.term ? <HandleDataSearch /> : <HomeMessage />}
        </div>
      </section>
    </MainLayout>
  );
}

export default App;
