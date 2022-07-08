import React from 'react';
import { HeaderChert } from './MainHeaderChart.style';
import { H1 } from '../MainContentHeader/MainHeader.style';
import SelectSmall from '../Slecte/Slecte';

const MainHeaderChart = () => {
    return (
        <HeaderChert  >
            <H1>عدد الحجوزات </H1>
            <SelectSmall/>
        </HeaderChert>
    );
}

export default MainHeaderChart;
