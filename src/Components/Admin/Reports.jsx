import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Action } from '../Redux/Action';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Box } from '@mui/system';
import Pie from './PieCharts';
export default function AccessibleTable() {
  const dispatch=useDispatch();
let count=0;
  const mrequest = async (url) => {
    try {
      let res = await axios.get("https://freedom-151.onrender.com/posts");
      Action(dispatch,res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    mrequest();
  },[])
  
  let data = useSelector((store)=>{
    return store.products;
  })
  

let studentcount=data.filter((e)=>{
    return e.category==="General Knowledge" 
})

let Difficultylevel=data.filter((e)=>{
  return e.Difficultylevel==="Medium" 
})

let Numberquestions=data.filter((e)=>{
  return e.Numberquestions 
})



let convert=0;
let count13=0
let count18 =0;
let count25=0

// for (let i=0;i<data.length;i++){
//   let age = Number(data[i].Age)
//   if (age>=13 && age<18) count13++;
//   if (age>=18 && age<25) count18++;
//   if (age>=25 ) count25++;
  

// }
// let avg=(count13+count18+count25)/3;


function createData(name,range1,range2,range3, counts) {
  return { name ,range1,range2,range3, counts };
}

localStorage.setItem("category",studentcount.length);
localStorage.setItem("difficulty",(Difficultylevel.length))
localStorage.setItem("question",data.length);

const rows = [
  createData('Correct answers count',0,0,0,0),
  createData('Incorrect answers count',0,0,0,0),
  createData('Professionals count.',0,0,0,0),
  createData('Students Count',0,0,0,0),
];


  return (
    <div>
       <Pie data={data}/>
  
    <Box>
   <Box marginTop={3}>
    <h1>Reports</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="caption table">
        <caption>Masai Quiz</caption>
        <TableHead>
          <TableRow>
            <TableCell>Titles</TableCell>
            <TableCell align="right">High</TableCell>
            <TableCell align="right">Medium</TableCell>
            <TableCell align="right">Low</TableCell>
            <TableCell align="right">Total Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.range1}</TableCell>
              <TableCell align="right">{row.range2}</TableCell>
              <TableCell align="right">{row.range3}</TableCell>
              <TableCell align="right">{row.counts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Box>
    </div>
  );
}