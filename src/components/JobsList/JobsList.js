import { Flex, Input, Select } from "@chakra-ui/react";

import React, { Component } from "react";

import Card from "../Card/Card";
import { StyledFlexContainer, CardsContainer, Container } from "./JobsList.styles";

export default class JobsList extends Component {
  state = {
    minValue: "",
    maxValue: "",
    queryType: "",
    search: "",
  };

  handleMinPrice = (e) => {
    this.setState({ minValue: e.target.value });
  };

  handleMaxPrice = (e) => {
    this.setState({ maxValue: e.target.value });
  };

  handleQueryType = (e) => {
    this.setState({ queryType: e.target.value });
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const renderJobsList = this.props.jobs
      .filter((job) => {
        return job.title
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      })
      .filter((job) => {
        return (
          this.state.minValue === "" || job.price >= Number(this.state.minValue)
        );
      })
      .filter((job) => {
        return (
          this.state.maxValue === "" || job.price <= Number(this.state.maxValue)
        );
      })
      .sort((currentValue, nextValue) => {
        switch (this.state.queryType) {
          case "prazo":
            return (
              new Date(currentValue.dueDate).getTime() -
              new Date(nextValue.dueDate).getTime()
            );
          case "cres":
            return (currentValue.price - nextValue.price) * 1;
          case "desc":
            return (currentValue.price - nextValue.price) * -1;
          default:
            return currentValue.price - nextValue.price;
        }
      }).map((job) => {
        return (
          <Card id={this.props.id} addedToCart={this.props.addedToCart} addToCart={this.props.addToCart} goToDetails={this.props.goToDetails} key={job.id} job={job} />
        );
      });
    return (
      <Container>
        <StyledFlexContainer grow={0} justify={"center"} align={"center"}>
          <Select
            onChange={this.handleQueryType}
            value={this.state.queryType}
            w="200px"
          >
            <option value={"cres"}>Preço crescente</option>
            <option value={"desc"}>Preço decrescente</option>
            <option value={"prazo"}>Prazo</option>
          </Select>
          <Input
            onChange={this.handleMinPrice}
            value={this.state.minValue}
            w="200px"
            placeholder="Valor mínimo"
            type={"number"}
          />
          <Input
            onChange={this.handleMaxPrice}
            value={this.state.maxValue}
            w="200px"
            placeholder="Valor máximo"
            type={"number"}
          />
          <Input
            onChange={this.handleSearch}
            value={this.state.search}
            w="200px"
            placeholder="Buscar"
            type={"text"}
          />
        </StyledFlexContainer>
        <CardsContainer>{renderJobsList}</CardsContainer>
      </Container>
    );
  }
}
