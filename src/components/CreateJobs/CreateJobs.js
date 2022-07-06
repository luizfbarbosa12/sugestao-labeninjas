import React, { Component } from "react";
import { Button, Input, Select } from "@chakra-ui/react";
import { StyledForm } from "./CreateJobs.styles";
import { purple } from "../../colors/colors";
import axios from "axios";
import { BASE_URL, headers } from "../../constants/constants";

//RESOLVER BUG QUE NÃO DÁ PRA USAR MULTIPLE NO CHAKRA UI
export default class CreateJobs extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    paymentMethod: [],
    date: "",
  };

  onChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  onChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  onChangePrice = (event) => {
    this.setState({
      price: event.target.value,
    });
  };

  onChangePaymentMethod = (event) => {
    const newPaymentMethods = [...this.state.paymentMethod];
    newPaymentMethods.push(event.target.value);

    this.setState({
      paymentMethod: newPaymentMethods,
    });
  };

  onChangeDate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  createJob = () => {
    const body = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: this.state.paymentMethod,
      dueDate: this.state.date,
    };
    axios
      .post(`${BASE_URL}/jobs`, body, headers)
      .then((response) => {
        alert(response.data.message)
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      title: "",
      description: "",
      price: "",
      paymentMethod: [],
      date: "",
    });
  };

  render() {
    return (
      <div>
        <StyledForm spacing={3}>
          <Input
            onChange={this.onChangeTitle}
            value={this.state.title}
            isRequired
            placeholder="Título*"
            type={"text"}
          />
          <Input
            onChange={this.onChangeDescription}
            value={this.state.description}
            isRequired
            placeholder="Descrição*"
            type={"text"}
          />
          <Input
            onChange={this.onChangePrice}
            value={this.state.price}
            isRequired
            placeholder="R$"
            type={"number"}
          />
          <Select
            onChange={this.onChangePaymentMethod}
            isRequired
            placeholder="Selecione a forma de pagamento"
          >
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
            <option value="Pix">Pix</option>
            <option value="PayPal">PayPal</option>
            <option value="Boleto">Boleto</option>
          </Select>
          <Input
            onChange={this.onChangeDate}
            value={this.state.date}
            isRequired
            placeholder="dd/mm/yyy"
            type={"date"}
          />
          <Button onClick={this.createJob} bg={purple}>
            Enviar
          </Button>
        </StyledForm>
      </div>
    );
  }
}
