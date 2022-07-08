// import React from 'react';
// import ChartBar from '../ChartBar/ChartBar';

// import {useSelector } from "react-redux/es/exports";

// import MainHeaderChart from '../MainHeaderChart/MainHeaderChart';
// import { ChartSt } from './MainContainChart.style';
// import { ChartRow } from '../ChartBar/ChartBar.style';
// const MainContainChart = () => {

//     const select=useSelector(state => state.Month)
//     const month =useSelector(state=>state.month)
//     console.log(select)
//     const filter=select.chartDataPoint.filter(ele=>{
//         return ele.label === month
//     })
//     console.log(filter, 55555555)
//     return (
//         <ChartSt style={{height:'27rem',marginTop:'3rem',width:'20rem'}} >
//             <MainHeaderChart/>
//             <ChartRow>
//             {filter.map((ele)=>{

//                 return <ChartBar value={ele.value} />
//             })
//             }
//             </ChartRow>
//         </ChartSt>
//     );
// }

// export default MainContainChart;
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { Flex } from "../../../../Global.style";
import MainHeaderChart from "../MainHeaderChart/MainHeaderChart";
// import { Months } from "../../Assests";
// import { FlexBox, Typography } from "../../Global.Styles";
// import { MonthsList, Option } from "../test/style";
// import { ResrvationNumBox } from "./style";
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
        width:'360px'
      }}
    >
      {/* <ResrvationNumBox>
        <Typography
          style={{ margin: 17 }}
          fontWeight={"700"}
          fontSize={"21"}
          color={"#191919"}
        >
          عدد الحجوزات
        </Typography>
        <MonthsList style={{ width: 120, height: 38, margin: 17 }}>
          {Months.map((item) => {
            return (
              <Option key={item} value={item}>
                {item}
              </Option>
            );
          })}
        </MonthsList>
      </ResrvationNumBox> */}
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
