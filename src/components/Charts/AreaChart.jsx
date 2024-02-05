import React from 'react'
import { useStateContext } from '../../context/ContextProvider';
import { ChartComponent,Inject, DateTime, Legend, SplineAreaSeries, SeriesCollectionDirective, SeriesDirective, SplineSeries } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries,areaPrimaryXAxis, areaPrimaryYAxis } from "../../data/dummy";

const AreaChart = ({width, height}) => {
  const {currentMode}=useStateContext();

  return (
    <ChartComponent
      width={width}
      height={height}
      id="area-chart"
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
      background={currentMode==='Dark' ? '#33373e' :'#fff'}
    >
      <Inject services={[Legend, DateTime, SplineAreaSeries]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default AreaChart