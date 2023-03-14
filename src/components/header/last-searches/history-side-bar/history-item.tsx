import useSearch from "../../../../hooks/use-search";
import { useRef } from "react";
import { CookieSearchHistory } from "../../../../lib/cookies/handle-cookies";
import { parseCarNumber } from "../../../../lib/utils/parse-car-number";

const HistoryItem = ({ item }: IHistoryItemProps) => {
  const { setTerm } = useSearch();
  const reSearchButton = useRef(null);

  return (
    <div className="flex flex-col gap-3 bg-white rounded-lg p-3 font-bold">
      <div className="flex justify-between">
        <span
          onClick={() =>
            reSearchButton.current &&
            (reSearchButton.current as HTMLButtonElement).focus()
          }
          className="bg-yellow-300 cursor-pointer duration-300 ease-in-out hover:scale-[1.1] pl-1 flex items-center justify-center rounded-md border-[1px] border-slate-300 shadow-md text-gray-800"
        >
          <div className="text-[.6em] ml-1 h-full p-[.2em] flex items-center text-white rounded-tr-md rounded-br-md bg-blue-600">
            IL
          </div>
          <span className="mr-[.1em]">{parseCarNumber(item.carNumber)}</span>
        </span>
        <span>{item.status ? item.carModel : "לא נמצאו תוצאות"}</span>
      </div>
      <div className="flex flex-row-reverse">
        <button
          ref={reSearchButton}
          className="bg-blue-100 focus:duration-75 focus:outline focus:outline-blue-400 hover:bg-blue-200 ease-in-out duration-300 py-2 font-bold rounded-md px-3"
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
