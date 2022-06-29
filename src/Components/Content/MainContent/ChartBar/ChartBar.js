import React from "react";
import { ChartBarFill, ChartBarInner, ChartBarLabel, ChartBarSt } from "./ChartBar.style";

const ChartBar = (props) => {
    
    let  barFillHeight="0%"
    if(props.value>0){
        barFillHeight=Math.round((props.value/100)*100 )+'%'
    }
  return (
    <ChartBarSt>
      <ChartBarInner>
        <ChartBarFill style={{height:barFillHeight ,fontSize:'.5rem',fontWeight:'700'}}>{barFillHeight}</ChartBarFill>
      </ChartBarInner>
      <ChartBarLabel>{props.label}</ChartBarLabel>
    </ChartBarSt>
  );
};

export default ChartBar;