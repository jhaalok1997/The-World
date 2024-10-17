import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { Countrycard } from "../components/layout/Countrycard.jsx";
//import { SearchFilter } from "../components/UI/SerachFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;



  return (
    <section className="country-section">

      <ul className="grid grid-four-cols">
        {countries.map((curCountry, index) => {
         
          return <Countrycard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};