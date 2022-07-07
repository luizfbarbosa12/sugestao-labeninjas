import React, { Component } from "react";
import { Button } from "@chakra-ui/react";
import {
  Container,
  Title,
  DetailsCard,
  Prazo,
  FormaDePagamento,
  Description,
  ButtonsContainer,
} from "./Details.styles";

export default class Details extends Component {
  render() {
    return (
      <Container>
        <DetailsCard addedToCart={this.props.addedToCart}>
          <Title>{this.props.job.title}</Title>
          <FormaDePagamento>{`Aceita: ${this.props.job.paymentMethods[0]}`}</FormaDePagamento>
          <Prazo>{`Prazo: Até ${new Date(
            this.props.job.dueDate
          ).toLocaleDateString("br-BR", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}`}</Prazo>
          <Description>{this.props.job.description}</Description>
          <ButtonsContainer>
            <Button onClick={() => this.props.addToCart(this.props.job)}>
              Adicionar no carrinho
            </Button>
            <Button>Voltar pra lista</Button>
          </ButtonsContainer>
        </DetailsCard>
      </Container>
    );
  }
}
