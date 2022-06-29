import React from "react";
import {  useSelector } from "react-redux";
import { Card1, Card2, Card3, Card4, Cards, ReservH1, ReservPara } from "./ReservationsFilter.style";
const ReservationsFilter = () => {
  const month = useSelector((state) => state.month);

  const reservations = useSelector((state) => state.reservations);
  const filterReservations = reservations.filter((ele) => {
    return ele.month === month;
  });
  return (
    <Cards>
      
          <Card1 >
            <ReservH1>{filterReservations[0]?.number}</ReservH1>
            <ReservPara>{filterReservations[0]?.name}</ReservPara>
          </Card1>
          <Card2 >
            <ReservH1>{filterReservations[1]?.number}</ReservH1>
            <ReservPara>{filterReservations[1]?.name}</ReservPara>
          </Card2>
          <Card3 >
            <ReservH1>{filterReservations[2]?.number}</ReservH1>
            <ReservPara>{filterReservations[2]?.name}</ReservPara>
          </Card3>
          <Card4 >
            <ReservH1>{filterReservations[3]?.number}</ReservH1>
            <ReservPara>{filterReservations[3]?.name}</ReservPara>
          </Card4>
        
    </Cards>
  );
};

export default ReservationsFilter;
