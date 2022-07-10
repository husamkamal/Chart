import React from 'react';
import ReservationsContentContent from '../../Components/Content/ReservationsContent/ReservationsContentContent/ReservationsContentContent';
import { ReservationsContentScreenStyle } from './ReservationsContentScreen.style';

const ReservationsContentScreen = () => {
    return (
        <ReservationsContentScreenStyle>
            <ReservationsContentContent/>
        </ReservationsContentScreenStyle>
    );
}

export default ReservationsContentScreen;
