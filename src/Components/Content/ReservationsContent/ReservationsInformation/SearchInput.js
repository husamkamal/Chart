import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchStyle } from './ReservationsInformation.style';
const SearchInput = () => {
    return (
        <SearchStyle>
            <input style={{width:'85%' , height:'100%',border:'none',outline:'none',background:'none'}} type={'text'} placeholder='البحث'/> 
            <SearchIcon/>
        </SearchStyle>
    );
}

export default SearchInput;
