import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { actionStute } from "../../../../Store/Stute";
import { useSelector, useDispatch } from "react-redux";
export default function BasicSelect() {
  const stute = useSelector((state) => state.stute);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(actionStute.stute(event));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={stute}
          onChange={handleChange}
        >
          <MenuItem value={"الكل"}>الكل</MenuItem>
          <MenuItem value={"تم التنفيذ"}>تم التنفيذ</MenuItem>
          <MenuItem value={"قيد التنفيذ"}>قيد التنفيذ</MenuItem>
          <MenuItem value={"ملغي"}>ملغي</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
