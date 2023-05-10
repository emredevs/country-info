import axios from "axios";
import React, { useContext } from "react";
import CountryContext from "../../context/CountryContext";
export default function Form() {
  const { countryInfo, setCountryInfo, setCountry } =
    useContext(CountryContext);
  const fromSubmit = (e) => {
    e.preventDefault();
    if (!countryInfo) {
      return;
    }
    axios
      .get(`https://restcountries.com/v3.1/name/${countryInfo}`)
      .then((res) => setCountry(res.data))
      .catch((err) => {
        console.error(err);
        alert("Hata: Ülke bilgisi alınamadı!");
      });
    setCountryInfo("");
  };

  return (
    <div>
      <form onSubmit={fromSubmit}>
        <label htmlFor="scroll">
          <input
            onChange={(e) => setCountryInfo(e.target.value)}
            name="scroll"
            value={countryInfo}
            placeholder="bir ülke adı giriniz"
            type="text"
          />
        </label>
      </form>
    </div>
  );
}