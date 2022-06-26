import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch ,useSelector } from 'react-redux';
import { actionMonth } from '../../Store/MainState';
export default function SelectSmall() {
    const Month=useSelector((state)=>state.month)
    const dipatch=useDispatch()
  const handleChange = (event) => {
    dipatch(actionMonth.MonthName(event))
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Months</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={Month}
        label="Month"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"January"}>January</MenuItem>
        <MenuItem value={"February"}>February</MenuItem>
        <MenuItem value={"March"}>March</MenuItem>
        <MenuItem value={"April"}>April</MenuItem>
        <MenuItem value={"May"}>May</MenuItem>
        <MenuItem value={"June"}>June</MenuItem>
        <MenuItem value={"July"}>July</MenuItem>
        <MenuItem value={"August"}>	August</MenuItem>
        <MenuItem value={"September"}>September</MenuItem>
        <MenuItem value={"October"}>October</MenuItem>
        <MenuItem value={"November"}>November</MenuItem>
        <MenuItem value={"December"}>December</MenuItem>
      </Select>
    </FormControl>
  );
}
