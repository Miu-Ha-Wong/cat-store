import ProductData from "../../data/ProductData";
import Filter from "./Filter";

const Fountains = () => {
  const toyItem = ProductData().TOY_ITEMS.filter((item) => {
    return item.category === "fountains";
  });
  const title = "Fountains & Bowls";

  return <Filter toyItem={toyItem} title={title} />;
};

export default Fountains;
