import React from 'react';
import { Box, Table, TableBody, TableContainer, TableHead, Paper, Button, Grid, Typography } from '@mui/material';
import { FaFileCsv, FaPrint, FaFilePdf, } from 'react-icons/fa';
import { AiFillFileExcel } from 'react-icons/ai';
import $ from 'jquery';
import { userStyle } from '../../PageStyle';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';
import Warrantiesadd from './Create';
import Warrantiesedit from './Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


//  JQUERY 
$(document).ready(function () {
  setTimeout(function () {
    $('#warrantiestable').DataTable({
      language: { search: '', searchPlaceholder: "Search..." },
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
  }, 1000);
});

function Warrantieslisttable() {
  return (
    <Box>
      {/* header text */}
      <Typography sx={userStyle.HeaderText}>Warranties</Typography>
      {/* content start */}
      <Box sx={userStyle.container}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography sx={userStyle.importheadtext}>All Warranties</Typography>
          </Grid>
          <Grid item xs={4}>
            <Warrantiesadd />
          </Grid>
        </Grid>
        <Grid container sx={userStyle.gridcontainer}>
          <Grid >
            <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV&ensp;</Button>
            <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel&ensp;</Button>
            <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print&ensp;</Button>
            <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF&ensp;</Button>
          </Grid>
        </Grid><br />
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table" id="warrantiestable">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Discription</StyledTableCell>
                  <StyledTableCell>Duration</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody align="left">
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row"> Pieces </StyledTableCell>
                  <StyledTableCell>Pc(s)</StyledTableCell>
                  <StyledTableCell>No</StyledTableCell>
                  <StyledTableCell>
                    <Warrantiesedit />
                    <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{fontsize:'large'}}/>&ensp;Delete</Button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      {/* content end */}
    </Box>
  );
}

function Warrantieslist() {
  return (
    <Box sx={{ display: 'flex', }} >
      <Sidebar />
      <Box sx={{ width: '100%', overflowX: 'hidden' }}>
        <Box component="main" sx={{ padding: '30px', }}><br /><br />
          <Warrantieslisttable />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

export default Warrantieslist;

