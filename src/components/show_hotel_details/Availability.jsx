import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const columns = [
  { id: "type", label: "Room Type", minWidth: 170 },
  { id: "sleeps", label: "Sleeps", minWidth: 100 },
  {
    id: "price",
    label: "Price",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

// const data = [
//   {
//     id: 1,
//     type: "Superior Twin Room",
//     sleeps: 2,
//     price: 148221,
//   },
//   {
//     id: 2,
//     type: "superior King Room",
//     sleeps: 2,
//     price: 155043,
//   },
//   {
//     id: 3,
//     type: "Deluxe Suite",
//     sleeps: 2,
//     price: 356599,
//   },
//   {
//     id: 4,
//     type: "Deluxe King Room ",
//     sleeps: 2,
//     price: 170547,
//   },
//   {
//     id: 5,
//     type: "Superior Twin Room",
//     sleeps: 2,
//     price: 148221,
//   },
//   {
//     id: 6,
//     type: "superior King Room",
//     sleeps: 2,
//     price: 155043,
//   },
//   {
//     id: 7,
//     type: "Deluxe Suite",
//     sleeps: 2,
//     price: 356599,
//   },
//   {
//     id: 8,
//     type: "Deluxe King Room ",
//     sleeps: 2,
//     price: 170547,
//   },
// ];


const Availability= ({menu}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log("Menu of hotel: ", menu)

  return (
    <Box sx={{ p: "10%" }}>
      <Stack alignItems="center">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {menu
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={menu.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Stack>
    </Box>
  );
}

export default Availability;
