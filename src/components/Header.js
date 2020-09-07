import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    width: "100%",
    position: "fixed",
    zIndex: "3",
    backgroundColor: "white",
    justifyContent: "center",
  },
  input: {
    border: 0,
    padding: "15px",
    borderRadius: "25px",
    color: "black",
    margin: "10px",
  },
  menu: {
    margin: "20px 40px",
    maxWidth: "50%",
  },
  submenu: {
    margin: "0 15px",
    color: "#001A49",
  },
  btnSubscribe: {
    padding: "10px 20px",
    margin: "10px",
    background: "linear-gradient(44.11deg, #CD10FF 15.75%, #9F06FF 84.63%)",
    color: "white",
    borderRadius: "25px",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.header}>
        <Box
          p={2}
          display="flex"
          flexWrap="nowrap"
          css={{
            alignItems: "center",
          }}
        >
          <Box justifyContent="center">
            <img src="/logo.png" />
          </Box>
          <Box className={classes.menu} display="flex" flexWrap="nowrap">
            <Box justifyContent="center" className={classes.submenu}>
              <Typography>Course topics</Typography>
            </Box>
            <Box justifyContent="center" className={classes.submenu}>
              <Typography>What students say</Typography>
            </Box>
          </Box>
          <Box justifyContent="center" marginLeft="100px">
            <Button>Sign in</Button>
          </Box>
          <Box justifyContent="center" marginLeft="30px">
            <Button className={classes.btnSubscribe}>Get Started</Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
