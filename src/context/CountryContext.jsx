import { createContext, useState } from "react";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState([]);
  const [countryInfo, setCountryInfo] = useState("");
  const [more, setMore] = useState(12);
  const values = {
    countryInfo,
    country,
    setCountry,
    setCountryInfo,
    more,
    setMore,
  };
  return (
    <CountryContext.Provider value={values}>{children}</CountryContext.Provider>
  );
};

export default CountryContext;
