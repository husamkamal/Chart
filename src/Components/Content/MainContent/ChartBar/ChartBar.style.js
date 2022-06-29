import styled from "styled-components";
import { Flex } from "../../../../Global.style";


export const ChartBarSt=styled(Flex)`
    flex-direction: column;
    height: 100%;
    width: 1rem;
`
export const ChartBarInner=styled(Flex)`
    height: 100%;
    width: 100%;
    border: 1px solid #313131;
    border-radius: 12px;
    background-color: #c3b4f3;
    overflow: hidden;
    flex-direction: column;
    justify-content: flex-end;
`
export const ChartBarFill=styled.div`
     background-color: #4826b9;
    width: 100%;
    transition: all 0.3s ease-out;
`
export const ChartBarLabel=styled.div`
    font-weight: bold;
    font-size: 0.5rem;
    text-align: center;
`
export const  ChartRow =styled(Flex)`
    width:100%;
    height:80%;
    justify-content: space-around;

`