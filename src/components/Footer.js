import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Box, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "50px 150px",
    position: "relative",
    backgroundColor: "whitesmoke",
  },
  inputFooter: {
    padding: "20px 100px 20px 20px",
    border: "1px solid grey",
    borderRadius: "50px",
    width: "65%",
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
    <>
      <Grid container className={classes.footer} align="center">
        <Grid item xs={12}>
          <img src="/Logo.png" />
          <input
            className={classes.inputFooter}
            placeholder="Stay in the loop  - sign up with your email"
          />
          <Button className={classes.btnFooter}>Subscribe</Button>
        </Grid>
        <div
          style={{
            padding: "0 150px",
            display: "flex",
            width: "100%",
            textAlign: "left",
            marginTop: "50px",
          }}
        >
          <Grid item xs={12} sm={4}>
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
          </Grid>
          <Grid item xs={12} sm={4} style={{ margin: "0 50px" }}>
            <Typography
              style={{ marginTop: "45px" }}
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
          </Grid>
          <Grid item xs={12} sm={4}>
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
          </Grid>
        </div>
      </Grid>
    </>
  );
}
