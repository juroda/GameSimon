import styled from 'styled-components';
import { Link } from 'react-router';

const styles = `
  &:hover {
    transform: scale(1.02);
  }
  margin: 1em;
  color: white;
  outline: none;
  font-size: 2em;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 3px;
  padding: 0.25em 1em;
  text-decoration: none;
  border: 2px solid white;
  background-color: transparent;
  font-family: 'Bungee', sans-serif;
`;

export const Button = styled.button`${styles}`
export const ButtonLink = styled(Link)`${styles}`;
