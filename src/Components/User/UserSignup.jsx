import React, { useState } from 'react';
import { Button, Input } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
 const UserSignup = () => {
  const [name, setName] = useState('');
  const [Category, setcategory] = useState('');
  const [Difficultylevel, setdifficulty] = useState('');
  const [Numberquestions, setnumberofquetions] = useState('');

  const navigate = useNavigate();
  const handleNameChange = (event) => {
    setName(event.target.value);
    localStorage.setItem("Name",name)
  };

  const handleChangeCategory = (event) => {
    setcategory(event.target.value);
    localStorage.setItem("Category",Category)
  };

  const handledifficulty = (event) => {
    setdifficulty(event.target.value);
    localStorage.setItem("Difficultylevel",Difficultylevel)
  };

  const Numberquestionsask = (event) => {
    setnumberofquetions(event.target.value);
    localStorage.setItem("Numberquestions",Numberquestions)
  };

  async function handleSubmit(event) {
    event.preventDefault();
          const data = {
            Name: name,
            Category:Category,
            Difficultylevel:Difficultylevel,
            Numberquestions:Numberquestions,
          };
          try {
            await axios.post('https://freedom-151.onrender.com/posts', data);
            toast.success("successfully registered")
            const successs = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3');
            successs.play();
            setTimeout(() => {
              navigate('/quiz ');
            }, 3000);
          } catch (error) {
            toast.error(error);
          }
        }
        const commonStyles = {
          bgcolor: 'background.paper',
          margin: "auto",
          top:1,
          borderColor: 'text.primary',
          width: '29rem',
          height: '22rem',
        };
  return (
    <div>
      <ToastContainer/>
         <h1>SetUp Your Quiz Form</h1>
      <Box sx={{ ...commonStyles, border: 1 }} >
        <br/> 
      <form onSubmit={handleSubmit}>
        <TextField required type="text" value={name} onChange={handleNameChange} placeholder="Name" />
      <br /> <br /> 
      <FormControl sx={{ m: 1, minWidth: 80 }} id="filter" size="small" >
      <InputLabel id="demo-select-small">Select Category</InputLabel>
        <Select value={Category} onChange={handleChangeCategory} placeholder="Category" label="Category" defaultValue='Category'>
          <MenuItem value="GeneralKnowledge">General Knowledge</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
          <MenuItem value="Geography">Geography</MenuItem>
        </Select>
        </FormControl>
        <br /> <br />
        <FormControl sx={{ m: 1, minWidth: 80 }} id="filter" size="small" >
        <InputLabel id="demo-select-small">Select Difficulty level</InputLabel>
        <Select value={Difficultylevel} onChange={handledifficulty} label="Select Difficulty level">
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
        </FormControl>
      <br /> <br /> 
      <TextField required type="text" value={Numberquestions} onChange={Numberquestionsask} placeholder="Number of questions" />
      <br /> 
      <Button variant="outlined" type="submit"> Submit</Button>
     </form>
       </Box>
    </div>
  );
  };

export default UserSignup;

