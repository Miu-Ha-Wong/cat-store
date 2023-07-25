import styles from "./BackGroundDescription.module.css";

const BackGroundDescription = () => {
  return (
    <div className={styles.description}>
      <p>
        <span className={styles.webTitle}>Cat's Playland</span>
        <span className={styles.webSlogan}>
          Illuminate the Cat's World, Creating an Exclusive Playground!
        </span>
      </p>
    </div>
  );
};

export default BackGroundDescription;
