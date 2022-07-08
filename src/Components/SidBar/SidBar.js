import React from "react";
import Images from "../../Assets";
import { ImgDiv, Li, Sid, Ul } from "./SidBar.Style";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const SidBar = () => {
  const navigate = useNavigate();
  const {pathname}=useLocation()
  const data = useSelector((state) => state.sidBar);
  return (
    <Sid>
      <ImgDiv>
        <img src={Images.path24} alt="logo" />
      </ImgDiv>
      <Ul>
        {data.sidBar.map((ele) => {
          return (
            <Li isActive={pathname===ele.path} onClick={() => navigate(ele.path)} key={ele.path}>
              {ele.name} {ele.icon}{" "}
            </Li>
          );
        })}
        {/* <Li >الرئيسية <WidgetsIcon style={{padding:"0 .5rem"}}/> </Li> */}
        {/* <Li>لحجوزات <ArticleIcon style={{padding:"0 .5rem"}}/></Li>
                <Li>المستخدمين <PersonIcon style={{padding:"0 .5rem"}}/></Li>
                <Li>لموظفين <GppGoodIcon style={{padding:"0 .5rem"}}/></Li>
                <Li>أماكن الحجز <LocationOnIcon style={{padding:"0 .5rem"}}/></Li>
                <Li>تسجيل خروج <ExitToAppIcon style={{padding:"0 .5rem"}}/> </Li> */}
      </Ul>
    </Sid>
  );
};

export default SidBar;