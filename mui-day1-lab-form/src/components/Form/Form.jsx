import React from "react";
import "./Form.css";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
} from "@mui/material";

const Form = () => {
  return (
    <Container  className="container" sx={{ paddingY: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }} >
        <Typography variant="h4" gutterBottom align="center" mb={4}>
          Sign up
        </Typography>
        <Grid container xs={{width: "40%"}} spacing={2}>
          
          <Grid item xs={12} sm={6}>
            <TextField label="First Name" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last Name" variant="outlined" fullWidth required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>

          
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              type="tel"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>

          
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select defaultValue="" label="Country" required>
                <MenuItem value="usa">USA</MenuItem>
                <MenuItem value="uk">UK</MenuItem>
                <MenuItem value="canada">Canada</MenuItem>
                <MenuItem value="egypt">Egypt</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          
          <Grid item xs={12}>
            <Typography variant="subtitle1">Job Preference</Typography>
            <FormControl component="fieldset">
              <FormControlLabel
                control={<Checkbox />}
                label="Frontend Developer"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Backend Developer"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1">Gender</Typography>
            <FormControl component="fieldset">
              <RadioGroup row defaultValue="">
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button variant="contained" sx={{mr: 2}} color="primary" size="large" type="submit">
              Sign up
            </Button>
            <Button variant="outlined" size="large">Rest</Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Form;