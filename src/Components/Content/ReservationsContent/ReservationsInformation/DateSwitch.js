import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { actionDate } from "../../../../Store/Date";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { RowDiv } from "./ReservationsInformation.style";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const DateSwitch = () => {
  const date = useSelector((state) => state.date);
  const dispatch = useDispatch();
  const onChaneHandle = (e) => {
    dispatch(actionDate.date(e));
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: " 3rem",
          width: "25rem",
        }}
      >
        <DesktopDatePicker
          value={date}
          minDate={new Date("2017-01-01")}
          onChange={onChaneHandle}
          renderInput={(params) => <TextField {...params} />}
        />
        <RowDiv>
          <ArrowForwardIcon style={{color: "#28303F", opacity: "0.4" }} />
          <ArrowBackIcon  style={{color: "#28303F", opacity: "0.4" }} />
        </RowDiv>
        <DesktopDatePicker
          value={date}
          minDate={new Date("2017-01-01")}
          onChange={onChaneHandle}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DateSwitch;
