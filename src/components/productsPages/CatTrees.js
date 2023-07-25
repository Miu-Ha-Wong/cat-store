import ProductData from "../../data/ProductData";
import Filter from "./Filter";

const CatTrees = () => {
  const toyItem = ProductData().TOY_ITEMS.filter((item) => {
    return item.category === "catTrees";
  });
  const title = "Cat Trees";
  return <Filter toyItem={toyItem} title={title} />;
};

export default CatTrees;
