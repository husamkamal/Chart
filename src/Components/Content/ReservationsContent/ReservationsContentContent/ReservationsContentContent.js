import { Container } from "@mui/system";
import React from "react";
import ReservationsContentHeader from "../ReservationsContentHeader/ReservationsContentHeader";
import ReservationsInformation from "../ReservationsInformation/ReservationsInformation";
import EnhancedTable from "../Table/Table";

const ReservationsContentContent = () => {
  return (
    <Container
      style={{ height: "100%", justifyContent: "space-between" }}
      maxWidth="lg"
    >
      <ReservationsContentHeader />
      <ReservationsInformation />
      <EnhancedTable />
    </Container>
  );
};

export default ReservationsContentContent;
