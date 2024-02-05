import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationSeries, AccumulationLegend,AccumulationDataLabel,AccumulationTooltip, Inject, PieSeries} from '@syncfusion/ej2-react-charts'
import React from 'react'
import { useStateContext } from '../../context/ContextProvider';
import { pieChartData} from "../../data/dummy";

const PieChart = ({width, height}) => {
  const {currentMode}=useStateContext();

  return (
    <AccumulationChartComponent
    height={height}
    id="pie-chart"
    tooltip={{ enable: true}}
    legendSettings={{ visible: true, background: 'white' }}
    background={currentMode==='Dark' ? '#33373e' :'#fff'}
  >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
    <AccumulationSeriesCollectionDirective >
        <AccumulationSeriesDirective name='Sale' xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2} dataSource={pieChartData} dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}/>
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  )
}

export default PieChart