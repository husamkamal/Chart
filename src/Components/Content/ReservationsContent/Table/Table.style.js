import styled from "styled-components";

import TableCell from "@mui/material/TableCell";
export const TableCellCustom = styled(TableCell)`
  color:${props=>
    props.color === 'قيد التفيذ'?'#FF9A00':props.color===' ملغي'?'#FF0000':props.color==='تم التنفيذ'?'#008000':'red'
  } !important
`;
// ` ${props.color} === قيد التفيذ
//    #FF9A00
//   : ${props.color} === ملغي
//    #FF0000
//   : ${props.color} === تم التنفيذ
//    #008000
//   : red`
