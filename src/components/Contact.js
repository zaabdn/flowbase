import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, CssBaseline, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    width: "100%",
    position: "relative",
    backgroundColor: "white",
    backgroundSize: "cover",
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
    <div className={classes.root}>
      <CssBaseline />
      <Box textAlign="center" css={{ padding: "100px" }}>
        <Box textAlign="center" p={1}>
          <Box p={1} style={{ color: "#001A49" }} justifyContent="center">
            <Typography
              variant="caption"
              style={{
                width: "30%",
                padding: "10px 20px",
                background: "linear-gradient(90deg, #FFD7A9 0%, #FFAE70 100%)",
                borderRadius: "50px",
                color: "purple",
              }}
            >
              Get 30 Days Money Back Guarantee
            </Typography>
            <Typography variant="h3" style={{ margin: "30px 0 50px" }}>
              Ready to learn UX Design <br />
              from the expert?
            </Typography>
            <Button className={classes.btnContact}>Get Started</Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
