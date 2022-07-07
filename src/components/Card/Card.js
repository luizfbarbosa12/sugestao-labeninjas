import React, { Component } from "react";
import { JobCard, Title, CartIcon, ButtonsArea } from "./Card.styles";
import cart from "../../assets/add-to-cart.png";
import { Button } from "@chakra-ui/react";
import { purple } from "../../colors/colors";
import checkout from "../../assets/check-out.png";
export default class Card extends Component {
  state = {
    purchased: false,
    id: ''
  };

  changeIcon = () => {
    this.setState({ purchased: true });
  };


  render() {
    return (
      <JobCard direction="column" align="center" justify="center">
        <Title>{this.props.job.title}</Title>
        <p>{this.props.job.description}</p>
        <p>
          {new Date(this.props.job.dueDate).toLocaleDateString("br-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p>Preço: {this.props.job.price.toFixed(2)}</p>
        <ButtonsArea>
          <Button onClick={() => this.props.goToDetails(this.props.job)} bg={purple} variant={"outline"}>
            Ver detalhes
          </Button>
          <CartIcon
            onClick={this.changeIcon}
            src={this.state.purchased ? checkout : cart}
            alt="carrinho"
          />
        </ButtonsArea>
      </JobCard>
    );
  }
}
