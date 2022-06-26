import React from 'react';
import Images from '../../Assets';
import { Li, Sid, Ul } from './SidBar.Style';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import GppGoodIcon from '@mui/icons-material/GppGood';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const SidBar = () => {
    return (
        <Sid>
            <img src={Images.path24} alt='logo'  />
            <Ul>
                <Li >الرئيسية <WidgetsIcon style={{padding:"0 .5rem"}}/> </Li>
                <Li>لحجوزات <ArticleIcon style={{padding:"0 .5rem"}}/></Li>
                <Li>المستخدمين <PersonIcon style={{padding:"0 .5rem"}}/></Li>
                <Li>لموظفين <GppGoodIcon style={{padding:"0 .5rem"}}/></Li>
                <Li>أماكن الحجز <LocationOnIcon style={{padding:"0 .5rem"}}/></Li>
                <Li>تسجيل خروج <ExitToAppIcon style={{padding:"0 .5rem"}}/> </Li>
            </Ul>
        </Sid>
    );
}

export default SidBar;
