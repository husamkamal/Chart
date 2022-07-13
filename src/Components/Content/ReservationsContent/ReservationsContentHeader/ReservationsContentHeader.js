import React from "react";
import { useNavigate } from "react-router-dom";
import { H1 } from "../../MainContent/MainContentHeader/MainHeader.style";
import {
  ReservationsContentButton,
  ReservationsContentHead,
} from "./ReservationsContentHeader.style";

const ReservationsContentHeader = () => {
    const navigate=useNavigate()
    return (
    <ReservationsContentHead>
      <H1>الحجوزات </H1>
      <ReservationsContentButton onClick={()=>navigate('/reservat')}>حجز جديد</ReservationsContentButton>
    </ReservationsContentHead>
  );
};

export default ReservationsContentHeader;
