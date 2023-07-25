import ProductData from "../../data/ProductData";
import Filter from "./Filter";

const Toys = () => {
  const toyItem = ProductData().TOY_ITEMS.filter((item) => {
    return item.category === "toys";
  });
  const title = "Toys";

  return <Filter toyItem={toyItem} title={title} />;
};

export default Toys;
