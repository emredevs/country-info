import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import axios from "axios";
import styles from "./styles.module.css";

export default function Detail() {
  const { id } = useParams();
  const [country, setCountry] = useState({});
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${id}`)
      .then((res) => setCountry(res.data[0]));
  }, [id]);

  if (!country?.name) {
    return <div>Loading...</div>;
  }
  console.log(Object.values(country.currencies)[0].name);
  console.log(Object.values(country.currencies)[0].symbol);
  console.log(Object.values(country.languages)[0]);
  console.log(country.maps);
  // <iframe
  //   src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6779444.483731522!2d67.7034312!3d33.93403835000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16eb6f8ff026d%3A0xf3b5460dbe96da78!${country.name.common}!5e0!3m2!1str!2str!4v1683747286202!5m2!1str!2str`}
  //   width="600"
  //   height="450"
  //   style="border:0;"
  //   allowfullscreen=""
  //   loading="lazy"
  //   referrerpolicy="no-referrer-when-downgrade"
  // ></iframe>;
  //  {/* <iframe
  //         src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6779444.483731522!2d${country.latlng[0]}!3d${country.latlng[1]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16eb6f8ff026d%3A0xf3b5460dbe96da78!${country.name.common}!5e0!3m2!1str!2str!4v1683747286202!5m2!1str!2str`}
  //         width="600"
  //         height="450"
  //         allowfullscreen=""
  //         loading="lazy"
  //         referrerpolicy="no-referrer-when-downgrade"
  //       ></iframe> */}
  return (
    <div>
      <Header>
        <Link className={styles.linkHome} to={"/"}>
          Home
        </Link>
      </Header>
      <div className={styles.deatilInfo}>
        <div className={styles.detailBox}>
          <div>
            <img className={styles.flags} src={country.flags.png} alt="" />
          </div>
          <div>Name of country: {country.name.common}</div>
          <div>Capital: {country.capital}</div>
          <div>Traffic Flow Direction: {country.car?.side}</div>
          <div>Continent: {country.region}</div>
          <div>
            Currencies: {Object.values(country.currencies)[0].name} Symbol:{" "}
            {Object.values(country.currencies)[0].symbol}
          </div>
          {/* <div>
          Currencies: {country.currencies?.FOK?.name} Symbol:{" "}
          {country.currencies?.FOK?.symbol}
        </div> */}
          <div>
            Languages: {Object.values(country.languages)[0]} /{" "}
            {Object.values(country.languages)[1]}
          </div>
          <div>Population: {country.population}</div>
          <div>{country.timezones}</div>
        </div>

        {country.coatOfArms.svg ? (
          <div className={styles.detailBox}>
            <img
              className={styles.coatOfArms}
              src={country.coatOfArms.svg}
              alt=""
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
