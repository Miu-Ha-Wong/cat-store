import styles from "./Feature.module.css";
import feature_diverse from "../../../assets/feature_diverse.jpg";
import feature_safety from "../../../assets/feature_safety.jpg";
import feature_interaction from "../../../assets/feature_interaction.jpg";
import { Fragment } from "react";

const Feature = () => {
  return (
    <div className={styles.centerContainer}>
      <div className={styles.container}>
        <div className={styles.featureContainer}>
          <div className={styles.diverse}>
            <div className={styles.overlay}>
              <span className={styles.title}>Wide variety cat toys</span>
              <span>
                Diverse selection of cat toys tailored to your cat's
                preferences.
              </span>
            </div>
            <img
              className={styles.imgs}
              src={feature_diverse}
              alt="A Cat with a cat tree!"
            />
          </div>
          <button>Variety</button>
        </div>

        <div className={styles.featureContainer}>
          <div className={styles.safety}>
            <div className={styles.overlay}>
              <span className={styles.title}>High-quality and safe</span>
              <span>Premium quality cat toys for safety and durability.</span>
            </div>
            <img
              className={styles.imgs}
              src={feature_safety}
              alt="A Cat with a cat bed!"
            />
          </div>
          <button>Safety</button>
        </div>

        <div className={styles.featureContainer}>
          <div className={styles.interaction}>
            <div className={styles.overlay}>
              <span className={styles.title}>Promote interaction</span>
              <span>
                Engage your cat with interactive play for physical and mental
                stimulation.
              </span>
            </div>
            <img
              className={styles.imgs}
              src={feature_interaction}
              alt="A Cat with a cat toy!"
            />
          </div>
          <button>Interaction</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
