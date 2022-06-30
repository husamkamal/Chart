// import React from 'react';
// import Images from '../../Assets';
// import { Li, Sid, Ul } from './SidBar.Style';
// import WidgetsIcon from '@mui/icons-material/Widgets';
// import ArticleIcon from '@mui/icons-material/Article';
// import PersonIcon from '@mui/icons-material/Person';
// import GppGoodIcon from '@mui/icons-material/GppGood';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// const SidBar = () => {
//     return (
//         <Sid>
//             <img style={{margin:'3rem 0'}} src={Images.path24} alt='logo'  />
//             <Ul>
//                 <Li >الرئيسية <WidgetsIcon style={{padding:"0 .5rem"}}/> </Li>
//                 <Li>لحجوزات <ArticleIcon style={{padding:"0 .5rem"}}/></Li>
//                 <Li>المستخدمين <PersonIcon style={{padding:"0 .5rem"}}/></Li>
//                 <Li>لموظفين <GppGoodIcon style={{padding:"0 .5rem"}}/></Li>
//                 <Li>أماكن الحجز <LocationOnIcon style={{padding:"0 .5rem"}}/></Li>
//                 <Li>تسجيل خروج <ExitToAppIcon style={{padding:"0 .5rem"}}/> </Li>
//             </Ul>
//         </Sid>
//     );
// }

// export default SidBar;
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Main from '../../Screens/Main/Main';
import Images from '../../Assets';
import { Sid } from './SidBar.Style';
import "./SidBar.css"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '103%' ,flexDirection:'row',width:'100%'}}
      >
        <Sid>
          <img style={{margin:'3rem 0',width:'2rem',display:'flex',alignSelf:'center'}} src={Images.path24} alt='logo'   />
      <Tabs 
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{color:'white',width:'100%',alignItems:"flex-start"}}
      >
        <Tab label='الرئيسية ' style={{color:'white',fontSize:'24px',display:'flex',width:'13rem',alignItems:'flex-start'}}   {...a11yProps(0)} >hi</Tab>   
        <Tab label="الحجوزات " style={{color:'white',fontSize:'24px',display:'flex',width:'13rem',alignItems:'flex-start'}}  {...a11yProps(1)} />
        <Tab label="المستخدين" style={{color:'white',fontSize:'24px',display:'flex',width:'13rem',alignItems:'flex-start'}} {...a11yProps(2)} />
        <Tab label="الموظفين " style={{color:'white',fontSize:'24px',display:'flex',width:'13rem',alignItems:'flex-start'}} {...a11yProps(3)} />
        <Tab label="تماكن الحجز" style={{color:'white',fontSize:'24px',display:'flex',width:'13rem',alignItems:'flex-start'}} {...a11yProps(4)} />
        <Tab label="تسجل الخروج" style={{color:'white',fontSize:'24px',display:'flex',width:'13rem',alignItems:'flex-start'}} {...a11yProps(5)} />
      </Tabs>
      </Sid>
      <TabPanel  style={{width:"85%"}} value={value} index={0}>
        <Main/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>

    </Box>
  );
}
