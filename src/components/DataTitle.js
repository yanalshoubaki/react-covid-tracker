import React from "react";
import moment from "moment";
const timestamp = (props) => {
  return moment(props.dataDate).format("MMMM Do YYYY, h:mm:ss a");
};
const DataTitle = (props) => {
  console.log(props);
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{props.text}</h2>
      <div className="text-2xl mt-4 mb-10">{timestamp(props)}</div>
    </div>
  );
};
export default DataTitle;
