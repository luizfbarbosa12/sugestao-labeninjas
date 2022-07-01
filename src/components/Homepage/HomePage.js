import React, { Component } from "react";
import { NinjaBackground, NinjaBackgroundLogo } from "../../app.styles";
import { purple } from "../../colors/colors";
import ninjaLogo from "../../assets/ninja.png";
import { Button } from "@chakra-ui/react";


export default class HomePage extends Component {
  render() {
    return (
      <NinjaBackground>
        <NinjaBackgroundLogo src={ninjaLogo} alt={"ninja logo"} />
        <div>
          <Button onClick={this.props.createJob} bg={purple}>
            Quero ser um ninja
          </Button>
          <Button onClick={this.props.hireNinja} m={2} bg={purple}>
            Contratar um ninja
          </Button>
        </div>
      </NinjaBackground>
    );
  }
}
