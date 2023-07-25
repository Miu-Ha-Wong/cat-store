import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.centerContainer}>
      <footer className={styles.footerContainer}>
        <div className={styles.container}>
          <div className={styles.about}>
            <div className={styles.title}>About</div>
            <div className={styles.aboutContent}>
              Since 2023 we have been delivering excellence in product
              development, support & updates for frictionless shopping
              experiences.
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.title}>Service Center</div>
            <ul className={styles.content}>
              <li>Shipping policy</li>
              <li>Return policy</li>
              <li>Privacy policy</li>
              <li>Terms of service</li>
            </ul>
          </div>

          <div className={styles.info}>
            <div className={styles.title}>Company Info</div>
            <ul className={styles.content}>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Customer Reviews</li>
            </ul>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.copyRight}>
            © 2023 Mia • Front End • Developer
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
