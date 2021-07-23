import React from "react";
import Carousel from "react-material-ui-carousel";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControlLabel-root": {
      margin: theme.spacing(1, 2, 1),
    },
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      width: "320px",
    },
    [theme.breakpoints.up("md")]: {
      width: "480px",
    },
  },
  marTB: {
    margin: theme.spacing(1, 0, 3),
  },
  orangeText: {
    color: theme.palette.primary.main,
  },
}));

const Computer = (props) => {
  const computer = JSON.parse(localStorage.getItem("computer"));
  const classes = useStyles();

  const renderCarousel = () => (
    <Carousel>
      {computer.images.map((i) => (
        <div>
          <img src={i} alt={computer.model} className={classes.image} />
        </div>
      ))}
    </Carousel>
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" color="primary">
          {computer.model}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div style={{ textAlign: "center" }}>{renderCarousel()}</div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" className={classes.marTB} color="primary">
          COMPONENTES
        </Typography>
        <Typography variant="h6" className={classes.marTB}>
          <span>
            <img
              src="/images/components/cpu.png"
              alt="cpu"
              style={{ height: "48px" }}
            />
            <span className={classes.orangeText}> CPU: </span>
            {computer.components.cpu.model}
          </span>
        </Typography>
        <Typography variant="h6" className={classes.marTB}>
          <span>
            <img
              src="/images/components/gpu.png"
              alt="gpu"
              style={{ height: "48px" }}
            />
            <span className={classes.orangeText}> GPU: </span>
            {computer.components.gpu
              ? computer.components.gpu.model
              : "Integrada"}
          </span>
        </Typography>
        <Typography variant="h6" className={classes.marTB}>
          <span>
            <img
              src="/images/components/ram.png"
              alt="ram"
              style={{ height: "48px" }}
            />
            <span className={classes.orangeText}> RAM: </span>
            {`${computer.components.ram.capacity} GB - ${computer.components.ram.type}`}
          </span>
        </Typography>
        <Typography variant="h6" className={classes.marTB}>
          <span>
            <img
              src="/images/components/disk.png"
              alt="disco"
              style={{ height: "48px" }}
            />
            <span className={classes.orangeText}> Disco: </span>
            {`${computer.components.disk.capacity} GB - ${computer.components.disk.type}`}
          </span>
        </Typography>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            let win = window.open(computer.provider.url, "_blank");
            win.focus();
          }}
        >
          Ir a {computer.provider.provider}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Computer;
