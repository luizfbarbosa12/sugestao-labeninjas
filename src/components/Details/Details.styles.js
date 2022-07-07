import styled from "styled-components";
import { black, purple } from "../../colors/colors";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const DetailsCard = styled.div`
  border: 1px solid ${black};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 10px 10px 17px -6px rgba(0, 0, 0, 0.75);
  transition: all .5s ease;
  ${(props) => console.log(props)}
  ${(props) => props.addedToCart && "transform: translate(15rem, 5rem) rotate(15deg)"};
  ${(props) => props.addedToCart && "opacity: 0"};
`;

export const Title = styled.h1`
  color: ${purple};
  font-size: 3rem;
  font-weight: bold;
`;

export const Description = styled.p`
  color: ${black};
  padding: 0.5rem;
`;
export const FormaDePagamento = styled.p`
  color: ${black};
  padding: 0.5rem;
`;

export const Prazo = styled.p`
  color: ${black};
  padding: 0.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
`;
