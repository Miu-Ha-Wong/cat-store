import styles from "./ProductPhotos.module.css";
import { useState } from "react";

const ProductPhotos = (props) => {
  const [currentPicIndex, setCurrentPicIndex] = useState(0);

  const { detailImg } = props;

  const sImg = [];
  for (let index = 0; index < detailImg.length; index++) {
    sImg.push(
      <img
        key={`img-${index}`}
        className={styles.smallPicture}
        src={`../toy_items/${detailImg[index]}`}
        onClick={() => nextImage(index)}
      />
    );
  }

  const nextImage = (index) => {
    setCurrentPicIndex(index);
  };

  return (
    <div className={styles.left}>
      <div className={styles["bigPicture_container"]}>
        <img
          src={`../toy_items/${detailImg[currentPicIndex]}`}
          alt="Big cat photo."
        />
      </div>
      <div className={styles.sImgContainer}>{sImg}</div>
    </div>
  );
};

export default ProductPhotos;
