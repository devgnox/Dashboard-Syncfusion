import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ currentColor, id, type, height, width, color, data }) => {
  return (
    <SparklineComponent
      id={id}
      dataSource={data}
      height={height}
      width={width}
      fill={color}
      valueType="Numeric"
      lineWidth={1}
      border={{ color: currentColor, width: 2 }}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{visible:true, format:'${x} : ${yval}', trackLineSettings:{visible:true}}}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
