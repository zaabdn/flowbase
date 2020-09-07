import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  testimonial: {
    flexGrow: 1,
    padding: "100px 0",
    width: "100%",
    position: "relative",
    background:
      " linear-gradient(44.11deg, #CD10FF 15.75%, #CD10FF 15.76%, #9F06FF 84.63%)",
    backgroundSize: "cover",
  },
  card: {
    backgroundColor: "rgba(76, 0, 112, 0.195968)",
    borderRadius: "10px",
    padding: "20px 50px",
    textAlign: "center",
    justifyContent: "center",
    width: "40%",
    color: "white",
    margin: "0 20px 40px",
  },
}));

const testimonials = [
  {
    id: 1,
    img: "/user1.png",
    name: "Henk Fortuin",
  },
  {
    id: 2,
    img: "/user2.png",
    name: "Opi Watihana",
  },
  {
    id: 3,
    img: "/user3.png",
    name: "Annie Reyes",
  },
];

export default function Testimonial() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.testimonial}>
        <Box textAlign="center">
          <Box textAlign="center" p={1}>
            <Box p={1}>
              <Typography variant="h3" style={{ color: "white" }}>
                What my students say
              </Typography>
              <Typography
                variant="caption"
                style={{ opacity: "0.8", color: "white", marginTop: "15px" }}
              >
                Create custom landing pages with Shades that convert more
                visitors <br />
                than any website—no coding required.
              </Typography>
            </Box>
            <Box
              my={10}
              mx={0}
              width="100%"
              display="inline-block"
              justifyContent="center"
            >
              {testimonials.map((testi) => (
                <CardContent
                  className={classes.card}
                  key={testi.id}
                  component="div"
                  my={2}
                  overflow="auto"
                  style={{ display: "inline-block", width: "40%" }}
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ margin: "10px", color: "white" }}
                    align="left"
                  >
                    “I waited to completely finish the course to rate it. This
                    was my first approach to python, i am an excel and VBA user.
                    The professor has an excellent way to explain it and a lot
                    or order and organization. I really recommend it.”
                  </Typography>
                  <Box display="flex">
                    <img src={testi.img} />
                    <Box
                      display="flex"
                      flexDirection="column"
                      align="left"
                      style={{ margin: "10px" }}
                    >
                      <Typography variant="body2">
                        <b>{testi.name}</b>
                      </Typography>
                      <Typography variant="caption">
                        Founder of Crips
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
