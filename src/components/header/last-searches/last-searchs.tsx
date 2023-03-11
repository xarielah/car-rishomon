import useSearch from "../../../hooks/use-search";
import Button from "../../ui-elements/button";

const LastSearches = () => {
  const { toggleShowHistory } = useSearch();

  return (
    <div>
      <Button onClick={toggleShowHistory}>חיפושים אחרונים</Button>
    </div>
  );
};

export default LastSearches;
