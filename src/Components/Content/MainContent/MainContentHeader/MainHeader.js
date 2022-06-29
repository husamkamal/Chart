import React from 'react';
import { H1, Header, HeaderDescription, HeaderPara, Logo } from './MainHeader.style';
import Avatar from '@mui/material/Avatar';
import Images from '../../../../Assets';
const MainHeader = () => {
    return (
        <Header>
            <HeaderDescription>
                <HeaderPara>أغرس اليوم شجرة تنم في ظلها غداً</HeaderPara>
                <H1>الرئيسية</H1>
            </HeaderDescription>
            <Logo>
            <Avatar  src={Images.Ellipse} alt="Remy Sharp"/>
            <H1>نواف البشري </H1>
            </Logo>
        </Header>
    );
}

export default MainHeader;
