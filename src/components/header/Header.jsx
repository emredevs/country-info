import React from "react";
import styles from "./styles.module.css";
export default function Header({ children }) {
  return (
    <div className={styles.headerContainer}>
      <dir>Country Viki</dir>
      {children}
    </div>
  );
}
