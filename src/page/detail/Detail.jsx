import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [country, setCountry] = useState({});
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${id}`)
      .then((res) => setCountry(res.data[0]));
  }, [id]);

  if (!country.name) {
    return <div>Loading...</div>;
  }
  console.log(Object.values(country.currencies)[0].name);
  console.log(Object.values(country.currencies)[0].symbol);
  console.log(Object.values(country.languages)[0]);
  return (
    <div>
      <Header />
      <div>
        <img src={country.flags.png} alt="" />
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
      {/* <iframe src={country.maps?.googleMaps} frameborder="0"></iframe> */}
      <Link to={"/"}>Home</Link>
    </div>
  );
}
