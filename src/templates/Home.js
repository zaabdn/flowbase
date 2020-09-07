import Head from "next/head";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import { makeStyles, CssBaseline, Container } from "@material-ui/core";
import Footer from "../components/Footer";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  mainHome: {
    minWidth: "100%",
    position: "absolute",
  },
}));

export default function Home() {
  const classes = useStyles();
  const hpScreen = useMediaQuery("(max-width:600px)");
  const tabletScreen = useMediaQuery("(max-width:1000px)");
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" style={{ padding: 0, margin: 0 }}>
        <Header />
        <main className={classes.mainHome}>
          <Jumbotron />
          <Features />
          <Testimonial />
          <Faq />
          <Contact />
          <Footer />
        </main>
      </Container>
    </>
  );
}
