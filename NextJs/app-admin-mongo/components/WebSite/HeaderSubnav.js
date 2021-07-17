import { Button, ButtonGroup, Toolbar } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import GridItem from "../Grid/GridItem";

const HeaderSubnav = ({ classes, selected }) => {
  const router = useRouter();

  const handleClickSection = (section) => {
    switch (section) {
      case 0:
        router.push("/");
        break;
      case 1:
        router.push("/quienes-somos");
        break;
      case 2:
        router.push("/contactanos");
        break;
    }
  };

  return (
    <GridItem xs={12}>
      <Toolbar className={classes.toolbar}>
        <ButtonGroup variant="text" color="primary" fullWidth align="center">
          <Button
            variant={selected === 0 ? "contained" : undefined}
            onClick={() => handleClickSection(0)}
          >
            Inicio
          </Button>
          <Button
            variant={selected === 1 ? "contained" : undefined}
            onClick={() => handleClickSection(1)}
          >
            ¿Quiénes somos?
          </Button>
          <Button
            variant={selected === 2 ? "contained" : undefined}
            onClick={() => handleClickSection(2)}
          >
            Contáctanos
          </Button>
        </ButtonGroup>
      </Toolbar>
    </GridItem>
  );
};

export default HeaderSubnav;
