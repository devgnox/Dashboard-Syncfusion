import React from "react";
import { ChartsHeader } from "../../components";
import AreaChart from "../../components/Charts/AreaChart";

const Area = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <ChartsHeader category="Area" title="Inflation Rate in Percentag" />
      <div className="w-full">
        <AreaChart height="420px" width="800px" />
      </div>
    </div>
  );
};

export default Area;
