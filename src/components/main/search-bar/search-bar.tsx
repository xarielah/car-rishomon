import { ChangeEvent, useState, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useSearch from "../../../hooks/use-search";

const SearchBar = () => {
  const { setTerm } = useSearch();
  const inputRef = useRef(null);

  const [carNumber, setCarNumber] = useState<string>("");
  const [fieldError, setFieldError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!value || value === "") {
      searchAction("");
      setCarNumber(value);
      return;
    }
    if (Number.isInteger(+value) && value.length <= 8)
      return setCarNumber(event.target.value);
  };

  const searchAction = (term: string) => setTerm(term);

  const submitAction = () => {
    setFieldError("");
    if (!carNumber || carNumber === "") {
      searchAction("");
      setFieldError("שגיאה!: מספר רכב לא יכול להישאר ריק.");
      return;
    }
    if (carNumber.length < 7)
      return setFieldError(
        "שגיאה!: מספר רכב אינו תקין, חייב להיות בין 7 ל 8 ספרות"
      );

    searchAction(carNumber);
  };

  const handleEnterSubmit = (event: KeyboardEvent) => {
    if (event.key === "Enter") return submitAction();
  };

  document.addEventListener("keypress", handleEnterSubmit);

  return (
    <section className="flex justify-center flex-col items-center gap-3">
      <div className="flex items-center w-full pl-5 pr-12 justify-between bg-white drop-shadow-xl border-2 text-xl max-w-lg border-gray-800/20 rounded-full p-1">
        <input
          ref={inputRef}
          value={carNumber}
          onChange={handleChange}
          type="text"
          placeholder="מספר רכב לחיפוש..."
          className="w-full focus:outline-none"
        />
        <button
          onClick={submitAction}
          className="cursor-pointer rounded-full duration-300 ease-in-out hover:bg-slate-100 border-2 border-transparent hover:border-slate-200 p-2"
        >
          <BsSearch size={"1.5em"} color="#aaa" />
        </button>
      </div>
      {fieldError ? (
        <span className="font-bold text-red-600">{fieldError}</span>
      ) : (
        ""
      )}
    </section>
  );
};

export default SearchBar;
