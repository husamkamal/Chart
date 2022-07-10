import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const AppStyle = styled(Flex)`
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background-color: #e5e5e5;
`;
