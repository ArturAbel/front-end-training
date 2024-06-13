import { Country } from "./Country";

export const Display = ({ data }) => {
  return (
    <>
      {data.map((country) => (
        <Country key={country} country={country} />
      ))}
    </>
  );
};
