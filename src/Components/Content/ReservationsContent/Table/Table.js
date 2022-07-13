import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { TableCellCustom } from "./Table.style";
function createData(name, calories, fat, carbs, protein, f, r, e, l) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    f,
    r,
    e,
    l,
  };
}

const rows = [
  createData(
    "008",
    "ابراهيم جمال",
    "+236 659 425",
    "35 ريال",
    "14-2-2022",
    "11:30 ص",
    "قيد التفيذ",
    "محمد فتحي",
    <MoreHorizIcon />
  ),
  createData(
    "007",
    "احمد الهندي",
    "+236 844 843",
    "37 ريال",
    "13-2-2022",
    "11:00ص",
    "قيد التفيذ",
    "احمد هاني",
    <MoreHorizIcon />
  ),
  createData(
    "006",
    "عبد الرحمن ",
    "+236 289 843",
    "40 ريال",
    "13-2-2022",
    "10:30ص",
    "ملغي",
    "احمد هاني",
    <MoreHorizIcon />
  ),
  createData(
    "005",
    "عبد الرحمن ",
    "+236 289 843",
    "40 ريال",
    "13-2-2022",
    "10:30ص",
    "ملغي",
    "احمد هاني",
    <MoreHorizIcon />
  ),
  createData(
    "004",
    "عبد الرحمن ",
    "+236 289 843",
    "40 ريال",
    "13-2-2022",
    "10:30ص",
    "ملغي",
    "احمد هاني",
    <MoreHorizIcon />
  ),
  createData(
    "003",
    "عبد الرحمن ",
    "+236 289 843",
    "40 ريال",
    "13-2-2022",
    "10:30ص",
    "تم التنفيذ",
    "احمد هاني",
    <MoreHorizIcon />
  ),
  createData(
    "002",
    "عبد الرحمن ",
    "+236 289 843",
    "40 ريال",
    "13-2-2022",
    "10:30ص",
    "ملغي",
    "احمد هاني",
    <MoreHorizIcon />
  ),
  createData(
    "001",
    "عبد الرحمن ",
    "+236 289 843",
    "40 ريال",
    "13-2-2022",
    "10:30ص",
    "ملغي",
    "احمد هاني",
    <MoreHorizIcon />
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "رقم الحجز",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "الاسم",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "رقم الهاتف",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "قيمة الحجز",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "تاريخ الحجز",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "توقيت الحجز",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "حالة الحجز",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "البايكر",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {/* <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead />
            <TableBody sx={{ backgroundColor: "#DDDDDD" }}>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      sx={{ height: "1rem" }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        align={"center"}
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        size={"small"}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell size={"small"} align="center">
                        {row.calories}
                      </TableCell>
                      <TableCell size={"small"} align="center">
                        {row.fat}
                      </TableCell>
                      <TableCell size={"small"} align="center">
                        {row.carbs}
                      </TableCell>
                      <TableCell size={"small"} align="center">
                        {row.protein}
                      </TableCell>
                      <TableCell size={"small"} align="center">
                        {row.f}
                      </TableCell>
                      <TableCellCustom color={row.r} size={"small"} align="center">
                        <li>{row.r}</li>
                      </TableCellCustom>
                      <TableCell size={"small"} align="center">
                        {row.e}
                      </TableCell>
                      <TableCell size={"small"} align="center">
                        {row.l}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
