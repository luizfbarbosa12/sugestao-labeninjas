import { Flex, Input, Select } from "@chakra-ui/react";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import React, { Component } from "react";
import { BASE_URL, headers } from "../../constants/constants";
import Card from "../Card/Card";
import { StyledFlexContainer } from "./JobsList.styles";

//     - De ordenar por:
//         - Título
//         - Valor da remuneração
//         - Prazo
export default class JobsList extends Component {
  state = {
    jobs: [],
    minValue: "",
    maxValue: "",
    queryType: "",
    search: "",
  };

  componentDidMount() {
    axios
      .get(`${BASE_URL}/jobs`, headers)
      .then((response) => {
        this.setState({ jobs: response.data.jobs });
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
    console.log(this.state.jobs);
    const renderJobsList = this.state.jobs
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
          this.state.maxValue === "" || job.price <= Number(this.state.minValue)
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
      })
      .map((job) => {
        return <Card key={job.id} job={job} />;
      });
    return (
      <div>
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
        {renderJobsList}
      </div>
    );
  }
}
