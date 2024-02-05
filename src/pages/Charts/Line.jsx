import React from "react";
import { ChartsHeader,LineChart } from "../../components";
import { useStateContext } from "../../context/ContextProvider";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
    <ChartsHeader category="Area" title="Inflation Rate" />
    <div className="w-full">
        <LineChart height='420px' width='800px' />
      </div>
    </div>
  );
};

export default Line;
