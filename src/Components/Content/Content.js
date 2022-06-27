import React from "react";
import Container from "@mui/material/Container";
import MainHeader from "./MainHeader";
import ContentInfirmation from "./ContentInfirmation";
import Newbookings from "./Newbookings";
import { TableChart } from "./Content.style";
import MainContainChart from "./MainContainChart";

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
