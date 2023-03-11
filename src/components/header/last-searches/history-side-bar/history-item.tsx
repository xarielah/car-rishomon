import useSearch from "../../../../hooks/use-search";
import { CookieSearchHistory } from "../../../../lib/cookies/handle-cookies";

const HistoryItem = ({ item }: IHistoryItemProps) => {
  const { setTerm } = useSearch();

  return (
    <div className="flex flex-col gap-3 bg-white rounded-lg p-3 font-bold">
      <div className="flex justify-between">
        <span>{item.carNumber}</span>
        <span>{item.status ? item.carModel : "לא נמצאו תוצאות"}</span>
      </div>
      <div className="flex flex-row-reverse">
        <button
          className="bg-blue-100 hover:bg-blue-200 ease-in-out duration-300 py-2 font-bold rounded-md px-3"
          onClick={() => setTerm(item.carNumber)}
        >
          חיפוש חוזר
        </button>
      </div>
    </div>
  );
};

interface IHistoryItemProps {
  item: CookieSearchHistory;
}

export default HistoryItem;
