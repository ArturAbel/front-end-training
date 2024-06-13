import { useEffect, useState } from "react";
import { Display } from "./Display";
import { Input } from "./Input";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const names = response.data.map((country) => country.name.common);
      setData(names);
      setFilteredData(names);
    } catch {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const filterCountries = (searchTerm) => {
    const filtered = data.filter((country) =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <Input onFilter={filterCountries} />
      <Display data={filteredData} />
    </>
  );
}

export default App;
