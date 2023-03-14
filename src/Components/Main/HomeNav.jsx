import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
export default function Homenav() {
function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <img
          src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/231b.svg"
          width="60px"
        />
      </IconButton>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <h3>Masai QuizMe</h3>
      </IconButton>
      <Box
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "flex-start" },
          gap: { xs: 2, sm: 5 },
          p: { xs: 2, sm: 1 },
          m: { xs: 2, sm: 1 },
          justifyContent: { xs: "space-between", sm: "initial" },
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, gap: 5 }}
        >
          <Button variant="outlined" size="large" color="info" sx={{ mr: { xs: 1, sm: 2 }}}>
            <Link to="/" style={{textDecoration:"none"}}>Registaration</Link>
          </Button>
          {"  "}
          <Button variant="outlined" size="large" color="info" >
            <Link to="/quiz" style={{textDecoration:"none"}}>Exam</Link>
          </Button>
          {"  "}
          <Button variant="outlined" size="large" color="info" >
            <Link to="/results" style={{textDecoration:"none"}}>Results</Link>
          </Button>
        </Typography>
      </Box>
    </Toolbar>
  );
}
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        {appBarLabel()}
      </AppBar>
    </Stack>
  );
}
