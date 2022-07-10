import styled from "styled-components";
import { Flex } from "../../../../Global.style";


export const ContentContainer=styled(Flex)`

    width:100%;
    background-color:red;
`
export const TableChart=styled(Flex)`
    width:100%;
    justify-content:space-between;
    @media (max-width: 600px) {
      flex-direction:column;
      height:56rem;
    }
`