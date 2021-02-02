import React from "react";
// Components
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
// import Link from '@material-ui/core/Link';
import Container from "@material-ui/core/Container";
// PATHS
import { LOGIN } from "../config/router/path";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
// styles
import HomeStyles from "../Styles/HomeStyle";
import { tiers } from "../utils/tiers";

export default function Pricing() {
  const classes = HomeStyles();

  return (
    <React.Fragment>
      <div className={classes.body}>
        <CssBaseline />
        <Navbar />
        <Container component="main" className={classes.header}>
          <div>
            <h1 className={classes.h1}>
              ¡Guarda tus documentos de manera segura y sin complicaciones!
            </h1>
            <h2>Comienza a ser mas productivo en tu dia a dia.</h2>
            <p className={classes.p}>
              Tendras todos tus documentos seguros y a tan solo un click.
            </p>
            <div>
              <button className={classes.button}>
                <Link className={classes.link} to={LOGIN}>
                ¡Registrarme Ahora!
                </Link>

                </button>
            </div>
          </div>
          <img
            src="https://orquideatech.com/wp-content/uploads/2020/02/00_blog_productividad-uai-957x718-1.jpg"
            className={classes.img}
          />
        </Container>
        <Container component="main" className={classes.heroContent}>
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            ¡Elige tu plan¡
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Todos nuestros planes con un 20% de descuento.
          </Typography>
        </Container>

        <Container component="main" style={{ background: "#e8e5d7" }}>
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    action={tier.title === "SemiPro" ? <StarIcon /> : null}
                    className={classes.cardHeader}
                  />
                  <CardContent
                    style={{ background: "black", color: "#e8e5d7" }}
                  >
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3">
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6">/mo</Typography>
                    </div>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions style={{ background: "black" }}>
                    <Button
                      variant={tier.buttonVariant}
                      style={{
                        background: "#fbc404",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        width: "300px",
                        margin: "auto",
                        height: "50px",
                        marginBottom: "20px",
                      }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}
