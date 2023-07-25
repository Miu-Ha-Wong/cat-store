import { useParams } from "react-router-dom";
import ProductData from "../../data/ProductData";
import styles from "./ProductDetail.module.css";
import ProductPhotos from "./ProductPhotos";
import ProductButton from "./ProductButton";
import ProductDescription from "./ProductDescription";
import YouMayLikeProduct from "./you_may_like/YouMayLikeProduct";

const ProductDetail = () => {
  const { productId } = useParams();

  const product = ProductData().TOY_ITEMS.filter((product) => {
    return product.id === productId;
  })[0];
  const { id, name, price, description, feature, detailImg, image } = product;

  return (
    <>
      <div className={styles.centerContainer}>
        <div className={styles.container}>
          <ProductPhotos detailImg={detailImg} />
          <div className={styles.right}>
            <div className={styles.titleContainer}>
              <div className={styles.title}>{name}</div>
              <div className={styles.price}>$ {price}</div>
              <ProductButton id={id} name={name} price={price} image={image} />
            </div>

            <ProductDescription
              id={id}
              feature={feature}
              description={description}
            />
          </div>
        </div>
      </div>
      <YouMayLikeProduct />
    </>
  );
};

export default ProductDetail;
