import React from 'react';
import BookingStatus from './BookingStatus';
import Pdf from './Pdf';
import { ReservationsInformationContainer } from './ReservationsInformation.style';
import ReservationsInformationDate from './ReservationsInformationDate';
import SearchBooking from './SearchBooking';

const ReservationsInformation = () => {
    return (
        <ReservationsInformationContainer>
            <ReservationsInformationDate/>
            <BookingStatus/>
            <SearchBooking/>
            <Pdf/>
        </ReservationsInformationContainer>
    );
}

export default ReservationsInformation;
