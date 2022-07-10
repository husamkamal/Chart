import React from 'react';
import { H1 } from '../../MainContent/MainContentHeader/MainHeader.style';
import { ReservationsContentButton, ReservationsContentHead } from './ReservationsContentHeader.style';

const ReservationsContentHeader = () => {
    return (
        <ReservationsContentHead>
            <H1>الحجوزات </H1>
            <ReservationsContentButton>حجز جديد</ReservationsContentButton>
        </ReservationsContentHead>
    );
}

export default ReservationsContentHeader;
