import styled from "styled-components";
import { Flex } from "../../../../Global.style";

export const Information = styled(Flex)`
  width: 53rem;
  /* background-color: red; */
  justify-content: space-between;
  align-items: flex-start;
`;
export const UserInformation = styled(Flex)`
  box-sizing: border-box;
  width: 416px;
  height: 500px;
  background: #f6f6f6;
  border: 1px solid #dddddd;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding-right: 1rem;
  box-sizing: border-box;
`;
export const CarInformation = styled(Flex)`
  min-width: 400px;
  flex-direction: column;
  justify-content: space-between;
  height: 740px;
  align-items:flex-start;
`;
export const Car = styled(Flex)`
  width: 416px;
  height: 316px;
  flex-direction: column;
  justify-content: space-around;
  background: #f6f6f6;
  border: 1px solid #dddddd;
  border-radius: 10px;
`;
export const CarOption = styled(Flex)`
  width: 416px;
  height: 328px;
  flex-direction: column;
  justify-content: space-around;
  background: #f6f6f6;
  border: 1px solid #dddddd;
  border-radius: 10px;
`;
export const InputConteaner = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  height: 3rem;
  justify-content: space-between;
  /* background-color:red; */
`;
export const Label = styled.label`
  font-family: "Tajawal";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #191919;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #dddddd;
  /* transform: rotate(-180deg); */
  outline: none;
  background: none;
  width: 100%;
`;
export const Serves = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
`;
export const ServesList = styled(Flex)`
  width: 100%;
`;
export const Pedestals = styled(Flex)`
  width: 50%;
  /* background-color: red; */
  justify-content: flex-start;
`;
export const CarButton = styled.button`
  width: 152px;
  height: 50px;
  background: #4c2784;
  border-radius: 5px;
  border:none;
  cursor: pointer;
  margin-bottom:1rem;
  box-sizing:border-box;
`;
