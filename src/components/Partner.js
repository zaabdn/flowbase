import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, CssBaseline, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    width: "100%",
    position: "relative",
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

export default function Partner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box textAlign="center" css={{ padding: "100px" }}>
        <Box textAlign="center" p={1}>
          <Box p={1}>
            <Typography variant="h3" style={{ color: "white" }}>
              Partners
            </Typography>
          </Box>
          <Box my={10} display="flex" justifyContent="center">
            <img src="/1.png" />
            <img src="/2.png" style={{ margin: "0 30px" }} />
            <img src="/3.png" style={{ margin: "0 30px" }} />
            <img src="/4.png" style={{ margin: "0 30px" }} />
            <img src="/5.png" style={{ margin: "0 30px" }} />
            <img src="/6.png" style={{ margin: "0 30px" }} />
            <img src="/7.png" />
          </Box>
          <Box>
            <Button
              style={{
                padding: "10px 30px",
                backgroundColor: "#2091F9",
                color: "white",
                borderRadius: "50px",
              }}
            >
              Try For Free
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
