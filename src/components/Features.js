import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Box, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  features: {
    marginTop: "180px",
    padding: "100px 100px",
    position: "relative",
    background: "url(/SideShape.png) no-repeat",
    zIndex: "1",
  },
  card: {
    background: "whitesmoke",
    border: "1px solid #E7EAEB",
    boxSizing: "border-box",
    borderRadius: "21px",
    margin: "-120px 0px 0 60px",
    width: "85%",
    padding: "50px",
  },
  circle: {
    background: "#FFFFFF",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.0535402)",
    borderRadius: "100%",
    width: "50px",
    height: "50px",
    padding: "10px ",
    margin: "auto 50px",
  },
  labelFeatures: {
    background: "linear-gradient(44.11deg, #CD10FF 15.75%, #9F06FF 84.63%)",
    borderRadius: "35px",
    padding: "15px 40px",
    color: "white",
    margin: "auto 10px auto 150px",
    display: "flex",
  },
  cardLearn: {
    background: "url(/Rectangle2.png)",
    borderRadius: "20px",
    border: 0,
    width: "90%",
    margin: "30px 0",
    padding: "30px",
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
    <>
      <Grid container className={classes.features}>
        <Grid item xs={12}>
          <Card variant="outlined" className={classes.card}>
            <Box display="flex" justifyContent="center" textAlign="center">
              <Grid
                item
                xs={12}
                sm={4}
                style={{ borderRight: "1px solid grey" }}
              >
                <Typography variant="h2">
                  12,201
                  <br />
                </Typography>
                <Typography variant="body1">happy students</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                style={{ borderRight: "1px solid grey" }}
              >
                <Typography variant="h2">
                  3,291
                  <br />
                </Typography>
                <Typography variant="body1">lectures</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h2">
                  1,291
                  <br />
                </Typography>
                <Typography variant="body1">5 star reviews</Typography>
              </Grid>
            </Box>
          </Card>
          <Box>
            <img
              src="/circle.png"
              style={{ position: "absolute", right: 0, top: "300px" }}
            />
          </Box>

          <Box
            justifyContent="center"
            align="center"
            style={{ marginTop: "250px", justifyContent: "center" }}
          >
            <Typography variant="h3">What you’ll learn</Typography>
            <Typography variant="body2" style={{ margin: "10px 0 70px" }}>
              Create beautiful webflow sites with flowbase. Clone for <br />{" "}
              free and get started building a site today.
            </Typography>
            {cards.map((card) => (
              <Card className={classes.cardLearn} key={card.id}>
                <Box display="flex">
                  <div className={classes.circle}>
                    <img src="/Icon.png" width="30px" height="30px" />
                  </div>
                  <Grid align="left">
                    <Typography variant="h6">{card.title}</Typography>
                    <Typography variant="caption">
                      Who are you developing for? How will they use your design?
                      <br />
                      Building user personas can answer these.
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    className={classes.labelFeatures}
                    align="center"
                  >
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2">6 Videos</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2">4.5 Hours</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            ))}
          </Box>
          <Box display="flex" p={10}>
            <Box display="flex" flexDirection="column" marginY="auto">
              <Typography variant="h3">
                <b>Hi, I am David, your course instructor.</b>
              </Typography>
              <Typography variant="caption" style={{ marginTop: "20px" }}>
                Create beautiful webflow sites with flowbase. Clone for free and
                get started building a site today.
              </Typography>
            </Box>
            <img src="/Instructor.png" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
