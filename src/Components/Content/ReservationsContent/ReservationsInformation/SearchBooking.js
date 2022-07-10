import React from "react";
import {
  H1Date,
  SearchBookingContainer,
} from "./ReservationsInformation.style";
import SearchInput from "./SearchInput";

const SearchBooking = () => {
  return (
    <SearchBookingContainer>
      <H1Date>أبحث عن أسم العميل أو البايكر</H1Date>
      <SearchInput />
    </SearchBookingContainer>
  );
};

export default SearchBooking;
