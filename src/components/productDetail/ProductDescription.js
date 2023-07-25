import styles from "./ProductDescription.module.css";

const ProductDescription = (props) => {
  const { feature, description, id } = props;
  const features = feature.map((feature) => {
    return <li key={feature}>{feature}</li>;
  });
  return (
    <div className={styles.container}>
      <p className={styles.descriptionTitle}>Description</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.descriptionTitle}> Features:</p>
      <ul className={styles.description}>{features}</ul>
    </div>
  );
};
export default ProductDescription;
