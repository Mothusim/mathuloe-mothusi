import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SchoolIcon from "@mui/icons-material/School";
import "animate.css";

const Education = () => {

  return (

    <Box p={2}>
      
      <Grid container spacing={2}>

        <Grid item xs={12} md={6}>

          <Paper elevation={3} className="animate__animated animate__fadeInLeft" >

            <Box p={2} height='28vh'>

              <SchoolIcon fontSize="medium" />
              <Typography variant="h5">University of Johannesburg</Typography>
              <Typography variant="subtitle1">
                BCom in Economics and Econometrics
              </Typography>
              <Typography variant="subtitle2">Graduated: 2019</Typography>

            </Box>

          </Paper>

        </Grid>

        <Grid item xs={12} md={6}>

          <Paper elevation={3} className="animate__animated animate__fadeInRight">

            <Box p={2} height='28vh'>

              <SchoolIcon fontSize="medium" />
              <Typography variant="h5">Codespace Academy</Typography>
              <Typography variant="subtitle1">
                Software Engineering
              </Typography>
              <Typography variant="subtitle2">Graduated: 2023</Typography>

            </Box>

          </Paper>

        </Grid>

      </Grid>

    </Box>

  );

};

export default Education;
