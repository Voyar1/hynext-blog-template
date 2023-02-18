import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>HYNEXT</p>
      <div className={styles.footerInfo}>
        <p className={styles.footerInfoTitle}>Do u have any doubts?</p>
        <span>Contact us at:</span>
        <p className={styles.footerInfoEmail}>hynext@gmail.com</p>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
