import axios from "axios";
import React, { Component } from "react";
import { BASE_URL, headers } from "../../constants/constants";
import Card from "../Card/Card";

// - Na parte de busca e listagem o usuário deve ser capaz de ver mais detalhes de uma oferta e decidir se deseja contratá-la (também será possível que o usuário desista da contratação).

// - Na listagem de trabalhos o usuário deve ser capaz:
//     - De filtrar por:
//         - Valor mínimo e máximo
//         - Título ou descrição (busca)
//     - De ordenar por:
//         - Título
//         - Valor da remuneração
//         - Prazo
export default class JobsList extends Component {
  state = {
    jobs: [],
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

  render() {
    const renderJobsList = this.state.jobs.map((job) => {
      return <Card key={job.id} job={job} />;
    });
    return <div>{renderJobsList}</div>;
  }
}
