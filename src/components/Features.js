import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  CssBaseline,
  Box,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
    padding: "0px 0px 100px",
    width: "100%",
    position: "relative",
    background: "url(/SideShape.png) no-repeat",
    zIndex: "1",
  },
  card: {
    background: "#FFFFFF",
    border: "1px solid #E7EAEB",
    boxSizing: "border-box",
    borderRadius: "21px",
    margin: "0 100px 0 200px",
    width: "70%",
    padding: "50px",
  },
  cardLearn: {
    background: "url(/Rectangle2.png)",
    borderRadius: "21px",
    border: 0,
    width: "70%",
    margin: "50px 0",
  },
}));

export default function Features() {
  const classes = useStyles();

  const cards = [
    {
      id: 1,
      title: "Analyzing User Data",
    },
    {
      id: 2,
      title: "User Persona",
    },
    {
      id: 3,
      title: "Prototyping",
    },
    {
      id: 4,
      title: "Storyboarding",
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Card variant="outlined" className={classes.card}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h2">
            12,201
            <br />
            <Typography variant="h6" align="center">
              happy students
            </Typography>
          </Typography>
          <Typography variant="h2" style={{ margin: "0 100px" }}>
            3,291
            <br />
            <Typography variant="h6" align="center">
              lectures
            </Typography>
          </Typography>
          <Typography variant="h2">
            1,291
            <br />
            <Typography variant="h6" align="center">
              5 star reviews
            </Typography>
          </Typography>
        </Box>
      </Card>
      <Box>
        <img
          src="/circle.png"
          style={{ position: "absolute", right: 0, top: "300px" }}
        />
        <Box align="center" marginTop="300px">
          <Typography variant="h3">What you’ll learn</Typography>
          <Typography>
            Create beautiful webflow sites with flowbase. Clone for free and get
            started building a site today.
          </Typography>
          {cards.map((card) => (
            <Card className={classes.cardLearn} key={card.id}>
              <Box displa="flex">
                <Box display="flex">
                  <div
                    style={{
                      background: "#FFFFFF",
                      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.0535402)",
                      borderRadius: "100%",
                      width: "50px",
                      height: "50px",
                      padding: "10px ",
                      margin: "auto 50px",
                    }}
                  >
                    <img src="/Icon.png" width="30px" height="30px" />
                  </div>
                  <Box flexDirection="column" align="left" marginY="auto">
                    <Typography variant="h6">{card.title}</Typography>
                    <Typography variant="caption">
                      Who are you developing for? How will they use your design?
                      <br />
                      Building user personas can answer these.
                    </Typography>
                  </Box>
                  <div
                    style={{
                      background:
                        "linear-gradient(44.11deg, #CD10FF 15.75%, #9F06FF 84.63%)",
                      borderRadius: "33px",
                      padding: "20px 30px",
                      margin: "30px 0 30px 100px",
                      color: "white",
                    }}
                  >
                    <Box display="flex">
                      <Typography style={{ padding: "0 30px" }}>
                        6 Videos
                      </Typography>
                      <Typography>4.5 Hours</Typography>
                    </Box>
                  </div>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
      <Box display="flex" px={25} marginTop={20}>
        <Box display="flex" flexDirection="column" marginY="auto">
          <Typography variant="h3">
            <b>Hi, I am David, your course instructor.</b>
          </Typography>
          <Typography variant="caption" style={{ marginTop: "20px" }}>
            Create beautiful webflow sites with flowbase. Clone for free and get
            started building a site today.
          </Typography>
        </Box>
        <img src="/Instructor.png" />
      </Box>
    </div>
  );
}
