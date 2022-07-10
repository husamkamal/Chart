import React from 'react';
import ReservationsContentHeader from '../ReservationsContentHeader/ReservationsContentHeader';
import ReservationsInformation from '../ReservationsInformation/ReservationsInformation';
import EnhancedTable from '../Table/Table';
import { ReservationsContentContainer } from './ReservationsContentContent.style';

const ReservationsContentContent = () => {
    return (
        <ReservationsContentContainer>
            <ReservationsContentHeader/>
            <ReservationsInformation/>
            <EnhancedTable/>
        </ReservationsContentContainer>
    );
}

export default ReservationsContentContent;
