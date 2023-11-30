import React, { useState } from "react";
import Chart from "react-chart-js";

const BarCharts = () => {
  const [data, setData] = useState([
    {
      name: "Apple",
      value: 100,
    },
    {
      name: "Google",
      value: 200,
    },
    {
      name: "Microsoft",
      value: 300,
    },
  ]);

  return (
    <div>
      <Chart
        type="bar"
        data={data}
        options={{
          title: "Bar Chart",
          labels: ["Name", "Value"],
        }}
      />
    </div>
  );
};

export default BarCharts;
