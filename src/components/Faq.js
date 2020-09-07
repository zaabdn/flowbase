import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CssBaseline,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "100px 200px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "80%",
    padding: "0 30px",
    flexShrink: 0,
    fontWeight: "bold",
    color: "#001A49",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    padding: "0 70px 0 30px",
    color: "#4F596A",
    textAlign: "justify",
  },
}));

export default function Price() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Typography variant="h3" align="center">
        Frequently asked questions
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{
          margin: "50px 0 0",
          borderRadius: "20px",
          padding: "20px 10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Will I get full access to the course after purchasing?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        style={{
          margin: "50px 0 0",
          borderRadius: "20px",
          padding: "15px 10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            Do you give money back guarantee?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        style={{
          margin: "50px 0 0",
          borderRadius: "20px",
          padding: "15px 10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            Do you offer a discount?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        style={{
          margin: "50px 0 0",
          borderRadius: "20px",
          padding: "15px 10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            Do you offer support after joining?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
