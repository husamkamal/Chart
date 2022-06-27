import React from 'react';
import ReservationsFilter from './ReservationsFilter';

import SelectSmall from './Slecte';

const ContentInfirmation = () => {

    return (
        <div style={{marginTop:'1rem' , width:'100%'}}>
            <SelectSmall/>
            <ReservationsFilter/>
        </div>
    );
}

export default ContentInfirmation;
