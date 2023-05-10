import React, { useContext, useEffect } from "react";
import axios from "axios";
import CountryContext from "../context/CountryContext";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";
export default function Home() {
  const { country, setCountry, more } = useContext(CountryContext);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountry(res.data.slice(0, more)));
  }, [more]);
  console.log(country);
  return (
    <div>
      <Header>
        <Form />
      </Header>
      <List />
    </div>
  );
}
