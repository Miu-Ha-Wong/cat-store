import ProductData from "../../data/ProductData";

import Filter from "./Filter";

const Apparel = () => {
  const toyItem = ProductData().TOY_ITEMS.filter((item) => {
    return item.category === "apparel";
  });
  const title = "Apparel";

  return (
    <>
      <Filter toyItem={toyItem} title={title} />
    </>
  );
};

export default Apparel;
