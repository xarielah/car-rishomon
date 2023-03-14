import useSearch from "../../../../hooks/use-search";
import HistoryItem from "./history-item";
import { AiOutlineClose } from "react-icons/ai";

const SideHistory = () => {
  const { searchData, toggleShowHistory } = useSearch();

  return (
    <aside
      className={`fixed top-0 z-[100] ${
        searchData.showHistory ? "right-0" : "-right-[100%]"
      } ease-in-out duration-700 h-screen bg-slate-100 shadow-2xl w-screen md:max-w-[500px] p-12`}
    >
      <div className="flex flex-row-reverse mb-12">
        <button
          onClick={toggleShowHistory}
          className="border-2 border-transparent hover:border-slate-300 hover:bg-slate-200 active:bg-yellow-100 duration-300 ease-in-out rounded-full p-1"
        >
          <AiOutlineClose size="2em" />
        </button>
      </div>
      <h1 className="font-bold text-4xl">חיפושים אחרונים:</h1>
      <article className="flex flex-col-reverse gap-3 my-8">
        {searchData.history && searchData.history.length > 0
          ? searchData.history.map((historyItem, i) => (
              <HistoryItem item={historyItem} key={i} />
            ))
          : "No data to display"}
      </article>
    </aside>
  );
};

export default SideHistory;
