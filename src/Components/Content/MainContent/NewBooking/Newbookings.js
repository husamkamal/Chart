import React from 'react';
import { H1 } from '../MainContentHeader/MainHeader.style';
import BasicTable from './NewbookingsTable';
const Newbookings = () => {
    return (
        <div>
            <H1>حجوزات جديدة</H1>
            <BasicTable/>
        </div>
    );
}

export default Newbookings;
