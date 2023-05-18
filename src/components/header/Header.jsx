import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
export default function Header({ children }) {
  return (
    <div className={styles.headerContainer}>
      <div>
        <Link className={styles.linkHome} to={"/"}>
          Country Viki...
        </Link>
      </div>
      {children}
    </div>
  );
}
