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
      </Ul>
    </Sid>
  );
};

export default SidBar;