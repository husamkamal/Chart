import React from "react";
import Container from "@mui/material/Container";
import MainHeader from "./MainHeader";
import ContentInfirmation from "./ContentInfirmation";

const Content = () => {
  return (
      <Container style={{height:'100%' }}  maxWidth="lg">
        <MainHeader/>
        <ContentInfirmation/>
      </Container>
  );
};

export default Content;
