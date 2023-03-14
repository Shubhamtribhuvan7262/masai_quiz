import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { Action } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function Quiz() {
  const dispatch = useDispatch();
  const mrequest = async () => {
    try {
      let res = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple&type=boolean"
      );
      // console.log(res.data.results);
      Action(dispatch, res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    mrequest();
  }, []);

  // mrequest();

  let data = useSelector((store) => {
    return store.products;
  });

  console.log(data);

  //    GK easy // https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Exam Started</h1>

      {/* <FormControl sx={{ m: 1, minWidth: 80 }} id="filter" size="small" >
      <InputLabel id="demo-select-small">Country</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={Options}
        label="Country"
        onChange={HandleFilterCountry}
      >
        <MenuItem value="True">True</MenuItem>
        <MenuItem value="False">False</MenuItem>
      </Select>
    </FormControl> */}
      <Grid container spacing={3}>
        {data.map((user) => (
            <Grid item xs={12} sm={6} md={3} key={user.id}>
              <Card style={{ width: "300px" }}>
                <CardContent>
                  <Typography variant="h6">Quetions:{user.question}</Typography>
                  <Typography variant="body1" color="textSecondary">
                    {user.category}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {user.difficulty}
                  </Typography>
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                  >
                    <br /> <br />
                  <Typography variant="body1" color="textSecondary">
                    {user.incorrect_answers}
                  </Typography>
                    <Button>True</Button>
                    <Button>False</Button>
                    <Typography variant="body1" color="textSecondary">
                    {user.correct_answer}
                  </Typography>
                  </ButtonGroup>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
