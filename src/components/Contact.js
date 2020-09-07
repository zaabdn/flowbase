import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contact: {
    width: "100%",
    position: "relative",
    backgroundColor: "white",
    padding: "100px 0",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    width: "30%",
    padding: "10px 20px",
    background: "linear-gradient(90deg, #FFD7A9 0%, #FFAE70 100%)",
    borderRadius: "50px",
    color: "purple",
  },
  btnContact: {
    padding: "15px 40px",
    background: "linear-gradient(44.11deg, #CD10FF 15.75%, #9F06FF 84.63%)",
    borderRadius: "50px",
    color: "white",
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.contact}>
        <Box p={1} style={{ color: "#001A49" }}>
          <Typography variant="caption" className={classes.title}>
            Get 30 Days Money Back Guarantee
          </Typography>
          <Typography variant="h3" style={{ margin: "30px 0 50px" }}>
            Ready to learn UX Design <br />
            from the expert?
          </Typography>
          <Button className={classes.btnContact}>Get Started</Button>
        </Box>
      </Grid>
    </>
  );
}
