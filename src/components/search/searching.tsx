import SearchAnimation from "./search-animation";

const Searching = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <SearchAnimation />
      <div className="text-4xl font-bold">מחפש רכבים...</div>
    </div>
  );
};

export default Searching;
