import React from 'react';
import ReservationsFilter from '../ReservationsFilter/ReservationsFilter';

import SelectSmall from '../Slecte/Slecte';

const ContentInfirmation = () => {

    return (
        <div style={{marginTop:'1rem' , width:'100%'}}>
            <SelectSmall/>
            <ReservationsFilter/>
        </div>
    );
}

export default ContentInfirmation;
