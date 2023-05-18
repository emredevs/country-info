import React, { useContext } from "react";
import CountryContext from "../../context/CountryContext";
import styles from "./ContainerList.module.css";
import { Link } from "react-router-dom";
export default function List() {
  const { country, setMore } = useContext(CountryContext);

  return (
    <div className={styles.ContainerList}>
      {country.map((country, index) => (
        <div key={index} className={styles.CountryBox}>
          <div>
            <img src={country.flags.png} alt="" />
          </div>
          <div className={styles.countryInfo}>
            <div>{country.name.common}</div>
            <div>{country.capital}</div>
            <div className={styles.detail}>
              <Link to={`/country/${country.name.common}`}>Detail</Link>
            </div>
          </div>
        </div>
      ))}
      <button
        className={styles.moreBtn}
        onClick={() => setMore((prev) => prev + 8)}
      >
        More...
      </button>
    </div>
  );
}
