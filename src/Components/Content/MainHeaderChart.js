import React from 'react';
import { H1 } from './MainHeader.style';
import { HeaderChert } from './MainHeaderChart.style';
import SelectSmall from './Slecte';

const MainHeaderChart = () => {
    return (
        <HeaderChert>
            <H1>عدد الحجوزات </H1>
            <SelectSmall/>
        </HeaderChert>
    );
}

export default MainHeaderChart;
