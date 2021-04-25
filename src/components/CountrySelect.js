import React from "react";

const CountrySelect = (props) => {
  console.log(props);
  return (
    <select
      className="form-select mt-10 block w-full border p-3 rounded"
      onChange={(e) => {
        e.preventDefault();
        props.onUpdate({ country_id: e.target.value });
      }}
    >
      <option value="0">Select Country</option>
      {props.countries.map((value, index) => {
        return (
          <option key={index} value={value.ID}>
            {value.Country}
          </option>
        );
      })}
    </select>
  );
};
export default CountrySelect;
