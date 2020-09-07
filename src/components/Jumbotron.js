import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    flexGrow: 1,
    marginTop: "100px",
    width: "100%",
    position: "relative",
  },
  textJumbotron: {
    background: "url(/jumbotron.png)",
    blend: "normal",
    borderRadius: "0px 20px 20px 0px",
    padding: "120px 250px 50px 180px",
    width: "70%",
  },
  img: {
    background: "url(/Rectangle.png)",
    backgroundSize: "cover",
    width: "50%",
    maxHeight: "500px",
    margin: "100px 0 0 -100px",
  },
  btnHome: {
    marginTop: "30px",
    padding: "10px 20px",
    background: "linear-gradient(44.11deg, #CD10FF 15.75%, #9F06FF 84.63%)",
    borderRadius: "30px",
    color: "white",
  },
}));

export default function Jumbotron() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.jumbotron}>
        <Box display="flex">
          <div className={classes.textJumbotron}>
            <Typography
              variant="h2"
              style={{ fontWeight: "bold", color: "#001A49", width: "100%" }}
            >
              Learn no-code tools today.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#4F596A", marginTop: "20px" }}
            >
              Create beautiful webflow sites with flowbase. Clone for free and
              get started building a site today.
            </Typography>
            <Button className={classes.btnHome}>Get Started</Button>
            <Box marginTop="50px" display="flex">
              <img src="/oval1.png" />
              <img src="/oval2.png" style={{ marginLeft: "-15px" }} />
              <img src="/oval3.png" style={{ marginLeft: "-15px" }} />
              <Typography style={{ color: "#4F596A", margin: "15px" }}>
                Join over 4,000+ students
              </Typography>
            </Box>
          </div>
          <div className={classes.img}>
            <img
              src="/Play.png"
              style={{ margin: "160px 0 100px 300px", zIndex: "2" }}
            />
          </div>
        </Box>
      </Grid>
    </>
  );
}
