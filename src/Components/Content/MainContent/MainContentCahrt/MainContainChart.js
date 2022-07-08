import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Flex } from "../../../../Global.style";
import MainHeaderChart from "../MainHeaderChart/MainHeaderChart";

const data = [
  { name: " الرابع", حجز: 100 },
  { name: "الثالث", حجز: 63 },
  { name: "الثاني", حجز: 44 },
  { name: "الأول", حجز: 13 },
];

const RenderBarChart = () => {
  return (
    <Flex
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "start",
        width: "360px",
      }}
    >
      <MainHeaderChart />
      <BarChart
        style={{ backgroundColor: "#F6F6F6" }}
        width={360}
        height={365}
        data={data}
      >
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis
          // tickFormatter={(10, 3)}
          // minTickGap={10}
          // tickCount={"10"}
          padding={{ top: 10 }}
          tickMargin={25}
          ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          width={50}
          // range={[10, 20, 30, 40, 50, 60, 70, 80, 90]}
        />
        <Tooltip
          separator=" "
          labelStyle={{ display: "none" }}
          itemStyle={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-around",
            margin: "",
            border: "none",
            color: "#FCFCFC",
          }}
          contentStyle={{
            width: 65,
            height: 30,
            backgroundColor: "#4C2784",
            borderRadius: 20,
            border: "none",
          }}
          wrapperStyle={{ width: 100 }}
        />

        <Bar
          radius={[30, 30, 0, 0]}
          dataKey="حجز"
          fill="#BCABFF"
          barSize={22}
        />
      </BarChart>
    </Flex>
  );
};

export default RenderBarChart;
