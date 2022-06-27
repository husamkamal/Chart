import React from 'react';
import ChartBar from './ChartBar';
import MainHeaderChart from './MainHeaderChart';
import {useSelector } from "react-redux/es/exports";
import { ChartSt } from './MainContainChart.style';
import { ChartRow } from './ChartBar.style';
const MainContainChart = () => {
 
    const select=useSelector(state=>state.chartDataPoint)
    const month =useSelector(state=>state.month)
    console.log(select)
    const filter=select.filter(ele=>{
        return ele.label === month
    })
    console.log(filter, 55555555)
    return (
        <ChartSt>
            <MainHeaderChart/>
            <ChartRow>
            {filter.map((ele)=>{

                return <ChartBar value={ele.value} />
            })
            }
            </ChartRow>
        </ChartSt>
    );
}

export default MainContainChart;
