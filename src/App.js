import React from "react";
import axios from "axios";
import { BASE_URL, headers } from "./constants/constants";
import { ChakraProvider } from "@chakra-ui/react";
import CreateJobs from "./components/CreateJobs/CreateJobs";
import HomePage from "./components/Homepage/HomePage";
import JobsList from "./components/JobsList/JobsList";
import { purple } from "./colors/colors";
import ninjaLogo from "./assets/ninja.png";
import Details from "./components/Details/Details";
import CartPage from './components/CartPage/CartPage'
import {
  NinjaLogo,
  Title,
  StyledChakraBox,
  MainPage,
  CartIcon,
  ParentContainer,
} from "./app.styles";
import cart from "./assets/cart.png";

export default class App extends React.Component {
  state = {
    currentPage: "",
    jobs: [],
    currentJobDetails: {},
    cart: [],
    addedToCart: false,
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
  renderPage = () => {
    switch (this.state.currentPage) {
      case "createJobs":
        return <CreateJobs />;
      case "jobsList":
        return (
          <JobsList jobs={this.state.jobs} goToDetails={this.goToDetails} />
        );
      case "details":
        return (
          <Details
            addedToCart={this.state.addedToCart}
            addToCart={this.addToCart}
            job={this.state.currentJobDetails}
          />
        );
      case "cart":
        return (
          <CartPage
            cart={this.state.cart}
          />
        );
      default:
        return (
          <HomePage createJob={this.createJob} hireNinja={this.hireNinja} />
        );
    }
  };

  addToCart = (job) => {
    this.setState({ addedToCart: true });
    this.setState({ cart: [...this.state.cart, job] });
  };

  createJob = () => {
    this.setState({ currentPage: "createJobs" });
  };

  goToDetails = (job) => {
    this.setState({ currentPage: "details" });
    this.setState({ currentJobDetails: job });
  };

  goToCart = () => {
    this.setState({currentPage: "cart"})
  }

  hireNinja = () => {
    this.setState({ currentPage: "jobsList" });
  };

  goToHomePage = () => {
    this.setState({ currentPage: "homepage" });
  };

  render() {
    return (
      <ChakraProvider>
        <ParentContainer currentPage={this.state.currentPage}>
          <MainPage>
            <StyledChakraBox bg={purple} w="100%" p={2} color="white">
              <NinjaLogo src={ninjaLogo} alt={"ninja logo"} />
              <Title onClick={this.goToHomePage}>Labeninjas</Title>
              <CartIcon onClick={this.goToCart} src={cart} alt="cart" />
            </StyledChakraBox>
            {this.renderPage()}
          </MainPage>
        </ParentContainer>
      </ChakraProvider>
    );
  }
}
