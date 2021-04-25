import React from "react";
const numberWithCommas = (x) => {
  return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const DataBoxes = (props) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="shadow-md bg-blue-100 p-10 text-center rounded">
        <h3 className="text-3xl text-blue-900 font-bold mb-4">Cases</h3>

        <div className="text-2xl mb-4">
          <span className="font-bold">New:</span>
          {numberWithCommas(props.data.NewConfirmed)}
        </div>
        <div className="text-2xl mb-4">
          <span className="font-bold">Total:</span>
          {numberWithCommas(props.data.TotalConfirmed)}
        </div>
      </div>

      <div className="shadow-md bg-blue-200 p-10 text-center rounded">
        <h3 className="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>

        <div className="text-2xl mb-4">
          <span className="font-bold">New:</span>
          {numberWithCommas(props.data.NewDeaths)}
        </div>
        <div className="text-2xl mb-4">
          <span className="font-bold">Total:</span>
          {numberWithCommas(props.data.TotalDeaths)}
        </div>
      </div>
    </div>
  );
};

export default DataBoxes;
