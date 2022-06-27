import styled from "styled-components";
import { Flex } from "../../Global.style";

export const Sid = styled(Flex)`
  background-color: #4c2784;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  width: 20%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;

`;
export const Ul = styled(Flex)`
  width: 100%;
  height: 40%;
  flex-direction: column;
  align-items: flex-start;
  justify-content:space-between;
  padding-bottom: 20rem;
`;
export const Li = styled(Flex)`
  flex-direction: row-reverse;
  justify-content: flex-end;
  width: 100%;
  color:#FCFCFC;
  font-family: "Tajawal";
  font-weight: 500;
  font-size: 24px;
  line-height: 20px;
  padding:.5rem 0;
  &:hover{
    cursor:pointer;
    background-color:#FCFCFC;
    color:#191919;
  }
`;
