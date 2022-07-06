import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import CreateJobs from "./components/CreateJobs/CreateJobs";
import HomePage from "./components/Homepage/HomePage";
import JobsList from "./components/JobsList/JobsList";
import { purple } from "./colors/colors";
import ninjaLogo from "./assets/ninja.png";
import {
  NinjaLogo,
  Title,
  StyledChakraBox,
  MainPage,
  CartIcon,
  ParentContainer
} from "./app.styles";
import cart from "./assets/cart.png";

export default class App extends React.Component {
  state = {
    currentPage: "",
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      case "createJobs":
        return <CreateJobs />;
      case "jobsList":
        return <JobsList />;
      default:
        return (
          <HomePage createJob={this.createJob} hireNinja={this.hireNinja} />
        );
    }
  };

  createJob = () => {
    this.setState({ currentPage: "createJobs" });
  };

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
            <CartIcon src={cart} alt="cart" />
          </StyledChakraBox>
          {this.renderPage()}
        </MainPage>
        </ParentContainer>
      </ChakraProvider>
    );
  }
}
