import { ChartComponent, SeriesCollectionDirective, Inject, SeriesDirective, Legend, BarSeries, DataLabel, Tooltip, Category, ColumnSeries } from '@syncfusion/ej2-react-charts'
import React from 'react'
import { barPrimaryXAxis, barPrimaryYAxis,barCustomSeries } from "../../data/dummy";
import { useStateContext } from '../../context/ContextProvider';

const BarChart = ({width, height}) => {
  const {currentMode}=useStateContext();
  return (
    <ChartComponent
      width={width}
      height={height}
      id="bar-chart"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
      legendSettings={{background:'white'}}
      background={currentMode==='Dark' ? '#33373e' :'#fff'}
    >
      <SeriesCollectionDirective >
        {barCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
          ))}
      </SeriesCollectionDirective>
          <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
    </ChartComponent>
  )
}

export default BarChart