import React from "react";
import Container from "@mui/material/Container";
import MainHeader from "../MainContentHeader/MainHeader";
import ContentInfirmation from "../ContentInformation/ContentInfirmation";
import Newbookings from "../NewBooking/Newbookings";
import { TableChart } from "./Content.style";
import MainContainChart from "../MainContentCahrt/MainContainChart"

const Content = () => {
  return (
    <Container
      style={{ height: "100%", justifyContent: "space-between" }}
      maxWidth="lg"
    >
      <MainHeader />
      <ContentInfirmation />
      <TableChart>
        <Newbookings />
        <MainContainChart/>
      </TableChart>
    </Container>
  );
};

export default Content;
