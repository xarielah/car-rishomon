import LastSearches from "./last-searches/last-searchs";

const Navigation = () => {
  return (
    <nav className="py-2 md:px-4 flex justify-between bg-white full-bleed-white">
      <LastSearches />
    </nav>
  );
};

export default Navigation;
