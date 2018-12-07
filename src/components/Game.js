import styled from 'styled-components';

const Game = styled.div`
  position: relative;
  pointer-events: ${props => props.disbledPointer ? 'none' : 'initial'};
`;

export default Game;


