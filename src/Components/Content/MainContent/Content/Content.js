import React from "react";
import Container from "@mui/material/Container";
import MainHeader from "../MainContentHeader/MainHeader";
import ContentInfirmation from "../ContentInformation/ContentInfirmation";
import Newbookings from "../NewBooking/Newbookings";
import { H1 } from "../MainContentHeader/MainHeader.style";

const Content = () => {
  return (
    <Container
      style={{ height: "100%", justifyContent: "space-between" }}
      maxWidth="lg"
    >
      <MainHeader />
      <ContentInfirmation />
      <div>
        <H1>حجوزات جديدة</H1>
        <Newbookings />
      </div>
    </Container>
  );
};

export default Content;
