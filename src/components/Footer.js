import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  CssBaseline,
  Box,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "50px 0",
    width: "100%",
    position: "relative",
    backgroundColor: "whitesmoke",
    backgroundSize: "cover",
  },
  inputFooter: {
    padding: "20px 120px 20px 20px",
    border: "1px solid grey",
    borderRadius: "50px",
    width: "50%",
    marginLeft: "100px",
  },
  btnFooter: {
    padding: "10x",
    marginLeft: "-110px",
    margin: "10px",
    border: 0,
    borderRadius: "50px",
    background: "linear-gradient(44.11deg, #CD10FF 15.75%, #9F06FF 84.63%)",
    color: "white",
  },
  textFooter: {
    margin: "10px 0",
    color: "black",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box display="flex" justifyContent="center" marginTop={10}>
        <img src="/Logo.png" />
        <input
          className={classes.inputFooter}
          placeholder="Stay in the loop  - sign up with your email"
        />
        <Button className={classes.btnFooter}>Subscribe</Button>
      </Box>
      <Box display="flex" justifyContent="center" marginTop={10}>
        <Box display="flex" flexDirection="column" width="20%">
          <Typography variant="subtitle1" className={classes.textFooter}>
            <b>Help Menu</b>
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            About
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Features
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Works
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Career
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" width="20%">
          <Typography
            style={{ marginTop: "60px" }}
            variant="subtitle1"
            className={classes.textFooter}
          >
            Contact
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Help &nbsb; Support
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Privacy Policy
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Terms & Conditions
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" width="20%">
          <Typography variant="subtitle1" className={classes.textFooter}>
            <b>Product</b>
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Essential Landing Page
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Alpha Dashboard Pro
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Karnel Admin Dashboard
          </Typography>
          <Typography variant="subtitle1" className={classes.textFooter}>
            Gray UI Kit
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
