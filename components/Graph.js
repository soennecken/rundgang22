import React, { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = (props) => {

  const [stockChartXValue, setStockChartXValue] = useState([]);
  const [stockChartYValue, setStockChartYValue] = useState([]);

  const fetchStock = () => {
    const API_KEY = "W4M27XSI5Z8I5Q2Y";
    let StockSymbol = props.symbol;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (var key in data["Time Series (Daily)"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
        }

        // console.log(stockChartXValuesFunction);
        setStockChartXValue(stockChartXValuesFunction);
        setStockChartYValue(stockChartYValuesFunction);
      });
  };

  useEffect(() => {
    fetchStock();
  }, []);

  const data = [
    { name: stockChartXValue[0], uv: stockChartYValue[0] },
    { name: stockChartXValue[1], uv: stockChartYValue[1] },
    { name: stockChartXValue[2], uv: stockChartYValue[2] },
    { name: stockChartXValue[3], uv: stockChartYValue[3] },
    { name: stockChartXValue[4], uv: stockChartYValue[4] },
    { name: stockChartXValue[5], uv: stockChartYValue[5] },
    { name: stockChartXValue[6], uv: stockChartYValue[6] },
    { name: stockChartXValue[7], uv: stockChartYValue[7] },
    { name: stockChartXValue[8], uv: stockChartYValue[8] },
    { name: stockChartXValue[9], uv: stockChartYValue[9] },
    { name: stockChartXValue[10], uv: stockChartYValue[10] },
    { name: stockChartXValue[11], uv: stockChartYValue[11] },
    { name: stockChartXValue[12], uv: stockChartYValue[12] },
    { name: stockChartXValue[13], uv: stockChartYValue[13] },
    { name: stockChartXValue[14], uv: stockChartYValue[14] },
    { name: stockChartXValue[15], uv: stockChartYValue[15] },
    { name: stockChartXValue[16], uv: stockChartYValue[16] },
    { name: stockChartXValue[17], uv: stockChartYValue[17] },
    { name: stockChartXValue[18], uv: stockChartYValue[18] },
    { name: stockChartXValue[19], uv: stockChartYValue[19] },
    { name: stockChartXValue[20], uv: stockChartYValue[20] },
    { name: stockChartXValue[21], uv: stockChartYValue[21] },
  ];

  return (
    <>

      <LineChart
        width={300}
        height={100}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis dataKey="uv" />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#c9ff00"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
};

export default Graph;
