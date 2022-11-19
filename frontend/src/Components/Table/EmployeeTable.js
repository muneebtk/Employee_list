import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


function EmployeeTable(props) {
  let navigate = useNavigate();
 
  return (
    <div>
      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Job Title</TableCell>
              <TableCell align="center">Team</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Join Date</TableCell>
              <TableCell align="center">Is Logged In</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={props.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {props.data.id}
              </TableCell>
              <TableCell align="center">{props.data.first_name}</TableCell>
              <TableCell align="center">{props.data.last_name}</TableCell>
              <TableCell align="center">{props.data.job_title}</TableCell>
              <TableCell align="center">{props.data.team}</TableCell>
              <TableCell align="center">{props.data.email}</TableCell>
              <TableCell align="center">{props.data.join_date}</TableCell>
              <TableCell align="center">
                {props.data.logged_in ? "Yes" : "No"}
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => navigate(`profile/${props.data.id}/`)}
                  variant="outlined"
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EmployeeTable;
