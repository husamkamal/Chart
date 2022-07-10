import styled from "styled-components";
import { Flex } from "../../../../Global.style";

export const ReservationsInformationContainer = styled(Flex)`
  width: 100%;
  justify-content: space-around;
  height: 7rem;
  /* margin-top:1rem; */
  background: #f6f6f6;
  border-radius: 10px;
`;
export const ReservationsInformationDateContainer = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
`;
export const H1Date = styled.h1`
  font-family: "Tajawal";
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #191919;
`;
export const RowDiv = styled(Flex)`
  flex-direction: column;
  /* margin: 0 1rem; */
`;
export const BookingStatusContainer = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
`;
export const SearchBookingContainer = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
`;
export const SearchStyle = styled(Flex)`
  width: 279px;
  height: 50px;
  background: #fcfcfc;
  border: 1px solid #dddddd;
  border-radius: 10px;
  flex-direction: row-reverse;
  justify-content: space-around;
`;
export const PdfStyle = styled(Flex)`
  width: 135px;
  height: 50px;
  background: #fcfcfc;
  border: 1px solid #dddddd;
  border-radius: 10px;
  /* margin-top: 2.5rem; */
`;
