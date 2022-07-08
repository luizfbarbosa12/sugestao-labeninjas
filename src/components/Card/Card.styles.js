import { Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { black, purple } from "../../colors/colors";

export const JobCard = styled(Flex)`
  width: 25rem;
  border: 1px solid ${black};
  margin: 1rem;
  border-radius: 0.5rem;
  background-color: RGBA(255, 255, 255, 0.92);
`;

export const Title = styled.h1`
  color: ${purple};
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

export const CartIcon = styled.img`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  width: 100%;
`;
