import { Container } from "@mui/material";
import React from "react";
import { H1Date } from "../ReservationsInformation/ReservationsInformation.style";
import CarInfo from "./CarInfo";
import {
  Car,
  CarInformation,
  CarOption,
  Information,
  UserInformation,
} from "./NewReservationsContent.style";
import UserInfo from "./UserInfo";

const NewReservationsContent = () => {
  return (
    <Container
      style={{overflow:'auto', height: "100%", justifyContent: "space-between" }}
      maxWidth="lg"
    >
      <H1Date>حجز جديد</H1Date>
      <Information>
        <UserInfo/>
        <CarInfo/>
      </Information>
    </Container>
  );
};

export default NewReservationsContent;
