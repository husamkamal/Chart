import styled from "styled-components";
import { Flex } from "../../Global.style";

export const Sid = styled(Flex)`
  background-color: #4c2784;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 600px) {
    /* display:none; */
    /* width:100; */
  }
`;
export const Ul = styled(Flex)`
  width: 100%;
  height: 60%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  list-style: none;
`;
export const Li = styled.li((props) => ({
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "flex-end",
  width: "100%",
  paddingLeft: "1rem",
  color: "#FCFCFC",
  fontFamily: "Tajawal",
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "20px",
  padding: ".5rem 0",
  backgroundColor: props.isActive ? "black" : "",
}));
export const ImgDiv = styled(Flex)`
  height: 20%;
  width: 100%;
`;
