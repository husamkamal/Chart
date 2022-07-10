import React from "react";
import DateSwitch from "./DateSwitch";
import {
  H1Date,
  ReservationsInformationDateContainer,
} from "./ReservationsInformation.style";

const ReservationsInformationDate = () => {
  return (
    <ReservationsInformationDateContainer>
      <H1Date>تاريخ الحجز</H1Date>
      <DateSwitch />
    </ReservationsInformationDateContainer>
  );
};

export default ReservationsInformationDate;
