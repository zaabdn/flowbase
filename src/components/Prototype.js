import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, CssBaseline, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    width: "100%",
    position: "relative",
    marginTop: "700px",
    backgroundColor: "#252B42",
    backgroundSize: "cover",
  },
  btnHome: {
    marginTop: "50px",
    padding: "10px 20px",
    backgroundColor: "white",
    borderRadius: "30px",
    color: "#2091F9",
  },
  btnBuy: {
    padding: "10px 20px",
    backgroundColor: "white",
    borderRadius: "50px",
    color: "#2091F9",
    marginRight: "10px",
  },
  btnTry: {
    padding: "10px 20px",
    borderRadius: "50px",
    color: "white",
    border: "1px solid white",
  },
}));

export default function Features() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box textAlign="center" css={{ paddingTop: "200px", marginTop: "350px" }}>
        <Box textAlign="center" m={1} p={1}>
          <Box p={1}>
            <Typography variant="subtitle1" style={{ color: "white" }}>
              At your fingertips
            </Typography>
          </Box>
          <Box p={1}>
            <Typography variant="h3" style={{ color: "white" }}>
              Lightning fast prototyping{" "}
            </Typography>
          </Box>
          <Box p={1}>
            <Typography variant="caption" style={{ color: "white" }}>
              Most calendars are designed for teams. <br /> Slate is designed
              for freelancers
            </Typography>
          </Box>
          <Box my={10}>
            <Button className={classes.btnBuy}>Buy Now</Button>
            <Button className={classes.btnTry}>Try For Free</Button>
          </Box>
        </Box>
        <Box display="flex">
          <Box mx={15}>
            <img src="/prototype.png" width="600px" />
          </Box>
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="column"
              textAlign="left"
              style={{ color: "white" }}
            >
              <Box display="flex">
                <Typography variant="subtitle1">At your fingertips</Typography>
              </Box>
              <Box width="70%" my={2}>
                <Typography variant="h4">Lightning fast prototyping</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1">
                  <b>Subscribe to our Newsletter</b>
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption">
                  Available exclusivery on Figmaland
                </Typography>
              </Box>
              <Box my={5}>
                <input
                  style={{
                    padding: "15px 40px",
                    border: "0",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    color: "#18171D",
                    marginRight: "20px",
                  }}
                  placeholder="Your Email"
                />
                <Button
                  style={{
                    padding: "11px",
                    border: "0",
                    borderRadius: "50px",
                    backgroundColor: "#2091F9",
                    color: "white",
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
