import React from "react";
import {
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";
import { LinePrimaryXAxis,LinePrimaryYAxis, lineCustomSeries } from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";

const LineChart = ({width, height,}) => {
  const {currentMode}=useStateContext();

  return (
    <ChartComponent
      width={width}
      height={height}
      id="line-chart"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
      background={currentMode==='Dark' ? '#33373e' :'#fff'}
    >
      <Inject services={[Legend, Tooltip, DateTime, LineSeries]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
