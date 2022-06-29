import styled from "styled-components";
import { Flex } from "../../../../Global.style";

export const Header = styled(Flex)`
    width:100%;
    justify-content:space-between;
    margin-top: 1rem;
`;
export const HeaderDescription = styled(Flex)`
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-around;
    height:5rem;
`;
export const HeaderPara = styled.p`
  font-family: "Tajawal";
  font-weight: 700;
  font-size: 21px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #fec060;
`;
export const H1 = styled.h1`
  font-family: "Tajawal";
  font-weight: 700;
  font-size: 21px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #191919;
`;
export const Logo=styled(Flex)`
    justify-content:space-between;
    width:12.5%
`

