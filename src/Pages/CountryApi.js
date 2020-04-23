import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCountry } from "../Redux/Actions/ActionCountry";

const CountryApi = () => {
  const countryState = useSelector((state) => state.getCountry.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry());
  }, []);
  //   console.log(countryState);

  return (
    <div>
      <h1>CountryApi</h1>
      {countryState.map((item, index) => (
        <li key={index}>
          {item.id}. {item.country}
        </li>
      ))}
    </div>
  );
};

export default CountryApi;
