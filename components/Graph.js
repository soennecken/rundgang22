import React, { useEffect, useState, PureComponent } from "react";

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
        // console.log(data);

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
    { name: stockChartXValue[99], uv: stockChartYValue[99] },
    { name: stockChartXValue[90], uv: stockChartYValue[90] },
    { name: stockChartXValue[80], uv: stockChartYValue[80] },
    { name: stockChartXValue[70], uv: stockChartYValue[70] },
    { name: stockChartXValue[60], uv: stockChartYValue[60] },
    { name: stockChartXValue[50], uv: stockChartYValue[50] },
    { name: stockChartXValue[40], uv: stockChartYValue[40] },
    { name: stockChartXValue[30], uv: stockChartYValue[30] },
    { name: stockChartXValue[20], uv: stockChartYValue[20] },
    { name: stockChartXValue[10], uv: stockChartYValue[10] },
    { name: stockChartXValue[0], uv: stockChartYValue[0] },
  ];

  const top = Math.max(...stockChartYValue);
  const bottom = Math.min(...stockChartYValue);


  const CustomizedDot = () => {
    <svg />;
  };

  class CustomizedLabels extends PureComponent {
    render() {
      const { x, y, stroke, value } = this.props;

      return (
        <text
          x={x}
          y={y}
          dy={-5}
          dx={10}
          fill={stroke}
          color={"#c9ff00"}
          fontSize={8}
          textAnchor="left"
          stroke="#c9ff00"
        >
          {value}
        </text>
      );
    }
  }

  return (
    <div className="graphOuter">
      <div className="dataWrapper">
        <div className="dataInner">
          <p className="currentValue">{props.stockName}: </p>
        </div>
        <div className="dataInner">
          <p className="currentDate">{stockChartXValue[0]}</p>
          <p className="currentValue">
            {stockChartYValue[0]}
            {stockChartYValue[0] - stockChartYValue[1] > 0
              ? ` (+${(stockChartYValue[0] - stockChartYValue[1]).toFixed(2)})`
              : ` (${(stockChartYValue[0] - stockChartYValue[1]).toFixed(2)})`}
          </p>
        </div>
      </div>
      <LineChart
        width={300}
        height={150}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" stroke="#c9ff00" />
        <YAxis domain={[bottom, top]} stroke="#c9ff00" />
        {/* <YAxis allowDataOverflow domain={[bottom, top]} type="number" yAxisId="1" /> */}
        <Tooltip />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#c9ff00"
          dot={<CustomizedDot />}
          label={<CustomizedLabels />}
        />
      </LineChart>
    </div>
  );
};

export default Graph;
