import React from "react";
import { ChartsHeader } from "../../components";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  Zoom,
  Crosshair,
  DateTime,
  Logarithmic,
} from "@syncfusion/ej2-react-charts";
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";

function filterValue(value) {
  if (value.x >= new Date('2017,1,1')) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}

const financialData = financialChartData.filter(filterValue);

const Financial = () => {
  const {currentMode}=useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <ChartsHeader category="Financial" title="AAPLE Historical" />
      <div className="w-full">
        <ChartComponent
          width="420px"
          height="800px"
          id="financial-chart"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          tooltip={{ enable: true, shared: true}}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373e" : "#fff"}
        >
            <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={financialData}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
