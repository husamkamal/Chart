import React from 'react';
import BasicSelect from './BollingStatusSelect';
import { BookingStatusContainer, H1Date } from './ReservationsInformation.style';

const BookingStatus = () => {
    return (
        <BookingStatusContainer>
            <H1Date>حالة الحجز</H1Date>
            <BasicSelect/>
        </BookingStatusContainer>
    );
}

export default BookingStatus;

