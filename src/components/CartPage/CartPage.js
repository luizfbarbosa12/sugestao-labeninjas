import React, { Component } from "react";
import Card from "../Card/Card";
import { CartContainer, TotalValueContainer, Text } from "./CartPage.styles";

export default class CartPage extends Component {
  state = {
    total: 0,
  };
  render() {
    const totalValue = this.props.cart.reduce((prevJob, currentJob) => {
      return prevJob + currentJob.price;
    }, this.state.total);
    return (
      <>
        <TotalValueContainer>
          <Text>Valor Total: ${totalValue}</Text>
        </TotalValueContainer>
        <CartContainer>
          {this.props.cart.map((job) => {
            return (
              <Card
                addedToCart={this.props.addedToCart}
                key={job.id}
                goToDetails={this.props.goToDetails}
                job={job}
              />
            );
          })}
        </CartContainer>
      </>
    );
  }
}
