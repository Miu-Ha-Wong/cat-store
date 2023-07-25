import { useSelector } from "react-redux";
import Filter from "./Filter";

const Search = () => {
  const foundItems = useSelector((state) => state.cart.searchItem);
  const title = "Search";

  return <Filter key={foundItems} toyItem={foundItems} title={title} />;
};

export default Search;
