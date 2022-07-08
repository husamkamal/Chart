import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('008', 'ابراهيم جمال', '+236 659 425', '35 ريال', '14-2-2022'),
  createData('007', 'احمد الهندي', '+236 844 843', '37 ريال', '13-2-2022'),
  createData('006', 'عبد الرحمن', '+236 289 843', '40 ريال','13-2-2022'),
  createData('005', 'عبد الرحيم الغمري', '+236 582 843', '43 ريال', '12-2-2022'),
  createData('004', 'سالم العمصي', '+236 520 843', '35 ريال','11-2-2022'),
  createData('003', 'نواف احمد', '+236 744 843', '37 ريال   ','11-2-2022'),
  createData('002', 'حليل حنفي', '+236 659 843', '70 ريال', '10-2-2022'),
];

export default function BasicTable() {
  return (
    <TableContainer style={{maxWidth:'65%',backgroundColor:'blue'}} component={Paper}>
      <Table sx={{ minWidth: 665 }} aria-label="simple table">
        <TableHead sx={{backgroundColor:'#FCFCFC'}} >
          <TableRow sx={{height:'2.4rem'}} >
            <TableCell>رقم الحجز</TableCell>
            <TableCell align="right">الاسم</TableCell>
            <TableCell align="right">رقم الهاتف</TableCell>
            <TableCell align="right">قيمة الحجز</TableCell>
            <TableCell align="right">تاريخ الحجز</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{backgroundColor:'#F6F6F6',height:'22.8rem'}}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },height:'2.4rem' }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
